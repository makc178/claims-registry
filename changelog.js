window.EV_CHANGELOG={"retention_days":7,"entries":[{"items":["В карточке лота появились ссылки на Контур.Фокус для организаций и ИП, дата проверки залогов и поправлен вид на телефоне"],"kind":"new","build":"bc64867","at":"2026-10-21T23:51+03:00"},{"items":["База «Торги» загружается по регионам в фоне: первые лоты видны сразу, остальные регионы догружаются"],"kind":"new","build":"d22cc7b","at":"2026-10-21T22:14+03:00"},{"items":["Реестр: подписи-шильдики больше не обрезаются, площадка показана под датой торгов, причины в «Реестр ?» — не длиннее двух строк (полностью — по нажатию); карточка лота по центру, без разрывов слов, даты в таблицах не переносятся; в «Активах должника» итог совпадает с фактическим статусом проверки"],"kind":"fix","build":"7b646c7","at":"2026-10-21T21:43+03:00"},{"items":["Карточка лота: блоки можно сворачивать, новый «Календарь торгов» с напоминаниями, в именах скачанных файлов — название лота, в оценке — текущая цена торгов, всплывающая плашка об обновлении базы"],"kind":"new","build":"a951602","at":"2026-10-21T20:39+03:00"},{"items":["«Реестр ?»: статус и причины перенесены второй строкой, строки больше не раздуваются по высоте."],"kind":"fix","build":"79d5f62","at":"2026-10-21T13:42+03:00"},{"items":["Новая карточка лота: отметки сторон, сводка баллов и анализ материалов дела в «Избранном»."],"kind":"new","build":"71c2a7c","at":"2026-10-21T13:12+03:00"},{"items":["В карточке лота появились таблица и график снижения цены; в «Реестре» показана текущая цена."],"kind":"new","build":"9450957","at":"2026-10-21T12:57+03:00"},{"items":["В «Реестре» и «Торгах» появился фильтр «Вид торгов»: публичное предложение или аукцион; фильтры на небольших экранах больше не прыгают после входа."],"by":"по просьбе Максима Юрьевича","kind":"new","build":"c728de4","at":"2026-10-21T12:29+03:00"},{"items":["Названия кредитора и должника в списке лотов теперь видны полностью; на экранах до 1100 px фильтры убираются под кнопку «Фильтры»."],"by":"по просьбе Максима Юрьевича","kind":"fix","section":"reg","build":"57c9496","at":"2026-10-21T12:20+03:00"},{"items":["Карточки лотов снова компактные: отметки стоят в одну строку, остальные открываются по нажатию на «+N»."],"by":"по просьбе Максима Юрьевича","kind":"fix","section":"reg","build":"156706d","at":"2026-10-21T12:05+03:00"},{"items":["Новая шапка по макету Дизайнера: разделы в две ровные строки, кнопки «Обновить» и «Прочее» напротив них.","Одна строка статуса: число лотов и даты обновления в виде ДД.ММ.ГГГГ, ЧЧ:ММ МСК.","Источник данных и состояние ключа перенесены в меню «Прочее»."],"by":"по просьбе Максима Юрьевича","kind":"new","build":"7e70c61","at":"2026-10-21T11:33+03:00"}]};
/* Эверест: «Прочее → Обновления» — реестр обновлений приложения (данные: config/changelog.json, встраивает build.py).
   Только Эверест: файл подключает build.py, в шаблоне/Арбитре его нет.
   Флаги дизайнера (EV_CFG.changelog), по умолчанию ВЫКЛ до одобрения пользователем:
     chips      — приглушённый ярлык «Новое» / «Исправлено» / «Улучшено» (поле kind: new|fix|improve), только оттенки акцента;
     deeplink   — нажатие на запись открывает раздел, о котором она (поле section: ключ вкладки);
     unread_dot — точка на «Прочее», пока есть непросмотренные записи (просмотр хранится в localStorage). */
(function(){
var CFG=window.EV_CFG=window.EV_CFG||{};var F=CFG.changelog=Object.assign({chips:false,deeplink:false,unread_dot:false},CFG.changelog||{});
var D=window.EV_CHANGELOG||{entries:[]},RD=+D.retention_days>0?+D.retention_days:7,LIM=Date.now()-RD*864e5,E=(D.entries||[]).filter(function(e){return e&&e.at&&e.build&&!e.pending&&Date.parse(e.at)>=LIM}).slice().sort(function(a,b){return Date.parse(b.at)-Date.parse(a.at)});
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var MON=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
function msk(at){var t=Date.parse(at);if(isNaN(t))return null;var d=new Date(t+3*3600e3);return {y:d.getUTCFullYear(),m:d.getUTCMonth(),d:d.getUTCDate(),hm:('0'+d.getUTCHours()).slice(-2)+':'+('0'+d.getUTCMinutes()).slice(-2)}}
var KL={new:'Новое',fix:'Исправлено',improve:'Улучшено'};
var SK='ev_upd_seen';function seen(){try{return localStorage.getItem(SK)||''}catch(e){return ''}}
function newest(){return E.length?E[0].at:''}
var nav=document.querySelector('nav'),bar=$('othbar');function OTH(){return $('oth')||$('urb')}  /* nav2.js переносит «Прочее» в шапку и меняет id на urb */if(!nav||!bar)return;
var b=document.createElement('button');b.dataset.v='upd';b.className='evx';b.title='Обновления';b.textContent='Обновления';nav.appendChild(b);
var ob=document.createElement('button');ob.dataset.o='upd';ob.title='Реестр обновлений приложения';ob.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v4h-4"/><path d="M12 8v4l3 2"/></svg>Обновления';
var cfgb=bar.querySelector('button[data-o="cfg"]');bar.insertBefore(ob,cfgb||null);
var V=document.createElement('div');V.id='vupd';V.style.display='none';V.innerHTML='<div class="md"><h2>Обновления</h2><p class="sm">Что менялось в приложении за последние '+RD+' дн. — сначала новое. Время московское. Более старые записи удаляются автоматически.</p><div id="updl"></div></div>';
var after=$('vrpt')||$('vval')||$('vrep');(after&&after.parentNode||document.body).insertBefore(V,after?after.nextSibling:null);
var st=document.createElement('style');st.textContent='#vupd .uday{font-size:15px;margin:18px 0 6px}#vupd .uday:first-child{margin-top:4px}'
+'#vupd .ue{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 12px;padding:8px 0;border-top:1px solid var(--line)}#vupd .uday+.ue{border-top:0}'
+'#vupd .ut{font-size:13px;color:var(--mut,#7a8494)}#vupd .ub{grid-column:2;grid-row:1;font-size:11px;color:var(--mut,#8a93a3);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.8;white-space:nowrap;align-self:start}'
+'#vupd .ui{grid-column:1/-1;margin:2px 0 0;padding-left:18px}#vupd .ui li{margin:2px 0;line-height:1.4}#vupd .uby{grid-column:1/-1;font-size:12px;color:var(--mut,#7a8494)}'
+'#vupd .uchip{display:inline-block;margin-left:8px;padding:0 8px;border-radius:999px;font-size:11px;line-height:18px;color:var(--acc);background:color-mix(in srgb,var(--acc) 12%,transparent)}'
+'#vupd .uchip.k-new{background:color-mix(in srgb,var(--acc) 20%,transparent)}#vupd .uchip.k-fix{background:color-mix(in srgb,var(--acc) 8%,transparent)}'
+'#vupd .ue.dl{cursor:pointer;border-radius:8px}#vupd .ue.dl:hover{background:color-mix(in srgb,var(--acc) 5%,transparent)}'
+'.udot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--acc);margin-left:5px;vertical-align:top}[data-theme=dark] .udot{background:var(--gold,#D4AF5A)}';
document.head.appendChild(st);
function render(){var h='',day='';E.forEach(function(e,i){var t=msk(e.at);if(!t)return;var dk=t.d+' '+MON[t.m]+' '+t.y;if(dk!==day){day=dk;h+='<h3 class="uday">'+esc(dk)+'</h3>'}
 var dl=F.deeplink&&e.section&&e.section!=='upd'&&nav.querySelector('button[data-v="'+e.section+'"]');
 h+='<div class="ue'+(dl?' dl':'')+'"'+(dl?' role="button" tabindex="0" data-sec="'+esc(e.section)+'"':'')+'><div class="ut">'+t.hm+' МСК'+(F.chips&&KL[e.kind]?'<span class="uchip k-'+e.kind+'">'+KL[e.kind]+'</span>':'')+'</div><div class="ub" title="сборка">'+esc(e.build)+'</div>'
 +'<ul class="ui">'+(e.items||[]).map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul>'+(e.by?'<div class="uby">'+esc(e.by)+'</div>':'')+'</div>'});
 $('updl').innerHTML=h||'<p class="sm">За последние '+RD+' дн. обновлений не было.</p>'}
$('updl')&&V.addEventListener('click',function(ev){var x=ev.target.closest('.ue.dl');if(!x)return;var n=nav.querySelector('button[data-v="'+x.dataset.sec+'"]');if(n)n.click()});
V.addEventListener('keydown',function(ev){if(ev.key==='Enter'){var x=ev.target.closest('.ue.dl');if(x)x.click()}});
function dot(){if(!F.unread_dot)return;var un=newest()&&newest()>seen();[OTH(),ob].forEach(function(el){if(!el)return;var d=el.querySelector('.udot');if(un&&!d){d=document.createElement('span');d.className='udot';d.setAttribute('aria-label','есть новые обновления');el.appendChild(d)}else if(!un&&d)d.remove()})}
var VIEWS=['vreg','vmet','vsrc','vrep','vprc','vfin','vprop','vman','favseg','vval','vrpt'];
b.addEventListener('click',function(){nav.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});VIEWS.forEach(function(i){var e=$(i);if(e)e.style.display='none'});render();V.style.display='';bar.style.display='';bar.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===ob)});var o=OTH();if(o)o.classList.add('on');
 if(F.unread_dot&&newest()){try{localStorage.setItem(SK,newest())}catch(e){}dot()}});
function hide(){if(V.style.display==='none')return;V.style.display='none';b.classList.remove('on');ob.classList.remove('on')}
document.addEventListener('click',function(ev){var x=ev.target.closest('button');if(!x||x===b)return;if(nav.contains(x)||x===OTH())hide()},true);
setTimeout(dot,0);
render();dot();
window.EVUpd={entries:E,flags:F,render:render,dot:dot};
})();
