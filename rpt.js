/* Эверест: вкладка «Отчёты» — все отчёты анализа (reports/index.json) и запросы «В работе» (requests/picked) с ETA. Только после PIN. */
(function(){
var C=window.EV_CFG||{};function g(n){try{return (0,eval)(n)}catch(e){return undefined}}function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var MSK={timeZone:'Europe/Moscow'};function fd(v){var d=new Date(v);return isNaN(d)?(v||''):d.toLocaleDateString('ru-RU',Object.assign({day:'2-digit',month:'2-digit',year:'numeric'},MSK))}
function fdt(v){var d=new Date(v);return isNaN(d)?'':d.toLocaleString('ru-RU',Object.assign({day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false},MSK)).replace(',',',')}
var TY=Object.assign({property_check:'Проверка имущества',full_check:'Полная проверка',deep:'Глубокий анализ',deep_analysis_request:'Глубокий анализ',court_practice:'Судебная практика',fin_analysis:'Финанализ',valuation:'Оценка'},C.report_types||{});
var nav=document.querySelector('nav');if(!nav)return;
var b=document.createElement('button');b.dataset.v='rpt';b.title='Отчёты';b.innerHTML='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h4"/></svg></span><span class="lb">Отчёты</span><span class="badge" id="rptn">0</span>';nav.appendChild(b);
var V=document.createElement('div');V.id='vrpt';V.style.display='none';V.innerHTML='<div class="md"><h2>Отчёты</h2><input id="rptq" type="search" placeholder="поиск: должник, лот, тип, номер" style="width:100%;box-sizing:border-box;margin:4px 0 10px;padding:9px 12px;border-radius:10px;border:1px solid var(--line);background:var(--pan);color:var(--ink);font:inherit"><p class="sm" id="rptm"></p><div id="rptw"></div><div id="rptl"></div></div>';
var vv=$('vval')||$('vrep');(vv&&vv.parentNode||document.body).insertBefore(V,vv?vv.nextSibling:null);
var st=document.createElement('style');st.textContent='#vrpt .rrw{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 14px;align-items:center}#vrpt .ra{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}#vrpt h3{font-size:15px;margin:14px 0 8px}#vrpt .ovd{display:inline-block;margin-left:6px;padding:1px 8px;border-radius:999px;background:#fbe5e3;color:#8f2a20;font-size:12px;font-weight:600}[data-theme=dark] #vrpt .ovd{background:#4a2228;color:#ffd0ca}@media(max-width:640px){#vrpt .rrw{grid-template-columns:1fr}#vrpt .ra{justify-content:flex-start}}';document.head.appendChild(st);
var VIEWS=['vreg','vmet','vsrc','vrep','vprc','vfin','vprop','vman','othbar','favseg','vval'];
function online(){return !g('EMB')&&g('TOKEN')&&g('PINOK')&&g('REPO')&&!String(g('REPO')).startsWith('/*')}
b.addEventListener('click',function(){nav.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});VIEWS.forEach(function(i){var e=$(i);if(e)e.style.display='none'});V.style.display='';load(true)});
function hide(){V.style.display='none';b.classList.remove('on')}
nav.querySelectorAll('button').forEach(function(x){if(x!==b)x.addEventListener('click',hide)});
(function order(){var O=window.EV_TAB_ORDER||[];var by={};[].forEach.call(nav.children,function(x){if(x.dataset&&x.dataset.v)by[x.dataset.v]=x});O.forEach(function(k){if(by[k])nav.appendChild(by[k])});var o=$('oth');if(o)nav.appendChild(o)})();
var R=[],P=[],T=0,LD=null;
function load(force){if(!online()){draw();return}if(LD)return;if(!force&&T&&Date.now()-T<3e5)return draw();$('rptm').textContent='Загрузка…';
 LD=(async function(){try{await g('repIdx')()}catch(e){}var I=g('REPIDX')||{};R=Object.keys(I).map(function(k){return Object.assign({name:k},I[k]||{})});
  var done=new Set();R.forEach(function(r){if(r.request_id)done.add(r.request_id);(r.request_ids||[]).forEach(function(x){done.add(x)})});
  try{var vi=JSON.parse(await g('ghRaw')('valuation/index.json'));(Array.isArray(vi)?vi:[]).forEach(function(v){if(v.request_id)done.add(v.request_id)})}catch(e){}
  try{var EX=C.reports_exclude_types||['court_practice','fin_analysis','valuation'];P=(await g('pendList')()).filter(function(p){return p.st==='в работе'&&!done.has(p.id)&&EX.indexOf((p.q||{}).type)<0})}catch(e){P=[]}
  T=Date.now();LD=null;$('rptn').textContent=R.length;draw()})()}
function lotLink(id,label){return id?'<button class="lbtn sec" data-rlot="'+esc(id)+'">'+esc(label||'К лоту')+'</button>':''}
function pmatch(q,s){return !q||String(s).toLowerCase().indexOf(q)>=0}
function draw(){var m=$('rptm'),W=$('rptw'),L=$('rptl');
 if(!online()){m.textContent=g('EMB')?'Доступно в онлайн-версии.':'Отчёты доступны после ввода PIN.';W.innerHTML=L.innerHTML='';return}
 var q=($('rptq').value||'').trim().toLowerCase();
 var rs=R.filter(function(r){return pmatch(q,[r.name,r.debtor,r.lot,r.lot_id,TY[r.type]||r.type,r.date,r.request_id].join(' '))}).sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))||String(b.request_id||'').localeCompare(String(a.request_id||''))});
 var ps=P.filter(function(p){var q0=p.q||{},l=(q0.lots||[])[0]||{};return pmatch(q,[p.id,TY[q0.type]||q0.type,q0.debtor&&(q0.debtor.name||q0.debtor),l.debtor&&l.debtor.name,l.title,l.trade_no,q0.lot_id].join(' '))});
 m.textContent='Отчётов: '+rs.length+(ps.length?' · в работе: '+ps.length:'');
 W.innerHTML=ps.length?'<h3>В работе</h3>'+ps.map(function(p){var q0=p.q||{},l=(q0.lots||[])[0]||{},eta=q0.eta?new Date(q0.eta):null;if(!eta)try{eta=g('etaAt')(q0)}catch(e){}
  var ov=eta&&+eta<Date.now();var nm=(l.debtor&&l.debtor.name)||(q0.debtor&&(q0.debtor.name||q0.debtor))||l.title||p.id;
  return '<div class="lot pend"><div class="row rrw" style="cursor:default"><div><div class="d1">'+esc(nm)+(l.trade_no?' <span class="sm">· '+esc(l.trade_no)+'</span>':'')+'</div><div class="sm">'+esc(TY[q0.type]||q0.type||'')+' · запрос от '+esc(fdt(q0.created_at))+'</div><div class="sm"><b>'+(eta?'ожидается к '+esc(fdt(eta))+' МСК':'срок не указан')+'</b>'+(ov?'<span class="ovd">просрочено</span>':'')+'</div></div><div class="ra">'+lotLink(q0.lot_id||l.id)+'</div></div></div>'}).join(''):'';
 L.innerHTML=(rs.length?'<h3>Готовые отчёты</h3>':'<p class="sm">Отчётов пока нет.</p>')+rs.map(function(r){
  return '<div class="lot"><div class="row rrw" style="cursor:default"><div><div class="d1">'+esc(r.debtor||r.name)+(r.lot!=null?' <span class="sm">· лот '+esc(r.lot)+'</span>':'')+'</div><div class="sm">'+esc(fd(r.date))+(r.type?' · '+esc(TY[r.type]||r.type):'')+' · '+esc(r.name)+'</div></div><div class="ra"><button class="lbtn" data-f="'+esc(r.name)+'" data-p="reports/'+esc(r.name)+'">↗ Отчёт анализа</button>'+lotLink(r.lot_id)+'</div></div></div>'}).join('')}
$('rptq').addEventListener('input',draw);
V.addEventListener('click',function(e){var f=e.target.closest('button[data-f]');if(f){var d=g('dlClick');if(d)d(e);return}
 var o=e.target.closest('[data-rlot]');if(!o)return;var id=o.dataset.rlot,PR=g('PROP'),pl=PR&&PR.lots.find(function(x){return String(x.id)===id});
 if(pl){var miss=0;try{miss=g('pMiss')(pl).length}catch(_){}var gt=g('goTab');gt(miss?'perr':'prop');setTimeout(function(){var q=$('pq');if(q){q.value=String(pl.trade_no||'').split('/')[0]||pl.title||'';}(0,eval)('POPEN='+JSON.stringify(id)+';PSHOW=60');g('propRender')();var n=document.querySelector('#vprop .plot[data-pid="'+id+'"]');if(n)n.scrollIntoView({block:'start'})},400);return}
 var D=g('DATA');if(D&&D.lots.some(function(x){return String(x.id)===id})){(0,eval)('FOCUS='+JSON.stringify(id)+';OPEN.add(FOCUS)');g('goTab')('reg');return}
 alert('Лот не найден в текущей базе (возможно, торги завершены).')});
setInterval(function(){if(online()&&!T&&!LD)load()},3000);
})();
