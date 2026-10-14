/* Уведомление о загрузке базы: полоса 3px под шапкой, плашка ошибки с «Повторить», плашка «База обновлена · ЧЧ:ММ» на 2 с. */
(function(){
var CFG=window.EV_CFG||{},OKMS=CFG.ok_strip_ms||2000;
var css='header .ldbar{position:absolute;left:0;right:0;bottom:-3px;height:3px;overflow:hidden;pointer-events:none;opacity:0;transition:opacity .2s;z-index:6}'+
'header .ldbar.on{opacity:1}header .ldbar i{position:absolute;top:0;bottom:0;width:35%;left:-35%;background:var(--gold,var(--acc,#D4AF5A));border-radius:2px;animation:ldrun 1.1s ease-in-out infinite}'+
'@keyframes ldrun{0%{left:-35%}100%{left:100%}}@media(prefers-reduced-motion:reduce){header .ldbar i{animation:none;left:0;width:100%;opacity:.7}}'+
'header .ldmsg{position:absolute;left:0;right:0;top:100%;margin-top:3px;display:none;align-items:center;justify-content:center;gap:10px;padding:7px 12px;font-size:13.5px;line-height:1.3;z-index:6;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.25)}'+
'header .ldmsg.on{display:flex}header .ldmsg.err{background:#fbe5e3;color:#8f2a20;border-bottom:1px solid #f1c6c1}header .ldmsg.ok{background:#e3f3e6;color:#1d6b33;border-bottom:1px solid #c6e6cc}'+
'[data-theme=dark] header .ldmsg.err{background:#4a2228;color:#ffd0ca;border-color:#7a3038}[data-theme=dark] header .ldmsg.ok{background:#1e3f2c;color:#c6f0d2;border-color:#2f6a45}'+
'header .ldmsg button{font:inherit;font-size:13px;padding:3px 12px;border-radius:7px;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer}'+
'.ldsk{padding:4px 0}.ldsk .ldt{color:var(--mut,#8a93a3);font-size:14px;margin:4px 2px 10px}.ldsk i{display:block;height:64px;margin-bottom:10px;border-radius:12px;background:linear-gradient(90deg,rgba(140,150,165,.16) 25%,rgba(140,150,165,.28) 50%,rgba(140,150,165,.16) 75%);background-size:200% 100%;animation:ldsh 1.4s linear infinite}'+
'@keyframes ldsh{0%{background-position:200% 0}100%{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){.ldsk i{animation:none}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var h=document.querySelector('header');if(!h)return;
var bar=document.createElement('div');bar.className='ldbar';bar.setAttribute('aria-hidden','true');bar.innerHTML='<i></i>';
var msg=document.createElement('div');msg.className='ldmsg';msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');
h.appendChild(bar);h.appendChild(msg);
function g(n){try{return (0,eval)(n)}catch(e){return undefined}}
function hhmm(){var D=g('DATA')||{},v=D.data_updated||D.updated||D.generated||D.data_time;if(!v)return '';var d=new Date(v);if(isNaN(d))return '';return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
var was=false,okT=0,shownErr='';
function short(s){s=String(s||'');var i=s.indexOf('. ');return (i>20&&i<140?s.slice(0,i+1):s.slice(0,160))}
function tick(){var ld=!!g('LOADING')||!!g('PLD'),le=g('LERR'),pe=g('PLERR'),P=g('PROP');
 bar.classList.toggle('on',ld);
 var err=le||(pe&&!(P&&P.lots&&P.lots.length)?'Торги: '+pe:'');
 if(ld){if(!okT)msg.className='ldmsg';shownErr=''}
 else if(err){if(shownErr!==err){shownErr=err;clearTimeout(okT);okT=0;msg.className='ldmsg on err';msg.innerHTML='';var s=document.createElement('span');s.textContent='Не удалось загрузить базу: '+short(err);var b=document.createElement('button');b.type='button';b.textContent='Повторить';b.onclick=function(){msg.className='ldmsg';shownErr='';window.PLERR=null;try{if(le)g('sync')(true);else g('propLoad')(true)}catch(e){}};msg.appendChild(s);msg.appendChild(b)}}
 else if(was&&!ld){shownErr='';var t=hhmm();msg.className='ldmsg on ok';msg.textContent='База обновлена'+(t?' · '+t:'');clearTimeout(okT);okT=setTimeout(function(){okT=0;msg.className='ldmsg'},OKMS)}
 else if(!err&&shownErr){shownErr='';msg.className='ldmsg'}
 was=ld}
setInterval(tick,150);tick();
})();
