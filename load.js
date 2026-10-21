/* Уведомление о загрузке базы: полоса 3px под шапкой, плашка ошибки с «Повторить», плашка «База обновлена · ЧЧ:ММ» на 2 с. */
(function(){
var CFG=window.EV_CFG||{},OKMS=CFG.ok_strip_ms||2000;
var css='header .ldbar{position:absolute;left:0;right:0;bottom:-3px;height:3px;overflow:hidden;pointer-events:none;opacity:0;transition:opacity .2s;z-index:6}'+
'header .ldbar.on{opacity:1}header .ldbar i{position:absolute;top:0;bottom:0;width:35%;left:-35%;background:var(--gold,var(--acc,#D4AF5A));border-radius:2px;animation:ldrun 1.1s ease-in-out infinite}'+
'@keyframes ldrun{0%{left:-35%}100%{left:100%}}@media(prefers-reduced-motion:reduce){header .ldbar i{animation:none;left:0;width:100%;opacity:.7}}'+
'header .ldmsg{position:absolute;left:0;right:0;top:100%;margin-top:3px;display:none;align-items:center;justify-content:center;gap:10px;padding:7px 12px;font-size:13.5px;line-height:1.3;z-index:6;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.25)}'+
'header .ldmsg.on{display:flex}header .ldmsg.on.ok{flex-direction:column;gap:2px}header .ldmsg .ldsub{font-size:12px;opacity:.75}#schl{flex-basis:100%;order:99;font-size:12px;color:rgba(255,255,255,.62);text-align:center;margin-top:-2px}#schl.st{color:#f3dd96}[data-theme=light] #schl{color:rgba(255,255,255,.7)}header .ldmsg.err{background:#fbe5e3;color:#8f2a20;border-bottom:1px solid #f1c6c1}header .ldmsg.ok{background:#e3f3e6;color:#1d6b33;border-bottom:1px solid #c6e6cc}'+
'[data-theme=dark] header .ldmsg.err{background:#4a2228;color:#ffd0ca;border-color:#7a3038}[data-theme=dark] header .ldmsg.ok{background:#1e3f2c;color:#c6f0d2;border-color:#2f6a45}'+
'header .ldmsg.stale{background:#fdf1cc;color:#6f5200;border-bottom:1px solid #ecd78f}[data-theme=dark] header .ldmsg.stale{background:#3f3517;color:#f3dd96;border-color:#6b5a22}'+
'header .ldmsg button{font:inherit;font-size:13px;padding:3px 12px;border-radius:7px;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer}'+
'.ldsk{padding:4px 0}.ldsk .ldt{color:var(--mut,#8a93a3);font-size:14px;margin:4px 2px 10px}.ldsk i{display:block;height:64px;margin-bottom:10px;border-radius:12px;background:linear-gradient(90deg,rgba(140,150,165,.16) 25%,rgba(140,150,165,.28) 50%,rgba(140,150,165,.16) 75%);background-size:200% 100%;animation:ldsh 1.4s linear infinite}'+
'@keyframes ldsh{0%{background-position:200% 0}100%{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){.ldsk i{animation:none}}'+
'html[data-theme] .lot .links a[href]{display:inline-flex!important;align-items:center;gap:6px;height:40px;box-sizing:border-box;padding:0 14px!important;font-size:14px!important;font-weight:600!important;border-radius:9px!important;text-decoration:none!important;opacity:1!important;background-image:none!important}'+
'html[data-theme] .lot .links a[href]::before{content:"\\2197";font-size:13px;line-height:1;font-weight:700}'+
'html[data-theme=dark] .lot .links a[href]{background:rgba(255,255,255,.10)!important;border:1px solid rgba(255,255,255,.35)!important;color:#F2F2F2!important}'+
'html[data-theme=light] .lot .links a[href]{background:#fff!important;border:1px solid #1C2E52!important;color:#0F1B33!important}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var h=document.querySelector('header');if(!h)return;
var bar=document.createElement('div');bar.className='ldbar';bar.setAttribute('aria-hidden','true');bar.innerHTML='<i></i>';
var msg=document.createElement('div');msg.className='ldmsg';msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');
h.appendChild(bar);h.appendChild(msg);
function g(n){try{return (0,eval)(n)}catch(e){return undefined}}
function dt(){var D=g('DATA')||{},v=D.data_updated||D.updated||D.generated||D.data_time||D.data_date;if(!v)return null;var d=new Date(v);return isNaN(d)?null:d}
function fmt(d){var o={timeZone:'Europe/Moscow'};var dm=d.toLocaleDateString('ru-RU',Object.assign({day:'2-digit',month:'2-digit',year:'numeric'},o)),hm=d.toLocaleTimeString('ru-RU',Object.assign({hour:'2-digit',minute:'2-digit',hour12:false},o));return dm+', '+hm}
/* расписание обновлений: config/update_schedule.json в закрытом репо (EV_CFG.update_schedule — запасной вариант) */
var SCH=CFG.update_schedule||null,SCHL=0;
var SCHP=null;function schLoad(){if(SCH&&SCH._ok)return Promise.resolve();if(SCHL)return SCHP;var f=g('ghRaw');if(!f||!g('TOKEN')||g('EMB'))return Promise.resolve();SCHL=1;SCHP=f('config/update_schedule.json').then(function(x){SCH=JSON.parse(x);SCH._ok=1;sl()}).catch(function(){SCHL=0});return SCHP}
function off(){return ((SCH&&SCH.utc_offset_hours)!=null?SCH.utc_offset_hours:3)*36e5}
function slot(y,m,d,hm){var p=String(hm||'00:00').split(':');return new Date(Date.UTC(y,m,d,+p[0],+p[1])-off())}
function sched(ds,dir){/* ближайший слот по списку дней месяца: dir=1 следующий после now, dir=-1 последний до now */
 var s=SCH&&SCH.datasets&&SCH.datasets[ds];if(!s)return null;if(s.next&&dir>0){var n=new Date(s.next);if(!isNaN(n))return n}
 var now=Date.now(),b=new Date(now+off()),y=b.getUTCFullYear(),m=b.getUTCMonth(),days=(s.days||[]).slice().sort(function(a,b){return a-b});if(!days.length)return null;
 for(var k=0;k<3;k++){var mm=m+dir*k,L=dir>0?days:days.slice().reverse();for(var i=0;i<L.length;i++){var dd=slot(y,mm,L[i],s.time);if(new Date(Date.UTC(y,mm,L[i])).getUTCMonth()!==((mm%12)+12)%12)continue;if(dir>0?dd>now:dd<=now)return dd}}return null}
function dsData(ds){if(ds==='prop'){var P=g('PROP');var v=P&&(P.generated||P.data_date);return v?new Date(v):null}return dt()}
function curDs(){var a=document.querySelector('nav button[data-v].on'),v=a&&a.dataset.v;if(v==='prop'||v==='perr')return 'prop';var fs=document.querySelector('#favseg button.on');if(v==='fav'&&fs&&fs.dataset.s==='prop')return 'prop';return (v==='reg'||v==='man'||v==='fav')?'reg':null}
function isStale(ds){var p=sched(ds,-1),d=dsData(ds),gh=(SCH&&SCH.grace_hours!=null?SCH.grace_hours:3)*36e5;return !!(p&&d&&d<p&&Date.now()>+p+gh)}
function schText(ds){var d=dsData(ds),n=sched(ds,1);if(!d&&!n)return '';return (d?'Обновлено '+fmt(d):'')+(n?(d?' · ':'')+(n<Date.now()?'обновление ожидается':'следующее '+fmt(n)):'')}
var sl0=document.createElement('div');sl0.id='schl';h.appendChild(sl0);
function sl(){var ds=curDs(),t=ds?schText(ds):'';sl0.textContent=t;sl0.style.display=t?'':'none';sl0.classList.toggle('st',!!(ds&&isStale(ds)))}
var was=false,okT=0,shownErr='';
function short(s){s=String(s||'');var i=s.indexOf('. ');return (i>20&&i<140?s.slice(0,i+1):s.slice(0,160))}
function tick(){var ld=!!g('LOADING')||!!g('PLD'),le=g('LERR'),pe=g('PLERR'),P=g('PROP');
 bar.classList.toggle('on',ld);
 var err=le||(pe&&!(P&&P.lots&&P.lots.length)?'Торги: '+pe:'');
 if(ld){if(!okT&&!tsT&&msg.className.indexOf('stale')<0)msg.className='ldmsg';shownErr=''}
 else if(err){if(shownErr!==err){shownErr=err;clearTimeout(okT);okT=0;msg.className='ldmsg on err';msg.innerHTML='';var s=document.createElement('span');s.textContent='Не удалось загрузить базу: '+short(err);var b=document.createElement('button');b.type='button';b.textContent='Повторить';b.onclick=function(){msg.className='ldmsg';shownErr='';window.PLERR=null;try{if(le)g('sync')(true);else g('propLoad')(true)}catch(e){}};msg.appendChild(s);msg.appendChild(b)}}
 else if(was&&!ld){shownErr='';if(!(TC()&&tsT&&msg.classList.contains('stale')))msg.className='ldmsg';var _p=schLoad()||Promise.resolve();Promise.race([_p,new Promise(function(r){setTimeout(r,2500)})]).then(okStrip)}
 else if(!err&&shownErr){shownErr='';msg.className='ldmsg'}
 was=ld}
/* всплывающая плашка (EV_UI.stale_toast): on:false — прежний okStrip */
function TC(){var c=(window.EV_UI||{}).stale_toast;return c&&c.on?c:null}
var tsShown=false,tsT=0,tsLeft=0,tsAt=0,tsDot=false;
(function(){var st3=document.createElement('style');st3.textContent='header .ldmsg.tst{flex-direction:row!important;gap:10px;justify-content:center;padding:8px 44px 8px 14px;pointer-events:auto;animation:tsin var(--ts-anim,200ms) ease-out}'+
'header .ldmsg.tst .tsi{color:var(--ts-amber,#E6A417);font-size:16px;line-height:1;flex:none}header .ldmsg.tst .tsb{display:flex;flex-direction:column;gap:2px;min-width:0;overflow-wrap:anywhere}'+
'header .ldmsg.tst .tsx{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:32px;height:32px;padding:0;border:0;border-radius:8px;font-size:20px;line-height:32px;opacity:.75}header .ldmsg.tst .tsx:hover{opacity:1;background:rgba(0,0,0,.08)}'+
'header .ldmsg.tst.tsn{padding:6px 44px 6px 12px;gap:8px}header .ldmsg.tst.tsn .tsb{flex:0 1 auto;overflow:hidden}header .ldmsg.tst.tsn .tst1{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'@keyframes tsin{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){header .ldmsg.tst{animation:none}}'+
'.tsdot{display:inline-block;width:var(--ts-dot,8px);height:var(--ts-dot,8px);border-radius:50%;background:var(--ts-amber,#E6A417);margin-left:6px;vertical-align:middle;flex:none;cursor:help}';document.head.appendChild(st3)})();
function tsHide(){clearTimeout(tsT);tsT=0;if(msg.classList.contains('tst')){msg.className='ldmsg';msg.innerHTML=''}if(tsDot)dotOn()}
function tsArm(ms){clearTimeout(tsT);tsLeft=ms;tsAt=Date.now();tsT=setTimeout(tsHide,ms)}
msg.addEventListener('mouseenter',function(){if(tsT){clearTimeout(tsT);tsT=0;tsLeft=Math.max(800,tsLeft-(Date.now()-tsAt));msg.dataset.paused='1'}});
msg.addEventListener('mouseleave',function(){if(msg.dataset.paused){delete msg.dataset.paused;if(msg.classList.contains('tst'))tsArm(tsLeft)}});
msg.addEventListener('click',function(e){if(msg.classList.contains('tst')&&!(e.target.closest&&e.target.closest('a')))tsHide()});
function when(d){if(!d)return '—';var o={timeZone:'Europe/Moscow'},day=function(x){return x.toLocaleDateString('ru-RU',Object.assign({day:'2-digit',month:'2-digit',year:'numeric'},o))},a=day(d),n=day(new Date());
 if(a===n)return d.toLocaleTimeString('ru-RU',Object.assign({hour:'2-digit',minute:'2-digit',hour12:false},o));return a}
function narrow(C){var w=+C.narrow_px;return !!(w&&window.matchMedia&&matchMedia('(max-width:'+w+'px)').matches)}
function tfmt(t,d){return String(t||'').replace('{date}',d?fmt(d):'—')}
var dotTxt='';
function dotOn(){var C=TC();if(!C||C.dot===false||!dotTxt)return;var R=document.documentElement.style;if(C.amber)R.setProperty('--ts-amber',C.amber);if(C.dot_px)R.setProperty('--ts-dot',C.dot_px+'px');
 var tgt=null,ms=document.getElementById('msum');if(ms&&ms.offsetParent){[].some.call(ms.querySelectorAll('.h3i,span'),function(x){if(x.className==='tsdot')return false;var lt=(((window.EV_UI||{}).update_schedule||{}).label_last||'Обновлено');if(x.querySelectorAll(':scope>:not(.tsdot)').length<=1&&x.textContent.indexOf(lt)===0){tgt=x;return true}})}
 if(!tgt){var sc=document.getElementById('schl');if(sc&&sc.offsetParent)tgt=sc}
 var old=document.querySelectorAll('.tsdot');[].forEach.call(old,function(o){if(!tgt||o.parentNode!==tgt)o.remove()});
 if(tgt&&!tgt.querySelector('.tsdot')){var dd=document.createElement('span');dd.className='tsdot';dd.setAttribute('role','img');dd.title=dotTxt;dd.setAttribute('aria-label',dotTxt);tgt.appendChild(dd)}}
function dotOff(){tsDot=false;dotTxt='';[].forEach.call(document.querySelectorAll('.tsdot'),function(o){o.remove()})}
function toastStrip(C){var ds=curDs()||'reg',d=dsData(ds)||dt(),old=isStale(ds);
 if(!old)dotOff();
 if(old&&C.once!==false&&tsShown){if(tsT&&msg.classList.contains('stale'))return;msg.className='ldmsg';if(tsDot)dotOn();return}
 var R=document.documentElement.style;if(C.amber)R.setProperty('--ts-amber',C.amber);R.setProperty('--ts-anim',(C.anim_ms==null?200:C.anim_ms)+'ms');
 msg.className='ldmsg on ok tst'+(old?' stale':'');msg.innerHTML='';
 if(old){var ic=document.createElement('span');ic.className='tsi';ic.setAttribute('aria-hidden','true');ic.textContent=C.icon||'⚠';msg.appendChild(ic)}
 var nw=narrow(C),bx=document.createElement('div');bx.className='tsb';var l1=document.createElement('div');l1.className='tst1';l1.textContent=nw?String((old?C.short_stale:C.short_ok)||'').replace('{when}',when(d)):tfmt(old?C.stale_text:C.ok_text,d);if(nw){l1.title=tfmt(old?C.stale_text:C.ok_text,d);msg.classList.add('tsn')}bx.appendChild(l1);
 var l2=document.createElement('div');l2.className='ldsub';l2.textContent=nw?'':schText(ds);if(l2.textContent)bx.appendChild(l2);msg.appendChild(bx);
 var x=document.createElement('button');x.type='button';x.className='tsx';x.textContent=C.close||'×';x.setAttribute('aria-label',C.close_label||'Закрыть');x.title=C.close_label||'Закрыть';msg.appendChild(x);
 delete msg.dataset.paused;
 if(old){tsShown=true;tsDot=true;dotTxt=tfmt(C.dot_title||C.stale_text,d)}
 clearTimeout(okT);okT=0;tsArm(+(old?C.ms:(C.ok_ms!=null?C.ok_ms:C.ms))||6000)}
function okStrip(){var C=TC();if(C)return toastStrip(C);var ds=curDs()||'reg',d=dsData(ds)||dt(),old=isStale(ds);msg.className='ldmsg on ok'+(old?' stale':'');msg.innerHTML='';var l1=document.createElement('div');l1.textContent=(old?'Данные не обновились по расписанию · ':'База обновлена')+(d?(old?'':' · ')+fmt(d):'');var l2=document.createElement('div');l2.className='ldsub';l2.textContent=schText(ds);msg.appendChild(l1);if(l2.textContent)msg.appendChild(l2);clearTimeout(okT);okT=0;if(!old)okT=setTimeout(function(){okT=0;msg.className='ldmsg'},OKMS)}
/* кнопка «Обновить» (Дизайнер): 44px, значок 20px + подпись, вращается значок; ✓ на 1 с; при ошибке — встряска и «Не удалось» */
(function(){var b=document.getElementById('rfb');if(!b)return;var st2=document.createElement('style');
st2.textContent='html body #rfb{width:auto!important;height:44px!important;min-width:44px;top:calc(env(safe-area-inset-top) + 8px)!important;right:10px!important;padding:0 16px!important;border-radius:12px!important;font:600 15px/1 system-ui,-apple-system,sans-serif!important;display:inline-flex;align-items:center;gap:8px;animation:none!important;opacity:1!important;background:#1C2E52!important;border:1px solid rgba(212,175,90,.75)!important;color:#F3D98B!important;white-space:nowrap}'+
'html body #rfb[aria-busy=true]{cursor:progress}#rfb .ri{width:20px;height:20px;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}#rfb.busy .ri{animation:rfs .8s linear infinite}'+
'#rfb.err .rl{color:#ffb4ab}#rfb.err{animation:rshk .4s ease-in-out 1!important}@keyframes rshk{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-4px)}40%,80%{transform:translateX(4px)}}'+
'html body #thm{width:44px!important;height:44px!important;top:calc(env(safe-area-inset-top) + 8px)!important;right:var(--rfbw,140px)!important}html body header{padding-right:calc(var(--rfbw,140px) + 52px)!important}'+
'@media(max-width:640px){html body header nav{margin-top:10px!important}html body #rfb .rl{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}html body #rfb{padding:0 12px!important}}'+
'@media(prefers-reduced-motion:reduce){#rfb.busy .ri{animation:none}#rfb.err{animation:none!important}}';document.head.appendChild(st2);
var IC='<svg class="ri" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/></svg>',OK='<svg class="ri" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
b.innerHTML=IC+'<span class="rl">Обновить</span>';b.setAttribute('aria-label','Обновить');var rl=b.querySelector('.rl'),bw=false,tmo=0;
function w(){document.documentElement.style.setProperty('--rfbw',(b.offsetWidth+18)+'px')}w();window.addEventListener('resize',w);
b.addEventListener('click',function(e){if(b.classList.contains('busy')){e.stopImmediatePropagation();e.preventDefault()}},true);
function HGc(){var H=(window.EV_UI||{}).header_grid||{};return H.on?H:null}
function lbl(s){var H=HGc();if(H&&H.busy_keep_label&&s==='Обновляю…'){s='Обновить';b.setAttribute('aria-label','Обновляю…')}else b.setAttribute('aria-label',s);if(rl.textContent!==s)rl.textContent=s;w()}
setInterval(function(){var busy=b.classList.contains('spin')||!!g('LOADING')||!!g('PLD');
 if(busy&&!bw){clearTimeout(tmo);b.classList.remove('err','okd');b.classList.add('busy');b.querySelector('.ri').outerHTML=IC;lbl('Обновляю…');b.setAttribute('aria-busy','true');if(HGc())b.disabled=true}
 if(!busy&&bw){var fin=function(){b.classList.remove('busy');b.setAttribute('aria-busy','false');b.disabled=false;
   if(g('LERR')){b.classList.add('err');lbl('Не удалось');tmo=setTimeout(function(){b.classList.remove('err');lbl('Обновить')},2500)}
   else{b.querySelector('.ri').outerHTML=OK;b.classList.add('okd');lbl('Обновить');tmo=setTimeout(function(){b.classList.remove('okd');b.querySelector('.ri').outerHTML=IC},1000)}};
  var ic=b.querySelector('.ri'),an=ic.getAnimations?ic.getAnimations()[0]:null;
  if(an&&an.currentTime!=null){var left=800-(an.currentTime%800);setTimeout(fin,left)}else fin()}
 bw=busy},120)})();
setInterval(tick,150);tick();setInterval(function(){schLoad();sl();if(tsDot&&!tsT&&TC())dotOn()},1000);document.addEventListener('click',function(){setTimeout(sl,50)});
})();
