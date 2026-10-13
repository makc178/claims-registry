(function(){
var P={reg:'<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 14h7M9 17h5"/>',
fav:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
man:'<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 14h7M9 17h5"/>',
rep:'<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>',
prc:'<path d="M12 4v16M7 20h10M5 7h14M12 4l-1 3h2z"/><path d="M5 7l-3 6a3 2 0 0 0 6 0zM19 7l-3 6a3 2 0 0 0 6 0z"/>',
fin:'<path d="M4 20h16M4 4v16"/><path d="M7 15l4-4 3 3 5-6"/><path d="M16 8h3v3"/>',
prop:'<path d="M3 16v-3l2-5h14l2 5v3z"/><path d="M5 13h14"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/>',
perr:'<path d="M3 16v-3l2-5h14l2 5v3z"/><path d="M5 13h14"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/>',
src:'<path d="M3 6h7l2 2h9v11H3z"/>',oth:'<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>',cfg:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>'};
var css='header{justify-content:center}header .hb{flex:0 1 auto;justify-content:center}'+
'nav{justify-content:center;gap:6px;width:100%}'+
'nav button{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px!important;border-radius:9px;font-size:14px;line-height:1;white-space:nowrap}'+
'nav button.q{padding-left:16px!important}nav button .ico{position:relative;display:inline-flex;width:20px;height:20px;flex:none}'+
'nav button .ico svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}'+

'nav button .qb{position:absolute;left:-9px;top:-8px;width:17px;height:17px;border-radius:50%;background:#D93C3C;color:#fff;font:800 13px/17px system-ui,sans-serif;text-align:center;box-shadow:0 0 0 1.5px var(--bg,#0F1B33)}'+
'nav button .badge{margin-left:2px}'+'@media(min-width:1024px){html body header{padding-left:8px!important;padding-right:8px!important}nav{flex-wrap:nowrap!important;gap:4px;overflow-x:auto;margin:0!important;padding:0!important;justify-content:safe center}nav button{flex:none;flex-direction:row;font-size:14px;padding:0 12px!important;gap:5px}nav button.q{padding-left:16px!important}#oth .lb{display:none}#oth{gap:0}}'+''+
'@media(max-width:1023.98px){nav{justify-content:flex-start;flex-wrap:nowrap!important;overflow-x:auto}nav button{flex:none;flex-direction:column;justify-content:center;gap:3px;height:54px;min-width:72px;padding:0 8px!important;font-size:11.5px}nav button .badge{position:absolute;top:3px;right:3px;margin:0}nav button{position:relative}}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
document.querySelectorAll('nav button').forEach(function(b){var k=b.dataset.v||b.id;if(!P[k]||b.querySelector('.ico'))return;var i=document.createElement('span');i.className='ico';i.setAttribute('aria-hidden','true');i.innerHTML='<svg viewBox="0 0 24 24">'+P[k]+'</svg>'+(b.classList.contains('q')?'<span class="qb">?</span>':'');[].slice.call(b.childNodes).forEach(function(n){if(n.nodeType==3&&n.textContent.trim()){var f=n.textContent.trim(),S=0,l=document.createElement('span');l.className='lb'+(S?' hs':'');l.textContent=f;b.replaceChild(l,n);b.title=f+(b.classList.contains('q')?' — требуют проверки':'');if(S){var s=document.createElement('span');s.className='ls';s.textContent=S;l.after(s)}}});b.insertBefore(i,b.firstChild);});
})();
(function(){var bar=document.getElementById('othbar'),oth=document.getElementById('oth');if(!bar||!oth)return;
var M=['prc','fin'],I={prc:'<path d="M12 4v16M7 20h10M5 7h14M12 4l-1 3h2z"/><path d="M5 7l-3 6a3 2 0 0 0 6 0zM19 7l-3 6a3 2 0 0 0 6 0z"/>',fin:'<path d="M4 20h16M4 4v16"/><path d="M7 15l4-4 3 3 5-6"/><path d="M16 8h3v3"/>'};
var st=document.createElement('style');st.textContent='nav button.evx{display:none!important}#othbar button{display:inline-flex;align-items:center;gap:6px}#othbar button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}';document.head.appendChild(st);
var first=bar.firstChild;M.forEach(function(k){var n=document.querySelector('nav button[data-v="'+k+'"]');if(!n)return;n.classList.add('evx');var b=document.createElement('button');b.dataset.o=k;b.title={prc:'Судебная практика',fin:'Финанализ'}[k];b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+I[k]+'</svg>'+{prc:'Практика',fin:'Финанализ'}[k];bar.insertBefore(b,first)});
function sync(){var a=document.querySelector('nav button[data-v].on'),v=a&&a.dataset.v;if(M.indexOf(v)<0)return;if(bar.style.display)bar.style.display='';if(!oth.classList.contains('on'))oth.classList.add('on');bar.querySelectorAll('button').forEach(function(b){var o=b.dataset.o===v;if(b.classList.contains('on')!==o)b.classList.toggle('on',o)})}
document.querySelectorAll('nav button[data-v]').forEach(function(b){b.addEventListener('click',sync)});new MutationObserver(sync).observe(document.querySelector('nav'),{subtree:true,attributes:true,attributeFilter:['class']});sync()})();
(function(){if(typeof PFAV=='undefined'||typeof favPush!='function')return;
var $=function(i){return document.getElementById(i)},TS={};try{TS=JSON.parse(localStorage.getItem('cr.pfav.ts')||'{}')}catch(e){}
var PUP=+localStorage.getItem('cr.pfav.up')||0;PFAV.forEach(function(k){if(!TS[k])TS[k]=PUP||1});
function pstore(){localStorage.setItem('cr.pfav',JSON.stringify([].concat(Array.from(PFAV))));localStorage.setItem('cr.pfav.ts',JSON.stringify(TS));localStorage.setItem('cr.pfav.up',PUP)}
function pobj(){var o={};PFAV.forEach(function(k){o[k]=TS[k]||PUP});return o}
var st=document.createElement('style');st.textContent='.pstar{font-size:20px!important;line-height:1;padding:2px 4px!important;vertical-align:middle}#favseg{display:none;max-width:1400px;margin:10px auto 0;padding:0 12px}#favseg .sg{display:flex;width:100%;border:1px solid var(--line);border-radius:10px;overflow:hidden}#favseg button{flex:1;font:inherit;font-size:14px;padding:9px 12px;border:0;background:var(--pan);color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}#favseg button+button{border-left:1px solid var(--line)}#favseg button.on{background:var(--gold,#D4AF5A);color:var(--ondark,#0F1B33);font-weight:600}#favseg .c{font-size:12px;padding:1px 7px;border-radius:999px;background:#0002}';document.head.appendChild(st);
var seg=document.createElement('div');seg.id='favseg';seg.innerHTML='<div class="sg" role="tablist"><button data-s="reg" class="on">Реестр <span class="c" id="fsr">0</span></button><button data-s="prop">Имущество <span class="c" id="fsp">0</span></button></div>';$('vreg').parentNode.insertBefore(seg,$('vreg'));
var FS='reg',PFO=null;
var _ui=favUI;favUI=function(){_ui.apply(this,arguments);$('favn').textContent=FAV.size+PFAV.size;$('fsr').textContent=FAV.size;$('fsp').textContent=PFAV.size};
function apply(){var a=document.querySelector('nav button[data-v].on'),fav=a&&a.dataset.v=='fav';seg.style.display=fav?'':'none';favUI();
 var pm=fav&&FS=='prop';seg.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.dataset.s==FS)});
 if(pm){$('vreg').style.display='none';$('vprop').style.display='';if(PFO===null)PFO=$('pfo').checked;$('pfo').checked=true;window.PFM=1;if(PERR){PERR=0;POPEN=null}PSHOW=60;propLoad()}
 else{if(window.PFM){window.PFM=0;$('pfo').checked=!!PFO;PFO=null;if(!fav)$('vprop').style.display=(a&&(a.dataset.v=='prop'||a.dataset.v=='perr'))?'':'none';else{$('vprop').style.display='none';$('vreg').style.display=''}}}}
seg.onclick=function(e){var b=e.target.closest('button[data-s]');if(!b)return;FS=b.dataset.s;apply()};
document.querySelectorAll('nav button[data-v]').forEach(function(b){b.addEventListener('click',function(){apply()})});
document.addEventListener('click',function(e){var f=e.target.closest('[data-pfav]');if(!f)return;var id=f.dataset.pfav,was=PFAV.has(id);setTimeout(function(){if(PFAV.has(id)!==was){PUP=Date.now();if(PFAV.has(id))TS[id]=PUP;else delete TS[id];pstore();favUI();clearTimeout(window._pft);window._pft=setTimeout(favPush,1500)}},0)},true);
favPush=async function(){if(EMB||!TOKEN||FAVRO===true||!REPO||REPO.startsWith('/*'))return favUI();try{var sha,g=await ghApi('favorites.json');if(g.ok)sha=(await g.json()).sha;
 var body={message:'favorites '+new Date().toISOString().slice(0,16),branch:BRANCH,content:u8b64(JSON.stringify({updated:FAVUP,ids:Object.fromEntries(FAV),prop_updated:PUP,prop:pobj()},null,1))};if(sha)body.sha=sha;
 var r=await ghApi('favorites.json',{method:'PUT',body:JSON.stringify(body)});if(r.status===403||r.status===404||r.status===401){FAVRO=true}else if(r.ok){FAVRO=false;FAVMSG=''}else FAVMSG='(синхронизация отложена: GitHub '+r.status+')'}catch(e){FAVMSG='(нет сети — синхронизируем позже)'}favUI()};
var _pull=favPull;favPull=async function(){var push=0;try{if(!EMB&&TOKEN){var r=await ghApi('favorites.json');if(r.ok){var j=await r.json(),d=JSON.parse(new TextDecoder().decode(b64(j.content.replace(/\n/g,'')))),R=d.prop||{},ru=d.prop_updated||0,ch=0;
 var M=new Map(Object.entries(R));PFAV.forEach(function(k){if(!M.has(k)&&((TS[k]||0)>ru||ru<=PUP)){M.set(k,TS[k]||PUP);push=1}});
 if(ru<PUP)push=1;var n=new Set(M.keys());ch=n.size!==PFAV.size||[].some.call(Array.from(n),function(k){return !PFAV.has(k)});
 PFAV.clear();n.forEach(function(k){PFAV.add(k)});TS=Object.fromEntries(M);PUP=Math.max(ru,PUP);pstore();if(ch&&$('vprop').style.display!='none'&&typeof propRender=='function')propRender()}}}catch(e){}
 await _pull.apply(this,arguments);favUI();if(push)favPush()};
favUI();})();
