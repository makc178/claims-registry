/* Эверест: вкладка «Оценка», кнопка оценки в карточке лота торгов, порядок вкладок (всё настраивается через EV_CFG). */
(function(){
var C=window.EV_CFG||{};
var ORDER=C.tab_order||['reg','man','fav','rep','prop','perr','val'];window.EV_TAB_ORDER=ORDER;
var DISC=C.val_disclaimer||'Не является отчётом об оценке по 135-ФЗ, носит информационно-аналитический характер';
var METHOD=C.val_method||'Ориентировочная рыночная цена (сравнительный подход, по аналогам)';
var VTTL=(C.val_ttl_min||5)*6e4;
/* заявки на оценку: удаление (в очереди / отменённые) и отмена (переданные Оценщику); тексты и правила — config/everest.json → val_requests (встраивает build.py) */
var VR=Object.assign({delete_states:['queue','cancelled'],cancel_states:['picked'],cancel_index_statuses:['pending','need_data','partial'],delete:{},cancel:{},cancelled_tag:'Отменена',cancel_note:''},{"delete_states":["queue","cancelled"],"cancel_states":["picked"],"cancel_index_statuses":["pending","need_data","partial"],"delete":{"title":"Удалить заявку на оценку?","note":"","ok_text":"Удалить","no_text":"Отмена","toast_text":"Заявка удалена","undo_text":"Вернуть","restored_text":"Заявка возвращена","done_text":"Заявка удалена","fail_text":"Не удалось удалить заявку"},"cancel":{"button":"Отменить заявку","title":"Отменить заявку на оценку?","note":"Оценщик получит уведомление об отмене. После отмены заявку можно удалить.","ok_text":"Отменить заявку","no_text":"Не отменять","toast_text":"Заявка отменена","undo_text":"Вернуть","restored_text":"Заявка не отменена","done_text":"Заявка отменена","fail_text":"Не удалось отменить заявку"},"cancelled_tag":"Отменена","cancel_note":"Заявка отменена пользователем в Эвересте: оценку не выполнять, если начата — остановить."},C.val_requests||{});
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
var st=document.createElement('style');st.textContent='#vall .vnd .vndt{background:color-mix(in srgb,#d9822b 18%,transparent);color:#b5651d}[data-theme=dark] #vall .vnd .vndt{color:#f0b37a}#vall .vmis{margin:4px 0 6px;padding-left:20px}#vall .vmis li{margin:2px 0;line-height:1.35;font-size:13px}#vall .vndh{margin-top:6px}#vall .vre{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}#vall .vre textarea{flex:1 1 100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:1px solid var(--line);background:var(--pan);color:var(--ink);font:inherit}#vall .vfp{cursor:pointer}#vall .vcan{font:inherit;font-size:13px;white-space:nowrap}#vall .vcx{background:rgba(140,150,165,.22);color:var(--mut,#8a93a3)}'+
'#vall .vrow{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 14px;align-items:start}#vall .vact{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}'+
'#vall .vcap{margin-top:2px}#vall .vhd{margin:0 0 4px;font-size:16px;color:var(--gold,var(--acc))}#vall .vdisc,.pval .vdisc{font-size:12px;color:var(--mut,#8a93a3);margin-top:6px;line-height:1.35}#vall .vsum{font-weight:600}'+
'@media(max-width:640px){#vall .vrow{grid-template-columns:1fr}#vall .vact{justify-content:flex-start}}'+
'.pval{grid-column:1/-1;margin-top:10px}.prepw{display:flex;gap:6px;flex-wrap:wrap}.prepw .lbtn{width:auto!important}.pval .lbtn{width:100%;justify-content:center}.pval .vreq{background:transparent!important;border:1.5px solid var(--gold,var(--acc));color:var(--gold,var(--acc))!important}'+
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
  try{var done=new Set(VIDX.map(function(v){return v.request_id}));var seen={};VPEND=(await g('pendList')()).filter(function(p){if(!p.val||done.has(p.id)||isArb(p.q)||seen[p.id])return false;seen[p.id]=1;return true})}catch(e){}
  VT=Date.now();VLD=null;$('valn').textContent=VIDX.length+VPEND.length;rerender()})();return VLD}
function rerender(){if(V.style.display!=='none')draw();var vp=$('vprop');if(vp&&vp.style.display!=='none'&&g('POPEN')&&typeof g('propRender')=='function')g('propRender')()}
function vdate(v){return v.valuation_date||v.date||(v.request_id||'').replace(/^(\d{4})(\d\d)(\d\d).*/,'$1-$2-$3')}
function lotOf(v){var P=g('PROP');var id=v.lot_id||(v.object&&v.object.lot_id);if(!id||!P)return null;return P.lots.find(function(l){return String(l.id)===String(id)})}
function deb(x){var d=x&&x.debtor;return d&&typeof d==='object'?d.name:d||''}
function files(v){return [['report','Отчёт'],['xlsx','Расчёт'],['methodology','Методика']].filter(function(f){return v[f[0]]}).map(function(f){var p=v[f[0]],n=p.split('/').pop();return '<button class="lbtn sec" data-f="'+esc(n)+'" data-p="'+esc(p)+'">'+f[1]+'</button>'}).join('')}
/* --- «Нужны данные»: Оценщик ставит status:need_data и missing[]; повторная отправка: файлы → valuation/<id>/input/, запрос → requests/<id>.json
   со status:pending и rev+1 (сборщик заберёт его снова; ключ пересылки id#r<rev>), копия в requests/picked/ удаляется --- */
function isArb(q){return /^arbitr/i.test(String((q||{}).source||''))}
function ndRow(p){var q=p.q||{},o=q.object||{},mis=Array.isArray(q.missing)?q.missing:(q.missing?[String(q.missing)]:[]),id=esc(p.id);
 return '<div class="lot pend vnd" data-evrow data-vnd="'+id+'"><div class="row vrow" style="cursor:default"><div style="min-width:0"><div class="d1">'+esc(q.title||o.title||p.id)+'</div>'+
  '<div class="sm">'+esc([deb(q),q.lot_id?'лот '+(o.trade_no||q.lot_id):''].filter(Boolean).join(' · '))+'</div>'+
  '<div class="sm"><span class="tag vndt">Нужны данные</span>'+(q.rev>1?' <span class="sm">повтор '+(q.rev-1)+'</span>':'')+'</div>'+
  (mis.length?'<div class="sm vndh">Оценщику не хватает:</div><ol class="vmis">'+mis.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ol>':'')+
  (q.need_data_note?'<div class="sm">'+esc(q.need_data_note)+'</div>':'')+
  '<div class="vre"><label class="lbtn sec vfp">Прикрепить файлы<input type="file" multiple hidden data-vfi="'+id+'"></label><span class="sm vfl" data-vfl="'+id+'"></span>'+
  '<textarea rows="3" data-vtx="'+id+'" placeholder="Или напишите недостающие данные текстом"></textarea>'+
  '<button class="lbtn" data-vresend="'+id+'">Отправить повторно</button><span class="sm vrm" data-vrm="'+id+'"></span></div></div><div class="vact">'+reqAct(p)+'</div></div></div>'}
function vstate(p){var q=p.q||{},ED=window.EVDel;if(q.status==='cancelled'||(ED&&ED.cancelled&&ED.cancelled(p.id)))return 'cancelled';return p.st==='в очереди'?'queue':'picked'}
function reqAct(p){var ED=window.EVDel;if(!ED)return '';var s=vstate(p),q=p.q||{},o=q.object||{},nm=q.title||o.title||p.id,h='';
 if(s==='cancelled')h+='<span class="tag vcx">'+esc(VR.cancelled_tag||'Отменена')+'</span>';
 if(VR.delete_states.indexOf(s)>=0)h+=ED.icon('valreq','vrq:'+p.id,nm);
 else if(VR.cancel_states.indexOf(s)>=0)h+='<button type="button" class="evdel vcan" data-evdel="valreq_cancel" data-evkey="vrc:'+esc(p.id)+'" data-evnm="'+esc(nm)+'" title="'+esc((VR.cancel||{}).button||'Отменить заявку')+'">'+esc((VR.cancel||{}).button||'Отменить заявку')+'</button>';
 return h}
var VSEL={};
V.addEventListener('change',function(e){var i=e.target.closest('input[data-vfi]');if(!i)return;var id=i.dataset.vfi;VSEL[id]=[].slice.call(i.files||[]);var s=V.querySelector('[data-vfl="'+id+'"]');if(s)s.textContent=VSEL[id].map(function(f){return f.name}).join(', ')});
function cleanReq(q){var o={};Object.keys(q).forEach(function(k){if(k.charAt(0)!=='_')o[k]=q[k]});return o}
async function resend(id){var p=VPEND.find(function(x){return x.id===id});if(!p)return;var q=p.q||{},fs=VSEL[id]||[],tx=(V.querySelector('[data-vtx="'+id+'"]')||{}).value||'',msg=V.querySelector('[data-vrm="'+id+'"]'),bt=V.querySelector('[data-vresend="'+id+'"]');
 tx=tx.trim();if(!fs.length&&!tx){if(msg)msg.textContent='Прикрепите файлы или напишите данные текстом.';return}
 var ghApi=g('ghApi'),ab=g('ab64'),u8=g('u8b64'),BR=g('BRANCH'),toast=g('toast');bt.disabled=true;
 try{var up=[];for(var i=0;i<fs.length;i++){var f=fs[i];if(msg)msg.textContent='Загружаю '+(i+1)+' из '+fs.length+': '+f.name+'…';
   var nm=f.name.replace(/[\\/:*?"<>|#%]+/g,'_'),path='valuation/'+id+'/input/'+nm;
   var r=await ghApi(path.split('/').map(encodeURIComponent).join('/'),{method:'PUT',body:JSON.stringify({message:'valuation data '+id,branch:BR,content:ab(await f.arrayBuffer())})});
   if(!r.ok)throw new Error(f.name+': GitHub '+r.status);up.push({path:path,name:nm,size:f.size})}
  var rev=(+q.rev||1)+1,now=new Date().toISOString(),n=cleanReq(q);
  n.history=(Array.isArray(q.history)?q.history:[]).concat([{rev:rev-1,status:'need_data',missing:q.missing||[],note:q.need_data_note||undefined}]);
  n.data_added=(Array.isArray(q.data_added)?q.data_added:[]).concat([{rev:rev,at:now,text:tx||undefined,files:up.map(function(x){return x.path})}]);
  n.files=(Array.isArray(q.files)?q.files:[]).concat(up);n.status='pending';n.rev=rev;n.resubmitted_at=now;n.missing_prev=q.missing||[];delete n.missing;delete n.need_data_note;
  if(msg)msg.textContent='Отправляю…';
  var sha;try{var g0=await ghApi('requests/'+id+'.json');if(g0.ok)sha=(await g0.json()).sha}catch(e){}
  var body={message:'valuation resubmit '+id+' r'+rev,branch:BR,content:u8(JSON.stringify(n,null,1))};if(sha)body.sha=sha;
  var r2=await ghApi('requests/'+id+'.json',{method:'PUT',body:JSON.stringify(body)});if(!r2.ok)throw new Error('GitHub '+r2.status);
  try{await g('ghDelete')('requests/picked/'+id+'.json')}catch(e){}
  p.q=n;p.st='в очереди';p.path='requests/'+id+'.json';delete VSEL[id];draw();
  toast('✓ Данные отправлены Оценщику повторно'+(up.length?' (файлов: '+up.length+')':'')+'.',8000)}
 catch(e){bt.disabled=false;if(msg)msg.textContent='Не удалось: '+e.message}}
V.addEventListener('click',function(e){var b=e.target.closest('[data-vresend]');if(b){e.stopPropagation();resend(b.dataset.vresend)}});
function draw(){var m=$('valm'),L=$('vall');
 if(!online()){m.textContent=g('EMB')?'Доступно в онлайн-версии.':'Нужен вход (PIN или ключ GitHub).';L.innerHTML='';return}
 if(VLD&&!VT){m.textContent='Загрузка…';L.innerHTML='<div class="ldsk"><div class="ldt">База загружается…</div><i></i><i></i></div>';return}
 var ED=window.EVDel;var R=VIDX.filter(function(v){return !(ED&&ED.pending('val:'+v.request_id))}).sort(function(a,b){return String(vdate(b)).localeCompare(String(vdate(a)))||String(b.request_id).localeCompare(String(a.request_id))});
 m.textContent=(R.length?'Оценок: '+R.length:'Оценок пока нет.')+(VPEND.length?' · в работе: '+VPEND.length:'');
 var pend=VPEND.filter(function(p){return !(ED&&ED.pending('vrq:'+p.id))}).map(function(p){var q=p.q||{},l=q.lot||{},o=q.object||{},vs=vstate(p);if(q.status==='need_data'&&vs!=='cancelled')return ndRow(p);var es='';if(vs==='cancelled')es='Заявка отменена';else try{es=g('etaStatus')(q)}catch(e){}
  return '<div class="lot pend" data-evrow><div class="row vrow" style="cursor:default"><div><div class="d1">'+esc(q.title||o.title||l.title||o.make_model||p.id)+'</div><div class="sm">'+esc([deb(q)||deb(l),q.lot_id?'лот '+(l.trade_no||q.lot_id):'',q.method||o.method?(q.method||o.method):''].filter(Boolean).join(' · '))+'</div><div class="sm"><b>'+esc(es||p.st)+'</b></div></div><div class="vact">'+reqAct(p)+'</div></div></div>'}).join('');
 L.innerHTML=pend+R.map(function(v){var l=lotOf(v),r=v.range||{};
  var who=[deb(v)||deb(l),v.lot_id?'лот '+((l&&l.trade_no)||v.lot_id):''].filter(Boolean).join(' · ');
  return '<div class="lot" data-evrow><div class="row vrow" style="cursor:default"><div><div class="d1">'+esc(v.title||(l&&l.title)||v.request_id)+'</div>'+(who?'<div class="sm">'+esc(who)+'</div>':'')+
  (FOC&&String(v.lot_id)===FOC?'<h3 class="vhd">'+esc(v.method||METHOD)+'</h3>':'')+'<div class="sm">Дата оценки: '+esc(fdt(vdate(v)))+'</div>'+
  (v.value!=null?'<div class="vsum">'+rub(v.value)+(r.min!=null?' <span class="sm" style="font-weight:400">(диапазон '+rub(r.min)+' – '+rub(r.max)+')</span>':'')+'</div><div class="sm vcap">'+esc(v.method||METHOD)+'</div>':'')+
  '<div class="vdisc">'+esc(DISC)+'</div></div><div class="vact">'+files(v)+(ED&&v.request_id&&vfiles(v).length?ED.icon('valuation','val:'+v.request_id,v.title||v.request_id):'')+'</div></div></div>'}).join('');}
V.addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(b){var f=g('dlClick');if(f)f(e)}});
/* удаление оценки: только файлы результата (отчёт, расчёт, методика) и запись в valuation/index.json; запрос и лот остаются */
function vfiles(v){return ['report','xlsx','methodology'].map(function(k){return v[k]}).filter(function(p){return typeof p==='string'&&/^valuation\/[\w.\-]+\/[^/]+$/.test(p)})}
if(window.EVDel){EVDel.op_valuation=function(b){var id=b.dataset.evkey.slice(4),v=VIDX.find(function(x){return String(x.request_id)===id});if(!v)return null;
  return {kind:'valuation',key:'val:'+id,request_id:id,name:b.dataset.evnm,paths:vfiles(v),files:vfiles(v).map(function(p){return p.split('/').slice(-2).join('/')})}};
 EVDel.kind('valuation',async function(op){await EVDel.tombAdd('valuation',op.request_id,[op.request_id]);for(var i=0;i<op.paths.length;i++)await g('ghDelete')(op.paths[i]);
  await EVDel.idxEdit('valuation/index.json',function(o){var arr=Array.isArray(o)?o:(o.items||o.reports||[]),n=arr.filter(function(x){return String(x.request_id)!==op.request_id});if(n.length===arr.length)return false;if(Array.isArray(o))return n;var c=Object.assign({},o);c[o.items?'items':'reports']=n;return c});
  VIDX=VIDX.filter(function(x){return String(x.request_id)!==op.request_id});$('valn').textContent=VIDX.length+VPEND.length});
 /* заявки на оценку. Удаление: надгробие deleted.json → requests (сборщик и списки её больше не видят) + файлы requests/<id>.json и requests/picked/<id>.json.
    Отмена: deleted.json → cancelled + маркер requests/<id>.cancel.json (watch.py → inbox_valuation/<id>.cancel.json, ключ <id>#cancel → рутина сообщает Оценщику) + status:cancelled в valuation/index.json, если там есть незавершённая запись.
    Избранное (favorites.json), отчёты анализа (reports/) и готовые оценки НЕ трогаются. */
 function vrq(b,pre){var id=b.dataset.evkey.slice(4),p=VPEND.find(function(x){return x.id===id});if(!p)return null;var q=p.q||{},t=pre==='vrq'?VR.delete:VR.cancel;
  return Object.assign({},t||{},{kind:pre==='vrq'?'valreq':'valreq_cancel',key:pre+':'+id,request_id:id,name:b.dataset.evnm,state:vstate(p),status_before:q.status||'pending',
   q:{source:q.source,title:q.title||(q.object||{}).title,lot_id:q.lot_id,type:q.type,rev:q.rev}})}
 EVDel.op_valreq=function(b){return vrq(b,'vrq')};EVDel.op_valreq_cancel=function(b){return vrq(b,'vrc')};
 async function marker(op){var id=op.request_id,path='requests/'+id+'.cancel.json',ghApi=g('ghApi'),u8=g('u8b64'),sha;
  var m={type:'valuation_cancel',id:id+'.cancel',request_id:id,for:'Оценщик',source:op.q.source||'Everest / Торги',title:op.q.title,lot_id:op.q.lot_id,status_before:op.status_before,rev:op.q.rev||1,cancelled_at:new Date().toISOString(),note:VR.cancel_note||'Заявка отменена пользователем'};
  try{var r0=await ghApi(path);if(r0.ok)sha=(await r0.json()).sha}catch(e){}
  var b={message:'valuation cancel '+id,branch:g('BRANCH'),content:u8(JSON.stringify(m,null,1))};if(sha)b.sha=sha;
  var r=await ghApi(path,{method:'PUT',body:JSON.stringify(b)});if(!r.ok)throw new Error('GitHub '+r.status)}
 async function idxCancel(id){var ST=VR.cancel_index_statuses||[];await EVDel.idxEdit('valuation/index.json',function(o){var arr=Array.isArray(o)?o:(o.items||o.reports||[]),ch=false;
  arr.forEach(function(x){if(String(x.request_id)===id&&ST.indexOf(x.status)>=0){x.status='cancelled';x.cancelled_at=new Date().toISOString();ch=true}});return ch?o:false})}
 EVDel.kind('valreq_cancel',async function(op){await EVDel.tombAdd('cancelled',op.request_id,[op.request_id]);await marker(op);await idxCancel(op.request_id)});
 EVDel.kind('valreq',async function(op){var id=op.request_id;
  if(op.state!=='cancelled'){var pk=null;try{pk=await g('ghApi')('requests/picked/'+id+'.json')}catch(e){}  // за 5 с сборщик мог успеть передать её Оценщику — тогда тоже шлём отмену
   if(pk&&pk.ok){await EVDel.tombAdd('cancelled',id,[id]);await marker(op);await idxCancel(id)}}
  await EVDel.tombAdd('requests',id,[id]);await g('ghDelete')('requests/'+id+'.json');await g('ghDelete')('requests/picked/'+id+'.json');
  VPEND=VPEND.filter(function(x){return x.id!==id});$('valn').textContent=VIDX.length+VPEND.length});
 ['hide','done','restore'].forEach(function(ev){document.addEventListener('evdel:'+ev,function(e){var k=e.detail.op.kind;if(k==='valreq'||k==='valreq_cancel'){if(ev==='done'){VT=0;load(true).then(draw)}else draw();rerender();return}});});
 ['hide','done','restore'].forEach(function(ev){document.addEventListener('evdel:'+ev,function(e){if(e.detail.op.kind!=='valuation')return;if(ev==='done'){VT=0;load(true).then(draw)}else draw();rerender()})})}
function valList(force){draw();load(force).then(draw)}
/* --- кнопка в карточке лота --- */
var RL=0;function reps(id){var R=g('REPIDX')||{};if(!RL&&online()){RL=1;var f=g('repIdx');if(f)f().then(rerender)}
 return Object.keys(R).filter(function(k){var e=R[k];return e&&String(e.lot_id||'')===id}).sort(function(a,b){return String(R[b].date||'').localeCompare(String(R[a].date||''))}).map(function(k){return '<button class="lbtn sec prep" data-f="'+esc(k)+'" data-p="reports/'+esc(k)+'"><svg class="rpic" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 11h7M9 14h7M9 17h4"/></svg>Отчёт анализа'+(R[k].date?' · '+esc(fdt(R[k].date)):'')+'</button>'}).join('')}
window.valBtn=function(l){load();var id=String(l.id);
 var done=VIDX.filter(function(v){return String(v.lot_id||(v.object&&v.object.lot_id)||'')===id})[0];
 var wip=VPEND.filter(function(p){return String((p.q||{}).lot_id||'')===id&&vstate(p)!=='cancelled'})[0];
 var b;if(done)b='<button class="lbtn" data-pvalo="'+esc(id)+'">Открыть оценку</button>';
 else if(wip&&(wip.q||{}).status==='need_data')b='<button class="lbtn vwip" data-pvalnd="'+esc(id)+'">Нужны данные · дополнить</button>';
 else if(wip){var t='';try{t=g('etaHM')(g('etaAt')(wip.q))}catch(e){}b='<button class="lbtn vwip" disabled>Оценка в работе'+(t?' · до '+esc(t):'')+'</button>'}
 else b='<button class="lbtn vreq" data-pval="'+esc(id)+'">Запросить оценку</button>';
 var rp=reps(id);return (rp?'<div class="pval prepw">'+rp+'</div>':'')+'<div class="pval">'+b+'<div class="vdisc">'+esc(DISC)+'</div></div>'};
function kind(l){var s=[l.type,l.category,l.title].join(' ').toLowerCase();return /недвиж|квартир|дом|участ|помещ|здан/.test(s)?'real_estate':/автомоб|транспорт|машин/.test(s)?'movable':'other'}
function mkReq(l){var t=new Date(),id=t.toISOString().replace(/[-:]/g,'').slice(0,15)+'Z-ev-'+Math.random().toString(36).slice(2,6);var pn=g('pNm')||function(x){return x&&x.name||x||''},pi=g('pInn')||function(){return ''};
 return {type:'valuation',version:2,id:id,case_id:'V'+id.slice(0,15).replace('T','')+'-'+id.slice(-4),created_at:t.toISOString(),source:'Everest / Торги',for:'Оценщик',
  lot_id:l.id,title:l.title||l.category||('Лот '+l.id),debtor:{name:pn(l.debtor),inn:pi(l,'debtor')},object_type:kind(l),
  object:{lot_id:l.id,trade_no:l.trade_no,url:l.url,type:l.type,category:l.category,title:l.title,address:l.address||l.region,area:l.area,start_price:l.start_price,current_price:l.current_price,stage:l.stage,description:l.description?String(l.description).slice(0,3000):undefined},
  method:METHOD,value_type:'market',valuation_date:t.toISOString().slice(0,10),purpose:'self',doc_title:'Аналитическая справка о рыночной стоимости',disclaimer:DISC,deliverables:['report','xlsx','methodology'],files:[]}}
document.addEventListener('click',function(e){var rb=e.target.closest('.prep[data-f]');if(rb){e.stopPropagation();var f=g('dlClick');if(f)f(e);return}var nd=e.target.closest('[data-pvalnd]');if(nd){e.stopPropagation();vb.click();setTimeout(function(){var h=document.querySelector('#vall [data-vnd="'+(VPEND.filter(function(p){return String((p.q||{}).lot_id)===nd.dataset.pvalnd})[0]||{}).id+'"]');if(h)h.scrollIntoView({block:'center'})},400);return}var o=e.target.closest('[data-pvalo]');if(o){e.stopPropagation();FOC=o.dataset.pvalo;vb.click();setTimeout(function(){var h=document.querySelector('#vall .vhd');if(h)h.scrollIntoView({block:'center'})},300);return}
 var b=e.target.closest('[data-pval]');if(!b)return;e.stopPropagation();var P=g('PROP'),l=P&&P.lots.find(function(x){return String(x.id)===b.dataset.pval});if(!l)return;
 var req=mkReq(l),toast=g('toast'),ghApi=g('ghApi'),u8=g('u8b64');
 if(!online()){var ds=g('deepShow');if(ds)ds(req,'Отправить напрямую нельзя: нужен вход. Скопируйте запрос и отправьте боту «Оценщик».','Оценка');return}
 b.disabled=true;b.textContent='Отправляю…';
 ghApi('requests/'+req.id+'.json',{method:'PUT',body:JSON.stringify({message:'valuation '+req.id,branch:g('BRANCH'),content:u8(JSON.stringify(req,null,1))})}).then(function(r){
  if(!r.ok)throw new Error('GitHub '+r.status);var a='';try{a=g('etaAccepted')(req)}catch(x){}
  toast('✓ '+esc(a||'Запрос принят')+'. Метод: '+esc(METHOD)+'. Результат будет во вкладке <a href="#" data-go="val" style="color:#bcd3ff;text-decoration:underline">«Оценка»</a>.',15000);
  VPEND.unshift({id:req.id,q:req,st:'в очереди',val:true});if(C.val_autofav!==false&&typeof window.pFavAdd==='function')window.pFavAdd(String(l.id));$('valn').textContent=VIDX.length+VPEND.length;g('propRender')()}).catch(function(x){b.disabled=false;b.textContent='Запросить оценку';toast('Не удалось отправить запрос: '+esc(x.message),8000)})},true);
setTimeout(function(){load()},4000);
})();
