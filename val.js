/* Эверест: вкладка «Оценка», кнопка оценки в карточке лота торгов, порядок вкладок (всё настраивается через EV_CFG). */
(function(){
var C=window.EV_CFG||{};
var ORDER=C.tab_order||['reg','man','fav','rep','prop','perr','val'];
var DISC=C.val_disclaimer||'Не является отчётом об оценке по 135-ФЗ, носит информационно-аналитический характер';
var METHOD=C.val_method||'Ориентировочная рыночная цена (сравнительный подход, по аналогам)';
var VTTL=(C.val_ttl_min||5)*6e4;
function g(n){try{return (0,eval)(n)}catch(e){return undefined}}
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var MSK={timeZone:'Europe/Moscow'};
function fdt(v){var d=new Date(v);if(isNaN(d))return v||'';return d.toLocaleDateString('ru-RU',Object.assign({day:'2-digit',month:'2-digit',year:'numeric'},MSK))}
function hm(v){var d=new Date(v);return isNaN(d)?'':d.toLocaleTimeString('ru-RU',Object.assign({hour:'2-digit',minute:'2-digit',hour12:false},MSK))}
function rub(v){return v==null?'—':Math.round(v).toLocaleString('ru-RU')+' ₽'}
var nav=document.querySelector('nav');if(!nav)return;
/* --- кнопка и вид «Оценка» --- */
var vb=document.createElement('button');vb.dataset.v='val';vb.title='Оценка';
vb.innerHTML='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14"/><path d="M5 7l-3 6a3 2 0 0 0 6 0zM19 7l-3 6a3 2 0 0 0 6 0z"/></svg></span><span class="lb">Оценка</span><span class="badge" id="valn">0</span>';
nav.appendChild(vb);
var V=document.createElement('div');V.id='vval';V.style.display='none';
V.innerHTML='<div class="md"><h2>Оценка</h2><p class="sm" id="valm"></p><div id="vall"></div></div>';
var vrep=$('vrep');(vrep&&vrep.parentNode||document.body).insertBefore(V,vrep?vrep.nextSibling:null);
var st=document.createElement('style');st.textContent=
'#vall .vrow{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 14px;align-items:start}#vall .vact{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}'+
'#vall .vcap{margin-top:2px}#vall .vhd{margin:0 0 4px;font-size:16px;color:var(--gold,var(--acc))}#vall .vdisc,.pval .vdisc{font-size:12px;color:var(--mut,#8a93a3);margin-top:6px;line-height:1.35}#vall .vsum{font-weight:600}'+
'@media(max-width:640px){#vall .vrow{grid-template-columns:1fr}#vall .vact{justify-content:flex-start}}'+
'.pval{grid-column:1/-1;margin-top:10px}.pval .lbtn{width:100%;justify-content:center}.pval .vreq{background:transparent!important;border:1.5px solid var(--gold,var(--acc));color:var(--gold,var(--acc))!important}'+
'.pval .vwip{background:rgba(140,150,165,.22)!important;color:var(--mut,#8a93a3)!important;border:1px solid rgba(140,150,165,.35);cursor:default;box-shadow:none!important;transform:none!important}';
document.head.appendChild(st);
var VIEWS=['vreg','vmet','vsrc','vrep','vprc','vfin','vprop','vman','othbar','favseg'];
function showVal(){nav.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b===vb)});VIEWS.forEach(function(i){var e=$(i);if(e)e.style.display='none'});V.style.display='';valList(true)}
vb.addEventListener('click',showVal);
nav.querySelectorAll('button').forEach(function(b){if(b!==vb)b.addEventListener('click',function(){FOC=null;V.style.display='none';vb.classList.remove('on')})});
var oth=$('oth');if(oth)oth.addEventListener('click',function(){V.style.display='none';vb.classList.remove('on')});
/* --- порядок вкладок (Прочее всегда последнее) --- */
function order(){var bs=[].slice.call(nav.children);var by={};bs.forEach(function(b){var k=b.dataset&&b.dataset.v;if(k)by[k]=b});
 var seen=new Set();ORDER.forEach(function(k){var b=by[k];if(b){nav.appendChild(b);seen.add(b)}});
 bs.forEach(function(b){if(!seen.has(b)&&b.id!=='oth')nav.appendChild(b)});if(oth)nav.appendChild(oth)}
order();
/* --- данные --- */
var FOC=null,VIDX=[],VPEND=[],VT=0,VLD=null;
function online(){return !g('EMB')&&g('TOKEN')&&g('REPO')&&!String(g('REPO')).startsWith('/*')}
function load(force){if(!online())return Promise.resolve();if(VLD)return VLD;if(!force&&VT&&Date.now()-VT<VTTL)return Promise.resolve();
 VLD=(async function(){try{var x=await g('ghRaw')('valuation/index.json');var j=JSON.parse(x);VIDX=Array.isArray(j)?j:(j.items||j.reports||[])}catch(e){if(!/404/.test(e.message))VIDX=VIDX||[]}
  try{var done=new Set(VIDX.map(function(v){return v.request_id}));VPEND=(await g('pendList')()).filter(function(p){return p.val&&!done.has(p.id)})}catch(e){}
  VT=Date.now();VLD=null;$('valn').textContent=VIDX.length+VPEND.length;rerender()})();return VLD}
function rerender(){if(V.style.display!=='none')draw();var vp=$('vprop');if(vp&&vp.style.display!=='none'&&g('POPEN')&&typeof g('propRender')=='function')g('propRender')()}
function vdate(v){return v.valuation_date||v.date||(v.request_id||'').replace(/^(\d{4})(\d\d)(\d\d).*/,'$1-$2-$3')}
function lotOf(v){var P=g('PROP');var id=v.lot_id||(v.object&&v.object.lot_id);if(!id||!P)return null;return P.lots.find(function(l){return String(l.id)===String(id)})}
function deb(x){var d=x&&x.debtor;return d&&typeof d==='object'?d.name:d||''}
function files(v){return [['report','Отчёт'],['xlsx','Расчёт'],['methodology','Методика']].filter(function(f){return v[f[0]]}).map(function(f){var p=v[f[0]],n=p.split('/').pop();return '<button class="lbtn sec" data-f="'+esc(n)+'" data-p="'+esc(p)+'">'+f[1]+'</button>'}).join('')}
function draw(){var m=$('valm'),L=$('vall');
 if(!online()){m.textContent=g('EMB')?'Доступно в онлайн-версии.':'Нужен вход (PIN или ключ GitHub).';L.innerHTML='';return}
 if(VLD&&!VT){m.textContent='Загрузка…';L.innerHTML='<div class="ldsk"><div class="ldt">База загружается…</div><i></i><i></i></div>';return}
 var R=VIDX.slice().sort(function(a,b){return String(vdate(b)).localeCompare(String(vdate(a)))||String(b.request_id).localeCompare(String(a.request_id))});
 m.textContent=(R.length?'Оценок: '+R.length:'Оценок пока нет.')+(VPEND.length?' · в работе: '+VPEND.length:'');
 var pend=VPEND.map(function(p){var q=p.q||{},l=q.lot||{},o=q.object||{};var es='';try{es=g('etaStatus')(q)}catch(e){}
  return '<div class="lot pend"><div class="row vrow" style="cursor:default"><div><div class="d1">'+esc(q.title||o.title||l.title||o.make_model||p.id)+'</div><div class="sm">'+esc([deb(q)||deb(l),q.lot_id?'лот '+(l.trade_no||q.lot_id):'',q.method||o.method?(q.method||o.method):''].filter(Boolean).join(' · '))+'</div><div class="sm"><b>'+esc(es||p.st)+'</b></div></div><div></div></div></div>'}).join('');
 L.innerHTML=pend+R.map(function(v){var l=lotOf(v),r=v.range||{};
  var who=[deb(v)||deb(l),v.lot_id?'лот '+((l&&l.trade_no)||v.lot_id):''].filter(Boolean).join(' · ');
  return '<div class="lot"><div class="row vrow" style="cursor:default"><div><div class="d1">'+esc(v.title||(l&&l.title)||v.request_id)+'</div>'+(who?'<div class="sm">'+esc(who)+'</div>':'')+
  (FOC&&String(v.lot_id)===FOC?'<h3 class="vhd">'+esc(v.method||METHOD)+'</h3>':'')+'<div class="sm">Дата оценки: '+esc(fdt(vdate(v)))+'</div>'+
  (v.value!=null?'<div class="vsum">'+rub(v.value)+(r.min!=null?' <span class="sm" style="font-weight:400">(диапазон '+rub(r.min)+' – '+rub(r.max)+')</span>':'')+'</div><div class="sm vcap">'+esc(v.method||METHOD)+'</div>':'')+
  '<div class="vdisc">'+esc(DISC)+'</div></div><div class="vact">'+files(v)+'</div></div></div>'}).join('');}
V.addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(b){var f=g('dlClick');if(f)f(e)}});
function valList(force){draw();load(force).then(draw)}
/* --- кнопка в карточке лота --- */
window.valBtn=function(l){load();var id=String(l.id);
 var done=VIDX.filter(function(v){return String(v.lot_id||(v.object&&v.object.lot_id)||'')===id})[0];
 var wip=VPEND.filter(function(p){return String((p.q||{}).lot_id||'')===id})[0];
 var b;if(done)b='<button class="lbtn" data-pvalo="'+esc(id)+'">Открыть оценку</button>';
 else if(wip){var t='';try{t=g('etaHM')(g('etaAt')(wip.q))}catch(e){}b='<button class="lbtn vwip" disabled>Оценка в работе'+(t?' · до '+esc(t):'')+'</button>'}
 else b='<button class="lbtn vreq" data-pval="'+esc(id)+'">Запросить оценку</button>';
 return '<div class="pval">'+b+'<div class="vdisc">'+esc(DISC)+'</div></div>'};
function kind(l){var s=[l.type,l.category,l.title].join(' ').toLowerCase();return /недвиж|квартир|дом|участ|помещ|здан/.test(s)?'real_estate':/автомоб|транспорт|машин/.test(s)?'movable':'other'}
function mkReq(l){var t=new Date(),id=t.toISOString().replace(/[-:]/g,'').slice(0,15)+'Z-ev-'+Math.random().toString(36).slice(2,6);var pn=g('pNm')||function(x){return x&&x.name||x||''},pi=g('pInn')||function(){return ''};
 return {type:'valuation',version:2,id:id,case_id:'V'+id.slice(0,15).replace('T','')+'-'+id.slice(-4),created_at:t.toISOString(),source:'Everest / Торги',for:'Оценщик',
  lot_id:l.id,title:l.title||l.category||('Лот '+l.id),debtor:{name:pn(l.debtor),inn:pi(l,'debtor')},object_type:kind(l),
  object:{lot_id:l.id,trade_no:l.trade_no,url:l.url,type:l.type,category:l.category,title:l.title,address:l.address||l.region,area:l.area,start_price:l.start_price,current_price:l.current_price,stage:l.stage,description:l.description?String(l.description).slice(0,3000):undefined},
  method:METHOD,value_type:'market',valuation_date:t.toISOString().slice(0,10),purpose:'self',doc_title:'Аналитическая справка о рыночной стоимости',disclaimer:DISC,deliverables:['report','xlsx','methodology'],files:[]}}
document.addEventListener('click',function(e){var o=e.target.closest('[data-pvalo]');if(o){e.stopPropagation();FOC=o.dataset.pvalo;vb.click();setTimeout(function(){var h=document.querySelector('#vall .vhd');if(h)h.scrollIntoView({block:'center'})},300);return}
 var b=e.target.closest('[data-pval]');if(!b)return;e.stopPropagation();var P=g('PROP'),l=P&&P.lots.find(function(x){return String(x.id)===b.dataset.pval});if(!l)return;
 var req=mkReq(l),toast=g('toast'),ghApi=g('ghApi'),u8=g('u8b64');
 if(!online()){var ds=g('deepShow');if(ds)ds(req,'Отправить напрямую нельзя: нужен вход. Скопируйте запрос и отправьте боту «Оценщик».','Оценка');return}
 b.disabled=true;b.textContent='Отправляю…';
 ghApi('requests/'+req.id+'.json',{method:'PUT',body:JSON.stringify({message:'valuation '+req.id,branch:g('BRANCH'),content:u8(JSON.stringify(req,null,1))})}).then(function(r){
  if(!r.ok)throw new Error('GitHub '+r.status);var a='';try{a=g('etaAccepted')(req)}catch(x){}
  toast('✓ '+esc(a||'Запрос принят')+'. Метод: '+esc(METHOD)+'. Результат будет во вкладке <a href="#" data-go="val" style="color:#bcd3ff;text-decoration:underline">«Оценка»</a>.',15000);
  VPEND.unshift({id:req.id,q:req,st:'в очереди',val:true});$('valn').textContent=VIDX.length+VPEND.length;g('propRender')()}).catch(function(x){b.disabled=false;b.textContent='Запросить оценку';toast('Не удалось отправить запрос: '+esc(x.message),8000)})},true);
setTimeout(function(){load()},4000);
})();
