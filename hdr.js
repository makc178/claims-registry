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
'nav button .ico{position:relative;display:inline-flex;width:20px;height:20px;flex:none}'+
'nav button .ico svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}'+

'nav button .qb{position:absolute;right:-6px;top:-5px;width:12px;height:12px;border-radius:50%;background:#D93C3C;color:#fff;font:700 9px/12px system-ui,sans-serif;text-align:center;box-shadow:0 0 0 1.5px var(--bg,#0F1B33)}'+
'nav button .badge{margin-left:2px}'+'@media(min-width:1024px){header{padding-left:12px!important;padding-right:12px!important}nav{flex-wrap:nowrap!important;gap:4px;overflow:visible}nav button{flex:none;flex-direction:row;font-size:14px;padding:0 12px!important;gap:6px}}'+
'@media(max-width:1023.98px){nav{justify-content:flex-start;flex-wrap:nowrap!important;overflow-x:auto}nav button{flex:none;flex-direction:column;justify-content:center;gap:3px;height:54px;min-width:72px;padding:0 8px!important;font-size:11.5px}nav button .badge{position:absolute;top:3px;right:3px;margin:0}nav button{position:relative}}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
document.querySelectorAll('nav button').forEach(function(b){var k=b.dataset.v||b.id;if(!P[k]||b.querySelector('.ico'))return;var i=document.createElement('span');i.className='ico';i.setAttribute('aria-hidden','true');i.innerHTML='<svg viewBox="0 0 24 24">'+P[k]+'</svg>'+(b.classList.contains('q')?'<span class="qb">?</span>':'');b.insertBefore(i,b.firstChild);if(b.classList.contains('q'))b.title=(k=='man'?'Реестр':'Торги имущество')+' — требуют проверки'});
})();
