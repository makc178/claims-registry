/* Тексты интерфейса Эверест (правьте здесь, не в коде) */
window.EV_TEXTS={
 move_notice:{text:'Раздел скоро переедет в приложение Arbitr и исчезнет отсюда',link_text:'Открыть Arbitr',url:'https://makc178.github.io/arbitr-app/',views:['vprc','vfin']}
};

/* Цвета и размеры интерфейса Эверест (правьте здесь) */
window.EV_UI={
 star_size:'24px', star_hit:'44px', star_off:'rgba(255,255,255,.55)', star_on:'#D4AF5A',
 gold:'#D4AF5A',
 update_schedule:{days:[1,5,9,13,17,21,25,29], time:'11:54', tz_offset_hours:3, label_last:'Обновлено', label_next:'Следующее', label_sep:': ', source:'плановое обновление базы (Анализ прав требований)'},
 header:{v2:false, logo_px:56, logo_px_narrow:46, name_px:20, system_px:12, system_color:'rgba(255,255,255,.7)', slogan_px:11, slogan_color:'rgba(255,255,255,.5)', service_px:11, draw_s:1.2, under_gap:6},
 under_refresh:'#oth',
 /* шапка-сетка (Дизайнер 15.10): слева дата и строка лотов, справа колонка «Обновить»/«Прочее» одной ширины; on:false — прежняя шапка */
 header_grid:{on:true, pad:16, col_gap:12, btn_min:112, btn_w:141, busy_keep_label:true, m_bp:430, m_icon_btn:36, m_logo_px:28, m_title_px:17, m_tab_px:13, m_tab_px_min:12, m_tab_h:36, m_tab2_h:32, m_tab_min_px_at:374, spinner_px:14, busy_opacity:0.6, btn_h:36, btn_gap:8, btn_radius:10, btn_px:14, date_px:12, date_color:'rgba(255,255,255,.62)', lots_px:13, lots_color:'rgba(255,255,255,.92)', thm_px:36, row_gap:10},
 /* шапка v3 по макету Дизайнера (everest_analitik_design/header_v1/spec.md, утверждено 17.10.2026): одна сетка .in, вкладки 4×2 одной сеткой, одна строка статуса. on:false — прежняя шапка-сетка (header_grid). Код: src/hdr3.js */
 header_v3:{on:true,
  max_w:1200, pad_x:24, pad_y:14, col_gap:24, row_gap:10, brand_col:272, brand_gap:12, logo:56, logo_compact:52,
  nav_cols:4, nav_cols_narrow:2, nav_gap:4, nav_pad:4, tab_h:36, tab_r:9, track_r:13, tab_pad_x:12, tab_gap:7, tab_pad_x_phone:8, tab_gap_phone:5, tab_icon:18, qb:16, badge_min:22, badge_pad:'1px 7px',
  act_w:132, act_h:36, act_gap:8, act_pad_x:12, icon_btn:36, theme_btn:32, icon:18, dot:6, dot_gap:8, slogan_ls:'.12em', name_weight:650,
  bp_compact:1100, bp_narrow:800, bp_phone:480,
  font:{name:17, slogan:10.5, sub:12, status:12, badge:11.5, tab:14, act:14, qb:11, tip:12},
  colors:{ink:'#E8EDF5', mut:'#A3B0C4', faint:'rgba(255,255,255,.32)', track:'rgba(255,255,255,.045)', track_line:'rgba(255,255,255,.08)', tab_hover:'rgba(255,255,255,.07)', gold:'var(--gold,#D4AF5A)', gold2:'var(--gold2,#E6C77E)', gold_ink:'#0F1B33',
   active_bg:'rgba(212,175,90,.16)', active_line:'rgba(212,175,90,.55)', badge_bg:'rgba(255,255,255,.09)', badge_ink:'#C3CEDD', badge_active_bg:'rgba(212,175,90,.25)', badge_active_ink:'#F3D98B',
   warn:'#D93C3C', warn_ink:'#FFFFFF', live:'#5FD08A', stale:'#E6C77E', btn2_bg:'rgba(255,255,255,.06)', btn2_line:'rgba(255,255,255,.14)', menu_bg:'#1C2E52',
   hdr_bg:'linear-gradient(180deg,rgba(28,46,82,.78),rgba(15,27,51,.78))', hdr_line:'rgba(212,175,90,.25)', hdr_shadow:'0 4px 18px rgba(0,0,0,.35)', hdr_blur:'blur(20px) saturate(160%)'},
  brand_short:'Эверест',
  hints:{refresh:'Обновить данные без ввода PIN', more:'Прочее: источник данных, ключ, настройки'},
  status_sep:' · ', badge_group:true, locale:'ru-RU', tz:'Europe/Moscow',
  /* рабочее поле разделов: те же max-width и боковые отступы, что у шапки (края совпадают) */
  page_sel:'#favseg,#othbar,#vreg,#vman,#vmet,#vrep,#vval,#vrpt,#vupd,#vprop,#vprc,#vfin,#vsrc', page_inner_sel:'#vreg.wrap,#vprop>.wrap',
  more_info:{src_label:'Источник данных', key_label:'Ключ доступа', key_on:'настроен', key_off:'не подключён', src_none:'—'}
 },
 sum_reg:'Реестры', sum_torgi:'Торги', sum_total:'Всего',
 cnt_abbr_maxw:380, cnt_abbr_from:1000, cnt_abbr_suffix:'к', cnt_abbr_decimal:',', cnt_longpress_ms:500, r1_gap_narrow:'3px', r1_pad_narrow:'2px', r1_icons_narrow:false,
 sel_bg:'rgba(212,175,90,.22)', sel_border:'rgba(212,175,90,.5)', sel_text:'#D4AF5A',
 /* «Торги» и «Торги ?»: сортировка по заголовкам таблицы и чип «Сортировка» на телефоне. cols — сортируемые колонки (k — ключ сортировки, как в списке «Сортировка» фильтров); first_dir: -1 — первое нажатие по убыванию; default — пока пользователь ничего не выбрал */
 prop_sort:{cols:[{k:'current_price',label:'Текущая цена'},{k:'start_price',label:'Начальная'},{k:'disc',label:'Скидка'},{k:'score',label:'Балл'}], first_dir:-1, default:{k:'score',d:-1}, ls_prefix:'cr.psort.', arrows:{desc:'↓',asc:'↑',none:'↕'}, chip_label:'Сортировка', hint:'Сортировать:'},
 vreq_bg:'#D93A2F', vreq_bg_pressed:'#B52E25', vreq_text:'#FFFFFF', vreq_border:'rgba(255,255,255,.2)'
};

/* Эверест: шапка в два ряда (сегменты + текстовые вкладки), счётчики «Реестр»/«Торги», компактная служебная строка */
(function(){var $=function(i){return document.getElementById(i)},nav=document.querySelector('nav');if(!nav)return;
var R1=['reg','man','prop','perr'];
var css='header>nav{flex:1 0 100%!important;order:0}nav>#oth .lb{display:inline!important}nav{display:flex!important;flex-wrap:wrap!important;gap:0!important;max-width:760px;margin:0 auto!important;padding:0!important;overflow:visible!important;width:100%;justify-content:flex-start!important}'+
'nav>button{position:relative;overflow:visible;transform:none!important}'+
'nav>button.r1{order:1;flex:0 0 25%!important;width:25%!important;max-width:25%!important;box-sizing:border-box;height:40px!important;min-width:0!important;padding:0 6px!important;flex-direction:row!important;justify-content:center;gap:4px!important;font-size:13px!important;letter-spacing:-0.2px;white-space:nowrap;border-radius:0!important;border:1px solid #ffffff40!important;margin:0 0 0 -1px!important;box-shadow:none!important}'+
'nav>button.r1:first-of-type,nav>button.r1.f{border-radius:10px 0 0 10px!important;margin-left:0!important}nav>button.r1.l{border-radius:0 10px 10px 0!important}'+
'nav>button.r1 .ico svg{display:none}nav>button.r1 .ico{width:0!important;position:static!important}'+
'nav>button.r1 .lb{min-width:0;flex:none;overflow:visible;text-overflow:clip;white-space:nowrap;order:0}'+
'nav>button.r1 .badge{position:static!important;margin:0!important;flex:none;order:2;height:16px;box-sizing:border-box;font-size:10px;line-height:16px;letter-spacing:0;padding:0 5px;border-radius:8px;background:#ffffff2e!important;color:inherit!important;max-width:none}'+
'nav>button.r1.on .badge{background:#fff!important;color:#0F1B33!important}'+
'nav>button.r1.q{padding-left:24px!important}nav>button.r1 .qb{position:absolute!important;left:4px!important;top:50%!important;margin-top:-10px;width:20px!important;height:20px!important;font-size:15px!important;line-height:20px!important}'+
'nav>button.r2,nav>#oth{order:2;flex:0 0 auto!important;height:32px!important;min-width:0!important;margin-top:4px!important;padding:0 10px!important;flex-direction:row!important;gap:4px!important;font-size:13px!important;background:transparent!important;border:0!important;border-bottom:2px solid transparent!important;border-radius:0!important;box-shadow:none!important;color:#d7dfea!important}'+
'nav>button.r2.on,nav>#oth.on{border-bottom-color:var(--gold,#D4AF5A)!important;color:#fff!important;font-weight:600}'+
'nav>button.r2 .ico,nav>#oth .ico{display:none!important}'+
'nav>button.r2 .badge,nav>#oth .badge{position:static!important;margin:0 0 0 2px!important;font-size:10.5px;line-height:15px;padding:0 5px;background:#ffffff26!important;color:inherit!important}'+
'nav>#oth{order:3}nav button[data-v=rpt].evx{display:inline-flex!important}'+
'#favseg{max-width:420px!important;margin:8px auto 0!important}#favseg .sg{border-radius:8px!important}#favseg button{padding:5px 10px!important;font-size:12.5px!important}#favseg .c{font-size:11px!important;padding:0 6px!important}'+
'@media(max-width:1023.98px){header>nav{margin-right:calc(10px - var(--hpr,116px))!important;max-width:none!important}}'+
'@media(max-width:600px){nav>button.r1{font-size:13px!important;padding:0 6px!important;gap:3px!important}nav>button.r1.q{padding-left:22px!important}nav>button.r1 .qb{left:2px!important}nav>button.r1 .badge{font-size:10px;padding:0 4px}nav>button.r2,nav>#oth{padding:0 5px!important;font-size:12px!important}nav>button.r2 .badge,nav>#oth .badge{padding:0 4px;font-size:10px}}'+
'@media(max-width:380px){nav>button.r1{flex:1 0 auto!important;width:auto!important;max-width:none!important;padding:0 3px!important;gap:2px!important}nav>button.r1 .lb{flex:none}nav>button.r1 .badge{padding:0 3px;letter-spacing:-0.3px}nav>button.r1.q{padding-left:3px!important}nav>button.r1.q .ico{order:1;width:auto!important;display:inline-flex;align-items:center}nav>button.r1 .qb{position:static!important;flex:none;margin:0!important;width:13px!important;height:13px!important;font-size:10px!important;line-height:13px!important;letter-spacing:0;box-shadow:none!important}}'+
'html body .pval .lbtn.vreq{background:rgba(220,60,50,.22)!important;-webkit-backdrop-filter:blur(14px) saturate(160%);backdrop-filter:blur(14px) saturate(160%);border:1px solid rgba(255,120,110,.45)!important;color:#FFE3E0!important;font-weight:600!important;box-shadow:none!important}html body .pval .lbtn.vreq:active{background:rgba(220,60,50,.35)!important}'+
'html:not(.pfm) .pcard [data-pdeep]{display:none!important}'+
'@media(max-width:400px){nav>button.r2,nav>#oth{padding:0 3px!important;font-size:11.5px!important;gap:2px!important}}'+
'#msum{order:-2;width:100%;font-size:11px;line-height:15px;color:#9aa6b8;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left;background:none;border:0;padding:0;margin:0 0 2px;font-family:inherit}'+
'header #meta{order:-1;width:100%;justify-content:flex-start;margin:0 0 4px;font-size:10.5px!important;display:none!important}header.mx #meta{display:flex!important;flex-wrap:wrap!important}header #meta .mc{padding:0 7px;line-height:16px}';
/* звезда избранного, кнопка оценки, иконки вкладок, второй ряд — цвета в EV_UI (texts_config.js) */
var U=window.EV_UI||{};
css+=':root{--ev-star:'+(U.star_size||'24px')+';--ev-star-hit:'+(U.star_hit||'44px')+';--ev-star-off:'+(U.star_off||'rgba(255,255,255,.55)')+';--ev-star-on:'+(U.star_on||U.gold||'#D4AF5A')+';--ev-vreq:'+(U.vreq_bg||'#C0392B')+';--ev-vreq-p:'+(U.vreq_bg_pressed||'#A93226')+';--ev-vreq-t:'+(U.vreq_text||'#fff')+';--ev-vreq-b:'+(U.vreq_border||'rgba(255,255,255,.2)')+'}'+
'html body .row .star,html body .prow .pstar{font-size:var(--ev-star)!important;line-height:1!important;width:var(--ev-star-hit);height:var(--ev-star-hit);min-width:var(--ev-star-hit);padding:0!important;margin:calc((var(--ev-star) - var(--ev-star-hit))/2) 0!important;display:inline-flex!important;align-items:center;justify-content:center;vertical-align:middle;box-sizing:border-box;color:transparent!important;-webkit-text-stroke:1.3px var(--ev-star-off)}'+
'html body .row .star.on,html body .prow .pstar.on{color:var(--ev-star-on)!important;-webkit-text-stroke:0}'+
'.prow .c-sc{display:flex!important;align-items:center;justify-content:flex-end;gap:2px;white-space:nowrap}'+
'html body .pval .lbtn.vreq,html body .pval .lbtn.vreq:hover{display:flex!important;align-items:center;justify-content:center;gap:8px;width:100%!important;box-sizing:border-box;height:44px!important;min-height:44px;padding:0 16px!important;border-radius:12px!important;background:var(--ev-vreq)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;border:1px solid var(--ev-vreq-b)!important;color:var(--ev-vreq-t)!important;font-weight:600!important;font-size:15px!important;box-shadow:0 4px 12px rgba(0,0,0,.35)!important;filter:none!important;opacity:1!important;text-shadow:none!important}html body .pval .lbtn.vreq:active{background:var(--ev-vreq-p)!important}'+
'html body .pval .lbtn.vreq::before{content:"";flex:none;width:16px;height:16px;background:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221.8%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Crect x=%225%22 y=%224%22 width=%2214%22 height=%2217%22 rx=%222%22/%3E%3Cpath d=%22M9 4V3h6v1M9 11h6M9 15h4%22/%3E%3C/svg%3E") center/16px 16px no-repeat}'+
'nav button .ico svg{display:block!important;width:16px!important;height:16px!important;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;flex:none}'+
'nav>button.r1 .ico,nav #nr2>button .ico{display:inline-flex!important;width:auto!important;position:static!important;order:-1!important;flex:none;align-items:center}'+
'nav>button.r1,nav #nr2>button{gap:6px!important}nav>button.r1 .badge{margin-left:-2px!important}'+
'html body nav>button.r1.q{padding-left:6px!important}html body nav>button.r1 .qb{order:1;position:static!important;flex:none;margin:0!important;width:15px!important;height:15px!important;font-size:11px!important;line-height:15px!important;box-shadow:none!important}'+
'#nr2{order:2;flex:0 0 100%;display:flex;justify-content:safe center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin-top:6px;padding:0 0 2px}#nr2::-webkit-scrollbar{display:none}'+
'nav #nr2>button{flex:none!important;height:32px!important;min-width:0!important;margin:0 0 0 -1px!important;padding:0 10px!important;flex-direction:row!important;align-items:center;font-size:13px!important;white-space:nowrap;border:1px solid #ffffff40!important;border-radius:0!important;border-bottom-width:1px!important;box-shadow:none!important;background:var(--ev-r1bg,rgba(255,255,255,.06))!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:#d7dfea!important;font-weight:400}'+
/* края второго ряда (16.10, Дизайнер): «Избранное» слева и «Отчёты» справа — одна кнопка-сегмент .nseg, зеркально по модификатору стороны; края считаются по ВИДИМЫМ кнопкам (скрытая «Обновления» не забирает скругление) */'nav #nr2>button.nseg{height:32px!important;padding-left:10px!important;padding-right:10px!important;border-radius:0!important}nav #nr2>button.nseg--l{border-radius:10px 0 0 10px!important;margin-left:0!important}nav #nr2>button.nseg--r{border-radius:0 10px 10px 0!important}nav #nr2>button.nseg--l.nseg--r{border-radius:10px!important}'+
'nav #nr2>button.on{background:#fff!important;color:#0F1B33!important;font-weight:600}nav #nr2>button .lb{display:inline!important}'+
'nav #nr2>button .badge{position:static!important;margin:0!important;font-size:10.5px;line-height:15px;padding:0 5px;background:#ffffff26!important;color:inherit!important}nav #nr2>button.on .badge{background:#0F1B3322!important}'+
'@media(max-width:430px){html body nav>button.r1{flex:1 0 auto!important;width:auto!important;max-width:none!important;padding:0 2px!important;gap:2px!important;font-size:12px!important;letter-spacing:-0.3px}html body nav>button.r1.q{padding-left:2px!important}html body nav>button.r1 .badge{margin-left:0!important;padding:0 2px!important;font-size:9px!important;letter-spacing:-0.4px}}'+
'@media(max-width:380px){nav button .ico svg{width:14px!important;height:14px!important}nav #nr2>button{gap:3px!important}nav #nr2>button{padding:0 7px!important;font-size:12px!important}nav>button.r1.q .ico{order:-1!important}html body nav>button.r1.q{padding-left:3px!important}html body nav>button.r1 .qb{width:11px!important;height:11px!important;font-size:9px!important;line-height:11px!important}html body nav>button.r1{gap:1px!important;padding:0 1px!important;font-size:11.5px!important}html body nav>button.r1 .badge{padding:0 1px!important}html body nav>button.r1 .ico{margin-right:1px}}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
function evNav(){var bg=getComputedStyle(nav.querySelector('button.r1')||nav).backgroundColor;if(bg)document.documentElement.style.setProperty('--ev-r1bg',bg);
nav.querySelectorAll('button.r1 .ico .qb').forEach(function(q){var b=q.closest('button'),l=b.querySelector('.lb');b.insertBefore(q,l?l.nextSibling:null)});
var w=$('nr2');if(!w){w=document.createElement('div');w.id='nr2';nav.appendChild(w)}
[].slice.call(nav.children).forEach(function(c){if(c.matches&&c.matches('button.r2,#oth'))w.appendChild(c)})}

var hd=document.querySelector('header'),m=$('meta'),sum=document.createElement('button');sum.type='button';sum.id='msum';sum.title='Подробнее о данных';
if(hd&&m){hd.insertBefore(m,hd.firstChild);hd.insertBefore(sum,hd.firstChild);sum.onclick=function(){hd.classList.toggle('mx')}}
function plural(n){var a=n%10,b=n%100;return a==1&&b!=11?'лот':a>=2&&a<=4&&(b<12||b>14)?'лота':'лотов'}
function bdg(v,id){var b=nav.querySelector('button[data-v="'+v+'"]');if(!b)return null;var e=$(id);if(!e){e=document.createElement('span');e.className='badge';e.id=id;e.textContent='0';b.appendChild(e)}return e}
function cls(){var r1=[];[].forEach.call(nav.children,function(b){if(b.id==='nr2')return;var v=b.dataset&&b.dataset.v,i=R1.indexOf(v);b.classList.toggle('r1',i>=0);b.classList.toggle('r2',i<0&&b.id!=='oth');b.classList.remove('f','l');if(i>=0){b.style.order=1;r1[i]=b}else b.style.order=''});var v=r1.filter(Boolean);if(v.length){v.forEach(function(b,i){b.style.order=1+i/10});v[0].classList.add('f');v[v.length-1].classList.add('l')}}
function fs(){var b=document.querySelector('#favseg button[data-s=prop]');if(b&&b.firstChild&&b.firstChild.nodeType==3&&/Имущество/.test(b.firstChild.textContent))b.firstChild.textContent='Торги '}
function G(n){try{return (0,eval)(n)}catch(e){return undefined}}

/* счётчики вкладок 1-го ряда: сокращение «1,2к» на узких экранах, полное число — долгим нажатием и в шапке раздела */
var KC={maxw:+(U.cnt_abbr_maxw||380),from:+(U.cnt_abbr_from||1000),suf:U.cnt_abbr_suffix==null?'к':U.cnt_abbr_suffix,dec:U.cnt_abbr_decimal||',',lp:+(U.cnt_longpress_ms||500),grp:!!((U.header_v3||{}).on&&(U.header_v3||{}).badge_group)};
function kfmt(n){n=+n||0;if(innerWidth>KC.maxw||n<KC.from)return KC.grp?n.toLocaleString('ru-RU'):String(n);var k=n/1000;if(k<10){var t=Math.floor(k*10)/10;return (t%1?t.toFixed(1).replace('.',KC.dec):String(t))+KC.suf}return Math.floor(k)+KC.suf}
function setB(e,n,vid,nm){var t=kfmt(n),full=(+n||0).toLocaleString('ru-RU');if(e.textContent!==t)e.textContent=t;e.dataset.full=full;e.title=full;e.classList.toggle('kab',t!==String(n)&&t!==full);
 var v=$(vid);if(v){var h=v.querySelector(':scope>.evtot');if(!h){h=document.createElement('div');h.className='evtot';v.insertBefore(h,v.firstChild)}var s=nm+': '+full+' '+plural(+n||0);if(h.textContent!==s)h.textContent=s;h.classList.toggle('kab',t!==String(n)&&t!==full)}
 if(!e.__lp)setLP(e)}
function setLP(e){{e.__lp=1;var tm,fired;e.addEventListener('pointerdown',function(){fired=0;clearTimeout(tm);tm=setTimeout(function(){fired=1;kpop(e)},KC.lp)});['pointerup','pointerleave','pointercancel'].forEach(function(x){e.addEventListener(x,function(){clearTimeout(tm)})});e.addEventListener('click',function(ev){if(fired){ev.stopPropagation();ev.preventDefault();fired=0}},true);e.addEventListener('contextmenu',function(ev){ev.preventDefault();kpop(e)})}}
function kpop(e){var o=$('kpop');if(!o){o=document.createElement('div');o.id='kpop';document.body.appendChild(o);document.addEventListener('pointerdown',function(ev){if(ev.target!==o&&!(ev.target.classList&&ev.target.classList.contains('badge')))o.style.display='none'},true)}
 o.textContent=e.dataset.full;o.style.display='block';var r=e.getBoundingClientRect(),w=o.offsetWidth;o.style.left=Math.max(4,Math.min(innerWidth-w-4,r.left+r.width/2-w/2))+'px';o.style.top=(r.bottom+6)+'px';clearTimeout(o.__t);o.__t=setTimeout(function(){o.style.display='none'},2500)}
function kall(){[].forEach.call(nav.querySelectorAll(KC.grp?'button .badge':'button.r1 .badge'),function(e){if(e.id==='regn'||e.id==='propn')return;var t=e.textContent.trim(),raw=(e.dataset.sh&&t===e.dataset.sh)?e.dataset.raw:t;if(!/^\d+$/.test(raw))return;var f=kfmt(raw);e.dataset.raw=raw;e.dataset.sh=f;e.dataset.full=(+raw).toLocaleString('ru-RU');e.title=e.dataset.full;if(t!==f)e.textContent=f;if(!e.__lp)setLP(e)})}
var kmo=new MutationObserver(function(){kmo.disconnect();try{kall()}catch(x){}kmo.observe(nav,{subtree:true,childList:true,characterData:true})});kmo.observe(nav,{subtree:true,childList:true,characterData:true});
addEventListener('resize',function(){try{cnt();kall()}catch(e){}});
var kst=document.createElement('style');kst.textContent='nav button{-webkit-tap-highlight-color:transparent}html body nav>button.r1.on,html body nav #nr2>button.on{background:'+(U.sel_bg||'rgba(212,175,90,.22)')+'!important;border-color:'+(U.sel_border||'rgba(212,175,90,.5)')+'!important;color:'+(U.sel_text||U.gold||'#D4AF5A')+'!important;z-index:1}html body nav>button.r1.on .badge,html body nav #nr2>button.on .badge{background:rgba(212,175,90,.25)!important;color:inherit!important}html body nav>button.r1:active,html body nav #nr2>button:active{filter:brightness(.8);transition:filter 100ms}html body nav #nr2,html body nav #nr2.on,html body nav #nr2:active{background:none!important;filter:none!important;border:0!important}@media(max-width:'+KC.maxw+'px){'+(U.r1_icons_narrow===false?'html body nav>button.r1 .ico svg{display:none!important}':'')+'}.lbtn .rpic{width:16px;height:16px;flex:none;vertical-align:-4px;margin-right:6px}.lbtn:has(.rpic){display:inline-flex;align-items:center}#kpop{position:fixed;z-index:9999;display:none;padding:4px 10px;border-radius:8px;background:#0F1B33;color:#fff;font-size:13px;font-weight:600;border:1px solid #ffffff40;box-shadow:0 4px 12px rgba(0,0,0,.35);pointer-events:none;white-space:nowrap}.evtot{display:none;font-size:13px;color:#9aa6b8;margin:0 0 8px}@media(max-width:'+KC.maxw+'px){.evtot.kab{display:block}html body nav>button.r1{font-size:13px!important;letter-spacing:0!important;gap:'+(U.r1_gap_narrow||'6px')+'!important;padding:0 '+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1.q{padding-left:'+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1 .badge{font-size:10px!important;padding:0 4px!important;letter-spacing:0!important;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}}';document.head.appendChild(kst);
function cnt(){try{var D=G('DATA'),P=G('PROP'),r=bdg('reg','regn'),p=bdg('prop','propn'),n=D&&D.lots?D.lots.length:null;
 var pn=P&&P.lots?(P.lots.length-G('pMissL')().length):0;
 if(r)setB(r,n==null?0:n,'vreg','Реестр');if(p)setB(p,pn,'vprop','Торги');
 if(m&&n!=null){[].forEach.call(m.querySelectorAll('.mc'),function(x){if(/^лотов: /.test(x.textContent)){var t='лотов: '+n;if(x.textContent!==t)x.textContent=t}})}
 var tk=G('TOKEN'),src=G('SRC')||'',L1=[],L2=[],SC=U.update_schedule||{},lu=lastUpd(D,P);
 var SP=SC.label_sep==null?': ':SC.label_sep;L1.push((SC.label_last||'Обновлено')+SP+(lu?fmsk(lu):'—'));var nx=nextRun(SC);if(nx)L1.push((SC.label_next||'Следующее')+SP+fmsk(nx));
 var V3=(U.header_v3||{}).on;if(src&&!V3)L1.push(src);if(tk&&!V3)L1.push('🔑');if(G('LOADING'))L1.push('обновление…');if(G('LERR'))L1.push('⚠ не удалось обновить');
 var tg=P&&P.lots?P.lots.length:null;if(n!=null)L2.push((U.sum_reg||'Реестры')+SP+n.toLocaleString('ru-RU'));if(tg!=null)L2.push((U.sum_torgi||'Торги')+SP+tg.toLocaleString('ru-RU'));if(n!=null||tg!=null)L2.push((U.sum_total||'Всего')+SP+((n||0)+(tg||0)).toLocaleString('ru-RU'));
 var E=function(a){return a.map(function(x){return '<span>'+String(x).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})+'</span>'}).join('<i> · </i>')},h=V3?st3(n,tg,lu,nx,SC):'<span class="ml">'+E(L1)+'</span>'+(L2.length?'<span class="ml">'+E(L2)+'</span>':'');
 if(sum.__h!==h){sum.__h=h;sum.innerHTML=h}}catch(e){}}
function st3(n,tg,lu,nx,SC){var HV=U.header_v3||{},Q=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})},it=[],f=function(x){return (+x).toLocaleString('ru-RU')};
 if(n!=null)it.push([U.sum_reg||'Реестры',f(n)]);if(tg!=null)it.push([U.sum_torgi||'Торги',f(tg)]);if(n!=null||tg!=null)it.push([U.sum_total||'Всего',f((n||0)+(tg||0))]);
 it.push([SC.label_last||'Обновлено',lu?fmsk(lu):'—']);if(nx)it.push([SC.label_next||'Следующее',fmsk(nx)]);if(G('LOADING'))it.push(['обновление…','']);if(G('LERR'))it.push(['⚠ не удалось обновить','']);
 return '<span class="ml"><i class="h3d" aria-hidden="true"></i>'+it.map(function(x){return '<span class="h3i">'+Q(x[0])+(x[1]?' <b>'+Q(x[1])+'</b>':'')+'</span>'}).join('<i class="h3s">'+Q(HV.status_sep==null?' · ':HV.status_sep)+'</i>')+'</span>'}
/* метки времени (МСК) и следующее плановое обновление по cron из EV_UI.update_schedule */
function lastUpd(D,P){var c=[D&&D.data_updated,P&&P.generated].map(function(x){var d=x?new Date(x):null;return d&&!isNaN(d)?d:null}).filter(Boolean);if(!c.length&&D&&D.data_date){var d=new Date(D.data_date);if(!isNaN(d))c.push(d)}return c.length?new Date(Math.max.apply(null,c)):null}
function fmsk(d){var HV=U.header_v3||{};if(HV.on&&HV.tz&&window.Intl)try{return new Intl.DateTimeFormat(HV.locale||'ru-RU',{timeZone:HV.tz,day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(d)}catch(e){}
 var o=((U.update_schedule||{}).tz_offset_hours);o=o==null?3:+o;var z=new Date(d.getTime()+o*3600e3),p=function(x){return ('0'+x).slice(-2)};return p(z.getUTCDate())+'.'+p(z.getUTCMonth()+1)+'.'+z.getUTCFullYear()+', '+p(z.getUTCHours())+':'+p(z.getUTCMinutes())}
function nextRun(SC){var D=SC.days,T=String(SC.time||'').match(/^(\d{1,2}):(\d{2})$/);if(!D||!D.length||!T)return null;var off=SC.tz_offset_hours==null?3:+SC.tz_offset_hours,z=new Date(Date.now()+off*3600e3);
 for(var i=0;i<70;i++){var d=new Date(Date.UTC(z.getUTCFullYear(),z.getUTCMonth(),z.getUTCDate()+i,+T[1],+T[2]));if(D.indexOf(d.getUTCDate())>=0&&d.getTime()-off*3600e3>Date.now())return new Date(d.getTime()-off*3600e3)}return null}
function pf(){document.documentElement.classList.toggle('pfm',!!window.PFM)}
function hp(){var h=document.querySelector('header');if(h)document.documentElement.style.setProperty('--hpr',getComputedStyle(h).paddingRight)}
addEventListener('resize',hp);
function edges(){var w=$('nr2');if(!w)return;var bs=[].filter.call(w.children,function(b){return b.tagName==='BUTTON'}),vis=bs.filter(function(b){return b.getClientRects().length>0});
 bs.forEach(function(b){var l=b===vis[0],r=b===vis[vis.length-1];b.classList.toggle('nseg',l||r);b.classList.toggle('nseg--l',l);b.classList.toggle('nseg--r',r)})}
function all(){pf();hp();cls();evNav();fs();cnt();edges()}
document.addEventListener('click',function(){setTimeout(pf,0)},true);
['render','propRender','setData','favUI'].forEach(function(f){try{var o=(0,eval)(f);if(typeof o!='function')return;window['__n2o_'+f]=o;(0,eval)(f+'=function(){var r=window.__n2o_'+f+'.apply(this,arguments);try{window.__n2all()}catch(e){}return r}')}catch(e){}});
window.__n2all=all;all();setInterval(cnt,3000);
new MutationObserver(function(){cls();fs();edges()}).observe(nav,{childList:true});
(function(){var w=$('nr2');if(w)new MutationObserver(edges).observe(w,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style','hidden']});addEventListener('resize',edges)})();
})();
(function(){var T=(window.EV_TEXTS||{}).move_notice;if(!T)return;var st=document.createElement('style');st.textContent='.mvn{margin:0 0 12px;padding:10px 14px;border-radius:6px;background:#C0392B;color:#fff;font-size:15px;font-weight:600;line-height:1.4}.mvn a{color:#fff;text-decoration:underline;font-weight:600;margin-left:6px;white-space:nowrap}';document.head.appendChild(st);
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
(T.views||[]).forEach(function(id){var v=document.getElementById(id);if(!v||v.querySelector('.mvn'))return;var d=document.createElement('div');d.className='mvn';d.setAttribute('role','alert');d.innerHTML=esc(T.text)+(T.url?' <a href="'+esc(T.url)+'" target="_blank" rel="noopener">'+esc(T.link_text||T.url)+' →</a>':'');v.insertBefore(d,v.firstChild)})})();
/* шапка: служебные строки (всегда); лого-блок по Дизайнеру (EV_UI.header.v2); «Отчёты» под «Обновить» (EV_UI.under_refresh) */
(function(){var U=window.EV_UI||{},H=U.header||{},G=U.gold||'#D4AF5A',hd=document.querySelector('header'),hb=hd&&hd.querySelector('.hb');if(!hb)return;
var bt=hb.querySelector('.bt'),img=hb.querySelector('img'),V2=!!H.v2;
var css='html body #msum{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;font-size:'+(H.service_px||11)+'px!important;line-height:14px!important;text-align:left}'+
'html body #msum .ml{display:block}html body #msum .ml>span{white-space:nowrap}html body #msum .ml>i{font-style:normal}';
if(V2){var lg=H.logo_px||56;
 css+='html body header .hb{align-items:center!important;gap:12px!important;min-width:0}'+
 'html body header .hb>img{height:'+lg+'px!important;width:auto!important;max-width:none;flex:none}'+
 'html body header .hb .bt{display:flex!important;flex-direction:column!important;justify-content:center;min-height:'+lg+'px;row-gap:2px;min-width:0;line-height:1.2!important}'+
 'html body header .hb .bl{display:contents!important}'+
 'html body header .hb .brand-n{order:1;display:block!important;font-size:'+(H.name_px||20)+'px!important;font-weight:600!important;line-height:1.15;color:#fff!important;white-space:nowrap;letter-spacing:0}'+
 'html body header .hb .brand-n .g{color:'+G+'}'+
 'html body header .hb small{order:2;display:block!important;font-size:'+(H.system_px||12)+'px!important;color:'+(H.system_color||'rgba(255,255,255,.7)')+'!important;opacity:1!important;font-weight:400!important;white-space:nowrap}'+
 'html body header .hb .brand-s{order:3;display:block!important;font-size:'+(H.slogan_px||11)+'px!important;font-style:italic;color:'+(H.slogan_color||'rgba(255,255,255,.5)')+'!important;opacity:1!important;text-transform:none!important;letter-spacing:0!important;font-weight:400!important;white-space:nowrap}'+
 'html body #msum{order:0!important;flex:0 0 100%;width:100%;margin:6px 0 2px!important}'+
 'html body header .hbw{display:flex;flex-direction:column;align-items:flex-start;flex:0 1 auto;min-width:0;order:0}'+
 '@media(min-width:1024px){html body header{justify-content:flex-start!important}html body header .hbw{margin-right:12px}html body .hbw #msum{flex:none;width:auto;max-width:460px}}'+
 '@media(max-width:1023.98px){html body header .hbw{flex:1 1 auto;max-width:100%}html body header>#msum{margin-right:calc(10px - var(--hpr,116px))!important;width:auto!important;flex:1 0 calc(100% + var(--hpr,116px) - 10px)!important}}'+
 '@media(max-width:400px){html body header .hb>img{height:'+(H.logo_px_narrow||46)+'px!important}html body header .hb .bt{min-height:'+(H.logo_px_narrow||46)+'px}html body header .hb{gap:10px!important}}';
 var n=hb.querySelector('.brand-n');if(n&&!n.querySelector('.g'))n.innerHTML=n.textContent.replace(/[&<>]/g,'').replace('Эверест','<span class="g">Эверест</span>');
 /* служебные строки — сразу под лого-блоком */
 var W=document.createElement('div');W.className='hbw';hb.parentNode.insertBefore(W,hb);W.appendChild(hb);
 var mv=function(){var sm=document.getElementById('msum');if(!sm)return;if(innerWidth>=1024){if(sm.parentNode!==W)W.appendChild(sm)}else if(sm.previousElementSibling!==W)W.after(sm)};mv();setTimeout(mv,400);addEventListener('resize',mv);
 /* золотая линия роста прорисовывается один раз за 1,2 с (ease-out); при reduced-motion — статичный файл (data-rm) */
 if(img&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&/anim/.test(img.getAttribute('src')||'')){fetch(img.src).then(function(r){return r.text()}).then(function(t){
  t=t.replace(/<animate attributeName="stroke-dashoffset"[^>]*>/,'<animate attributeName="stroke-dashoffset" values="388.8;0" keyTimes="0;1" keySplines="0 0 0.58 1" calcMode="spline" dur="'+(H.draw_s||1.2)+'s" fill="freeze"/>')
   .replace(/<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;([\d.]+);([\d.]+);0\.9;1" dur="4s" repeatCount="indefinite"\/>/g,function(_,a,b){var k=0.46;return '<animate attributeName="opacity" values="0;0;1" keyTimes="0;'+(Math.min(+a/k,0.99)).toFixed(3)+';'+(Math.min(+b/k,1)).toFixed(3)+'" dur="'+((H.draw_s||1.2)/0.87).toFixed(2)+'s" fill="freeze"/>'});
  if(/indefinite/.test(t))return;img.src=URL.createObjectURL(new Blob([t],{type:'image/svg+xml'}))}).catch(function(){})}}
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
/* кнопка под «Обновить»: EV_UI.under_refresh = селектор кнопки ('nav button[data-v=rpt]' или '#oth'), '' — не переносить */
var SEL=U.under_refresh||'';if(!SEL)return;
var cs2=document.createElement('style');cs2.textContent='html body header #urb{position:absolute;z-index:5;display:inline-flex!important;align-items:center;justify-content:center;gap:6px;box-sizing:border-box;cursor:pointer;font-family:inherit;margin:0!important;-webkit-tap-highlight-color:transparent}html body header #urb .ico{display:inline-flex!important;width:auto!important;position:static!important}html body header #urb .ico svg{width:16px!important;height:16px!important;display:block!important}html body header #urb:active{filter:brightness(.8)}html body header #urb.on{background:'+(U.sel_bg||'rgba(212,175,90,.22)')+'!important;border-color:'+(U.sel_border||'rgba(212,175,90,.5)')+'!important;color:'+G+'!important}';document.head.appendChild(cs2);
var HG=U.header_grid||{},V3H=!!(U.header_v3||{}).on,HGO=!!HG.on&&!V3H,HGW=null;  /* при header_v3.on раскладку шапки ведёт src/hdr3.js */
function rp(){var b=document.getElementById('urb')||document.querySelector(SEL),r=document.getElementById('rfb');if(!b||!r)return;
 if(b.id!=='urb'){b.dataset.oid=b.id||'';b.id='urb';b.classList.remove('evx','r2');b.style.order='';(HGO&&hgrid()||hd).appendChild(b);b.addEventListener('click',function(){b.classList.add('on')});
  var nv=document.querySelector('nav');if(nv)nv.addEventListener('click',function(e){var x=e.target.closest('button');if(x&&x!==b)b.classList.remove('on')})}
 if(V3H)return;
 if(HGO&&hgrid()){var S=HGW;if(r.parentNode!==S)S.insertBefore(r,S.firstChild);if(b.parentNode!==S)S.appendChild(b);var sm=document.getElementById('msum'),L=document.getElementById('hgl');if(sm&&L&&sm.parentNode!==L)L.appendChild(sm);var th=document.getElementById('thm'),hr2=document.getElementById('hrow');if(th&&hr2&&th.parentNode!==hr2)hr2.appendChild(th);var lb0=b.querySelector('.lb');if(lb0)lb0.style.display='';return}
 var c=getComputedStyle(r),hr=hd.getBoundingClientRect(),rr=r.getBoundingClientRect(),gp=+(H.under_gap||6);
 ['width','height','borderRadius','border','background','color','boxShadow','padding'].forEach(function(k){b.style[k]=c[k]});
 b.style.fontSize=Math.min(parseFloat(c.fontSize)||14,15)+'px';b.style.right=(hr.right-rr.right)+'px';b.style.top=(rr.bottom-hr.top+gp)+'px';
 var lb=b.querySelector('.lb');if(lb)lb.style.display=rr.width>80?'':'none';
 hb.style.minHeight='';var need=rr.bottom-hr.top+gp+rr.height+4,cur=hb.getBoundingClientRect().bottom-hr.top;if(cur<need)hb.style.minHeight=(hb.offsetHeight+need-cur)+'px'}
/* шапка-сетка: две колонки (слева flex:1 — дата и лоты, справа — «Обновить» и под ней кнопка EV_UI.under_refresh одной ширины); вторая строка — лого и переключатель темы */
function hgrid(){if(HGW)return HGW;var P=+(HG.pad==null?16:HG.pad),BH=+(HG.btn_h||36),BG=+(HG.btn_gap==null?8:HG.btn_gap),BM=+(HG.btn_min||112),R=+(HG.btn_radius||10),TP=+(HG.thm_px||36);
 var w=document.createElement('div');w.id='hgrid';w.innerHTML='<div id="hgl"></div><div id="hgr"></div>';hd.insertBefore(w,hd.firstChild);
 var row=document.createElement('div');row.id='hrow';hb.parentNode.insertBefore(row,hb);row.appendChild(hb);
 hd.classList.add('hg');HGW=w.querySelector('#hgr');
 var c='html body header.hg{padding-left:'+P+'px!important;padding-right:'+P+'px!important;justify-content:flex-start!important;row-gap:'+(+(HG.row_gap||10))+'px!important}'+
 'html body header.hg>nav{margin-left:0!important;margin-right:0!important}'+
 'html body header.hg #hgrid{order:-3;flex:0 0 100%;width:100%;display:flex;align-items:flex-start;gap:'+(+(HG.col_gap==null?12:HG.col_gap))+'px;min-width:0;box-sizing:border-box}'+
 'html body header.hg #hgl{flex:1 1 0;min-width:0}'+
 'html body header.hg #hgr{flex:none;display:grid;grid-template-columns:'+(HG.btn_w?(+HG.btn_w)+'px':'minmax('+BM+'px,max-content)')+';grid-auto-rows:'+BH+'px;row-gap:'+BG+'px;justify-items:stretch}'+
 'html body header.hg #msum{display:block!important;position:static!important;order:0!important;width:100%!important;max-width:none!important;flex:none!important;margin:0!important;padding:0!important;white-space:normal!important;overflow:visible!important;text-align:left!important}'+
 'html body header.hg #msum .ml{display:block;overflow-wrap:anywhere}html body header.hg #msum .ml>span{white-space:nowrap}@media(max-width:340px){html body header.hg #msum .ml:first-child>span{white-space:normal}}'+
 'html body header.hg #msum .ml:first-child{font-size:'+(+(HG.date_px||12))+'px!important;line-height:16px;color:'+(HG.date_color||'rgba(255,255,255,.62)')+'}'+
 'html body header.hg #msum .ml+.ml{margin-top:4px;font-size:'+(+(HG.lots_px||13))+'px!important;line-height:18px;color:'+(HG.lots_color||'rgba(255,255,255,.92)')+'}'+
 'html body header.hg #hgr>#rfb,html body header.hg #hgr>#urb{position:static!important;inset:auto!important;transform:none!important;width:auto!important;min-width:0!important;height:'+BH+'px!important;margin:0!important;padding:0 14px!important;box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;border-radius:'+R+'px!important;font:600 '+(+(HG.btn_px||14))+'px/1 system-ui,-apple-system,sans-serif!important;white-space:nowrap!important;background:#1C2E52!important;border:1px solid rgba(212,175,90,.75)!important;color:#F3D98B!important;box-shadow:none!important;z-index:auto!important}'+
 'html body header.hg #hgr>#urb.on{background:'+(U.sel_bg||'rgba(212,175,90,.22)')+'!important;border-color:'+(U.sel_border||'rgba(212,175,90,.5)')+'!important;color:'+G+'!important}'+
 'html body header.hg #hgr #rfb .rl{position:static!important;width:auto!important;height:auto!important;overflow:visible!important;clip:auto!important}'+
 'html body header.hg #hgr #rfb .ri,html body header.hg #hgr #urb .ico svg{width:18px!important;height:18px!important;display:block!important}html body header.hg #hgr #urb .ico{display:inline-flex!important;width:auto!important;position:static!important}html body header.hg #hgr #urb .lb{display:inline!important}html body header.hg #hgr #urb .badge:not(.wq){display:none!important}html body header.hg #hgr #urb .badge.wq{position:static!important;margin:0 0 0 2px!important;font:600 10.5px/16px system-ui,sans-serif!important;min-width:16px;height:16px;padding:0 5px!important;border-radius:8px!important;box-sizing:border-box;text-align:center}'+
 'html body header.hg #hgr>#rfb,html body header.hg #hgr>#urb{width:100%!important;overflow:hidden}'+
 'html body header.hg #hgr #rfb .ri{flex:none;box-sizing:content-box}html body header.hg #hgr #rfb.busy .ri{width:'+(+(HG.spinner_px||14))+'px!important;height:'+(+(HG.spinner_px||14))+'px!important;padding:'+((18-(+(HG.spinner_px||14)))/2)+'px!important}'+
 'html body header.hg #hgr #rfb:disabled,html body header.hg #hgr #rfb[aria-busy=true]{opacity:'+(HG.busy_opacity==null?0.6:+HG.busy_opacity)+'!important;cursor:progress}'+
'html body header.hg #hrow{order:-2;flex:0 0 100%;width:100%;display:flex;align-items:center;gap:12px;min-width:0}'+
 'html body header.hg #hrow>.hb{flex:1 1 auto!important;min-width:0;justify-content:flex-start!important;min-height:0!important}'+
 'html body header.hg #hrow>#thm{display:inline-flex!important;position:static!important;flex:none;width:'+TP+'px!important;height:'+TP+'px!important;margin:0!important;border-radius:'+R+'px!important;align-items:center;justify-content:center}'+
 '@media(min-width:1024px){html body header.hg #hrow{flex:0 1 auto;width:auto}}';
 /* ≤ m_bp: ряд 1 — лого+название слева, справа круглые «Обновить» и под ней «Прочее»; ряд 2 — дата и лоты; вкладки — сегменты на всю ширину без прокрутки */
 var MB=+(HG.m_bp||430),IB=+(HG.m_icon_btn||36),TF=+(HG.m_tab_px||13),TM=+(HG.m_tab_px_min||12),TH=+(HG.m_tab_h||36),T2=+(HG.m_tab2_h||32),TA=+(HG.m_tab_min_px_at||374);
 c+='@media(max-width:'+MB+'px){'+
 'html body header.hg{padding-left:max('+P+'px,env(safe-area-inset-left))!important;padding-right:max('+P+'px,env(safe-area-inset-right))!important;align-items:flex-start!important;overflow:visible!important}'+
 'html body header.hg #hgrid{display:contents}'+
 'html body header.hg #hrow{order:1;flex:1 1 0!important;width:auto!important;min-width:0;align-self:flex-start;min-height:'+IB+'px}'+
 'html body header.hg #hgr{order:2;grid-template-columns:'+IB+'px!important;grid-auto-rows:'+IB+'px;row-gap:'+BG+'px;align-self:flex-start}'+
 'html body header.hg #hgl{order:3;flex:0 0 100%!important;width:100%}'+
 'html body header.hg>nav{order:4}'+
 'html body header.hg #hgr>#rfb,html body header.hg #hgr>#urb{width:'+IB+'px!important;height:'+IB+'px!important;padding:0!important;gap:0!important;border-radius:50%!important}'+
 'html body header.hg #hgr #rfb .rl,html body header.hg #hgr #urb .lb{display:none!important}'+
 'html body header.hg #hgr>#urb{position:relative!important;overflow:visible!important}html body header.hg #hgr #urb .badge.wq{position:absolute!important;top:-4px;right:-4px;margin:0!important}'+
 'html body header.hg #hrow>.hb>img{height:'+(+(HG.m_logo_px||28))+'px!important;width:auto!important}'+
 'html body header.hg #hrow>.hb{gap:8px!important;align-items:center!important}'+
 'html body header.hg #hrow .brand-n{font-size:'+(+(HG.m_title_px||17))+'px!important;white-space:nowrap}html body header.hg #hrow .brand-s{display:none!important}html body header.hg #hrow small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}'+
 'html body header.hg #hrow .bt{min-width:0}'+
 'html body header.hg #hrow>#thm{border-radius:50%!important;width:'+IB+'px!important;height:'+IB+'px!important}'+
 /* вкладки */
 'html body header.hg nav{overflow:visible!important;flex-wrap:wrap!important;width:100%!important;max-width:none!important}'+
 'html body header.hg nav>button.r1{flex:1 1 0!important;width:auto!important;max-width:none!important;min-width:0!important;height:'+TH+'px!important;padding:0 2px!important;gap:3px!important;font-size:'+TF+'px!important;letter-spacing:0!important;overflow:hidden}'+
 'html body header.hg nav>button.r1 .ico{display:none!important}html body header.hg nav>button.r1 .lb{min-width:0;overflow:hidden;text-overflow:ellipsis}'+
 'html body header.hg nav>button.r1 .badge{font-size:10px!important;padding:0 4px!important;margin:0!important;letter-spacing:0!important}'+
 'html body header.hg nav>button.r1 .qb{width:13px!important;height:13px!important;font-size:10px!important;line-height:13px!important}'+
 'html body header.hg nav #nr2{display:flex!important;flex:0 0 100%!important;overflow:visible!important;flex-wrap:nowrap!important;justify-content:stretch!important;padding:0!important}'+
 'html body header.hg nav #nr2>button{flex:1 1 0!important;min-width:0!important;height:'+T2+'px!important;padding:0 2px!important;gap:0!important;justify-content:center;font-size:'+TF+'px!important;overflow:visible;position:relative!important}'+
 'html body header.hg nav #nr2>button .ico{display:none!important}html body header.hg nav #nr2>button .lb{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'+
 'html body header.hg nav #nr2>button .badge{position:absolute!important;top:-6px;right:2px;font-size:9.5px!important;line-height:14px!important;padding:0 4px!important;background:'+G+'!important;color:#0F1B33!important;z-index:2}'+
 'html body header.hg #othbar,html body header.hg #favseg{max-width:100%!important;overflow:visible!important;flex-wrap:wrap}'+
 '}'+
 '@media(max-width:'+TA+'px){html body header.hg nav>button.r1,html body header.hg nav #nr2>button{font-size:'+TM+'px!important}html body header.hg nav>button.r1 .badge{padding:0 3px!important}}';
 var s=document.createElement('style');s.textContent=c;document.head.appendChild(s);return HGW}
addEventListener('resize',rp);setTimeout(rp,0);setTimeout(rp,400);setTimeout(rp,1500);setInterval(rp,3000);
})();
/* экран PIN: ввод с физической клавиатуры (цифры, numpad, Backspace, Enter) и скрытое поле для мобильной клавиатуры/автозаполнения */
(function(){var P=document.getElementById('pin'),kp=document.getElementById('kp'),dt=document.getElementById('pind');if(!P||!kp)return;
function vis(){return P.style.display!=='none'&&getComputedStyle(P).display!=='none'}
function send(k){document.dispatchEvent(new KeyboardEvent('keydown',{key:k,bubbles:true,cancelable:true}))}
var I=document.createElement('input');I.id='pinin';I.type='text';I.setAttribute('inputmode','numeric');I.setAttribute('pattern','[0-9]*');I.setAttribute('autocomplete','one-time-code');I.setAttribute('aria-label','PIN');I.maxLength=8;
I.style.cssText='position:absolute;opacity:0;width:1px;height:1px;left:50%;top:0;border:0;padding:0;font-size:16px;caret-color:transparent;background:transparent;color:transparent';
(dt.parentNode||P).appendChild(I);
I.addEventListener('input',function(){var v=I.value.replace(/\D/g,'');I.value='';for(var i=0;i<v.length;i++)send(v[i])});
[dt,document.getElementById('pinm')].forEach(function(x){if(x){x.style.cursor='text';x.addEventListener('click',function(){I.focus()})}});
document.addEventListener('keydown',function(e){if(!vis()||!e.isTrusted)return;if(e.key==='Enter'||e.code==='NumpadEnter'){e.preventDefault();var n=dt.querySelectorAll('i.f').length;if(n&&n<4){dt.classList.remove('shake');void dt.offsetWidth;dt.classList.add('shake');setTimeout(function(){dt.classList.remove('shake')},500)}}},true);
})();

/* Шапка v3 по макету Дизайнера (everest_analitik_design/header_v1/spec.md, утверждено 17.10.2026).
   Одна сетка #h3in (бренд · вкладки · действия / строка статуса), вкладки 4×2 — ОДНА grid-сетка (края рядов совпадают),
   одна строка статуса (#msum, счётчики + даты), рабочее поле разделов — тот же max-width и отступы.
   Все размеры, цвета, подписи, брейкпоинты — EV_UI.header_v3 (src/texts_config.js); здесь только раскладка. */
(function(){var U=window.EV_UI||{},H=U.header_v3||{};if(!H.on)return;
var hd=document.querySelector('header'),nav=hd&&hd.querySelector('nav');if(!hd||!nav)return;
var $=function(i){return document.getElementById(i)},F=H.font||{},K=H.colors||{},px=function(v){return (+v)+'px'};
var V={maxw:px(H.max_w),padx:px(H.pad_x),pady:px(H.pad_y),colgap:px(H.col_gap),rowgap:px(H.row_gap),brand:px(H.brand_col),bgap:px(H.brand_gap),logo:px(H.logo),logoc:px(H.logo_compact),
 cols:H.nav_cols,colsn:H.nav_cols_narrow,navgap:px(H.nav_gap),navpad:px(H.nav_pad),tabh:px(H.tab_h),tabr:px(H.tab_r),trackr:px(H.track_r),tabpx:px(H.tab_pad_x),tabgap:px(H.tab_gap),tabpxp:px(H.tab_pad_x_phone),tabgapp:px(H.tab_gap_phone),
 tabico:px(H.tab_icon),qb:px(H.qb),bmin:px(H.badge_min),bpad:H.badge_pad,actw:px(H.act_w),acth:px(H.act_h),actgap:px(H.act_gap),actpx:px(H.act_pad_x),ibtn:px(H.icon_btn),thm:px(H.theme_btn),icon:px(H.icon),dot:px(H.dot),dotgap:px(H.dot_gap),
 slls:H.slogan_ls,nmw:H.name_weight,fname:px(F.name),fsl:px(F.slogan),fsub:px(F.sub),fst:px(F.status),fbd:px(F.badge),ftab:px(F.tab),fact:px(F.act),fqb:px(F.qb),ftip:px(F.tip)};
for(var k in K)V[k.replace(/_/g,'-')]=K[k];
var root=':root{'+Object.keys(V).map(function(k){return '--h3-'+k+':'+V[k]}).join(';')+'}';
var I='html body header.h3 #h3in',B=I+' nav button',A=I+' .h3a';
var css=root+
'html body header.h3{display:block!important;padding:0!important;padding-top:env(safe-area-inset-top)!important;gap:0!important;background:var(--h3-hdr-bg)!important;border-bottom:1px solid var(--h3-hdr-line)!important;box-shadow:var(--h3-hdr-shadow)!important;-webkit-backdrop-filter:var(--h3-hdr-blur);backdrop-filter:var(--h3-hdr-blur);color:var(--h3-ink)}'+
'html body header.h3 #meta,html body header.h3 #schl,html body header.h3 .ldmsg .ldsub{display:none!important}'+
I+'{max-width:var(--h3-maxw);margin:0 auto;padding:var(--h3-pady) var(--h3-padx);box-sizing:border-box;display:grid;grid-template-columns:var(--h3-brand) minmax(0,1fr) auto;grid-template-areas:"brand nav act" ". st st";column-gap:var(--h3-colgap);row-gap:var(--h3-rowgap);align-items:center;min-width:0}'+
/* бренд */
I+' .h3b{grid-area:brand;display:flex;align-items:center;gap:var(--h3-bgap);min-width:0}'+
I+' .h3b .hb{display:flex!important;align-items:center!important;gap:var(--h3-bgap)!important;flex:1 1 auto!important;min-width:0;min-height:0!important;margin:0!important;padding:0!important;justify-content:flex-start!important}'+
I+' .h3b .hb>img{width:var(--h3-logo)!important;height:auto!important;max-width:none!important;flex:none}'+
I+' .h3b .bt{display:flex!important;flex-direction:column!important;justify-content:center;min-width:0;line-height:1.25!important;row-gap:0}'+
I+' .h3b .bl{display:contents!important}'+
I+' .h3b .brand-s{order:0;display:block!important;font-size:var(--h3-fsl)!important;line-height:1.2;letter-spacing:var(--h3-slls)!important;text-transform:uppercase!important;color:var(--h3-gold)!important;font-style:normal!important;font-weight:400!important;opacity:1!important;white-space:nowrap;margin:0!important}'+
I+' .h3b .brand-n{order:1;display:block!important;font-size:var(--h3-fname)!important;font-weight:var(--h3-nmw)!important;letter-spacing:-.01em;line-height:1.25;color:var(--h3-ink)!important;white-space:nowrap;margin:0!important}'+
I+' .h3b .h3sn{order:1;display:none;font-size:var(--h3-fname);font-weight:var(--h3-nmw);line-height:1.25;color:var(--h3-ink);white-space:nowrap}'+
I+' .h3b small{order:2;display:block!important;font-size:var(--h3-fsub)!important;color:var(--h3-mut)!important;opacity:1!important;font-weight:400!important;white-space:nowrap;margin:0!important}'+
I+' .h3b #thm{display:grid!important;place-items:center;position:static!important;inset:auto!important;flex:none;width:var(--h3-thm)!important;height:var(--h3-thm)!important;margin:0!important;padding:0!important;border:0!important;border-radius:50%!important;background:var(--h3-btn2-bg)!important;box-shadow:inset 0 0 0 1px var(--h3-btn2-line)!important;color:var(--h3-mut)!important}'+
I+' .h3b #thm:hover{color:var(--h3-gold)!important}'+I+' .h3b #thm svg{width:var(--h3-icon)!important;height:var(--h3-icon)!important}'+
/* вкладки: одна сетка на все кнопки */
I+'>nav{grid-area:nav;display:grid!important;grid-template-columns:repeat(var(--h3-cols),minmax(0,1fr))!important;gap:var(--h3-navgap)!important;padding:var(--h3-navpad)!important;margin:0!important;border-radius:var(--h3-trackr)!important;background:var(--h3-track)!important;box-shadow:inset 0 0 0 1px var(--h3-track-line)!important;width:auto!important;max-width:none!important;min-width:0!important;overflow:visible!important;flex-wrap:nowrap!important;box-sizing:border-box;order:0!important;flex:none!important}'+
I+'>nav #nr2{display:contents!important}'+
B+'{order:0!important;flex:none!important;width:auto!important;max-width:none!important;min-width:0!important;height:var(--h3-tabh)!important;margin:0!important;padding:0 var(--h3-tabpx)!important;box-sizing:border-box!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;gap:var(--h3-tabgap)!important;border:0!important;border-radius:var(--h3-tabr)!important;background:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:none!important;color:var(--h3-mut)!important;font-size:var(--h3-ftab)!important;font-weight:400!important;letter-spacing:0!important;white-space:nowrap!important;overflow:hidden!important;position:relative!important;transform:none!important;transition:background .15s,color .15s}'+
B+':hover{background:var(--h3-tab-hover)!important;color:var(--h3-ink)!important}'+
B+'.on{background:var(--h3-active-bg)!important;color:var(--h3-gold2)!important;box-shadow:inset 0 0 0 1px var(--h3-active-line)!important;font-weight:600!important}'+
B+' .ico{display:inline-flex!important;order:0!important;width:auto!important;position:static!important;margin:0!important;flex:none}'+B+' .ico svg{display:block!important;width:var(--h3-tabico)!important;height:var(--h3-tabico)!important}'+
B+' .lb{display:inline!important;order:0!important;min-width:0;flex:0 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:normal;overflow-wrap:normal;hyphens:none}'+
B+' .qb{display:inline-block!important;position:static!important;order:0!important;flex:none;width:var(--h3-qb)!important;height:var(--h3-qb)!important;margin:0!important;border-radius:50%!important;background:var(--h3-warn)!important;color:var(--h3-warn-ink)!important;font-size:var(--h3-fqb)!important;font-weight:800!important;line-height:var(--h3-qb)!important;text-align:center;box-shadow:none!important;letter-spacing:0!important}'+
B+' .badge{display:inline-block;position:static!important;order:0!important;flex:none;margin:0!important;min-width:var(--h3-bmin);height:auto!important;box-sizing:border-box;padding:var(--h3-bpad)!important;border-radius:999px!important;font-size:var(--h3-fbd)!important;font-weight:600!important;line-height:1.35!important;letter-spacing:0!important;font-variant-numeric:tabular-nums;text-align:center;background:var(--h3-badge-bg)!important;color:var(--h3-badge-ink)!important;top:auto!important;right:auto!important}'+
B+'.on .badge{background:var(--h3-badge-active-bg)!important;color:var(--h3-badge-active-ink)!important}'+
/* действия: две кнопки напротив двух рядов вкладок */
A+'{grid-area:act;display:grid;grid-template-rows:var(--h3-tabh) var(--h3-tabh);gap:var(--h3-navgap);padding:var(--h3-navpad) 0}'+
A+'>#rfb,'+A+'>#urb{position:relative!important;inset:auto!important;top:auto!important;right:auto!important;transform:none;width:var(--h3-actw)!important;min-width:0!important;height:var(--h3-acth)!important;margin:0!important;padding:0 var(--h3-actpx)!important;box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:var(--h3-actgap)!important;border:0!important;border-radius:var(--h3-tabr)!important;font-family:inherit!important;font-size:var(--h3-fact)!important;font-weight:600!important;line-height:1!important;white-space:nowrap!important;overflow:visible!important;z-index:auto!important;cursor:pointer;opacity:1}'+
A+'>#rfb{background:var(--h3-gold)!important;color:var(--h3-gold-ink)!important;box-shadow:none!important}'+A+'>#rfb:hover{filter:brightness(1.08)}'+
A+'>#urb{background:var(--h3-btn2-bg)!important;box-shadow:inset 0 0 0 1px var(--h3-btn2-line)!important;color:var(--h3-ink)!important}'+A+'>#urb:hover{color:var(--h3-gold2)!important}'+
A+'>#urb.on{background:var(--h3-active-bg)!important;box-shadow:inset 0 0 0 1px var(--h3-active-line)!important;color:var(--h3-gold2)!important}'+
A+' #rfb .rl{position:static!important;width:auto!important;height:auto!important;overflow:visible!important;clip:auto!important;color:inherit}'+
A+' #rfb .ri,'+A+' #urb .ico svg{width:var(--h3-icon)!important;height:var(--h3-icon)!important;display:block!important;flex:none}'+A+' #urb .ico{display:inline-flex!important;width:auto!important;position:static!important}'+
A+' #urb .lb{display:inline!important}'+A+' #urb .badge:not(.wq){display:none!important}'+
A+' #urb .badge.wq{position:absolute!important;top:-5px;right:-5px;margin:0!important}'+
A+'>[data-tip]:hover::after{content:attr(data-tip);position:absolute;top:calc(100% + 6px);right:0;padding:5px 9px;border-radius:7px;background:var(--h3-menu-bg);color:var(--h3-ink);font-size:var(--h3-ftip);font-weight:500;white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.3);pointer-events:none;display:none;z-index:20}'+
/* строка статуса — одна */
I+' .h3t{grid-area:st;min-width:0;padding-left:var(--h3-navpad)}'+
I+' #msum{display:block!important;position:static!important;width:auto!important;max-width:none!important;margin:0!important;padding:0!important;border:0!important;background:none!important;cursor:default!important;text-align:left!important;font-family:inherit!important;font-size:var(--h3-fst)!important;line-height:16px!important;color:var(--h3-mut)!important;white-space:normal!important;overflow:visible!important;text-overflow:clip!important;font-variant-numeric:tabular-nums}'+
I+' #msum .ml{display:flex!important;flex-wrap:wrap;align-items:center;row-gap:2px;overflow-wrap:normal}'+
I+' #msum .h3i{white-space:nowrap}'+I+' #msum b{font-weight:600;color:var(--h3-ink)}'+I+' #msum .h3s{font-style:normal;color:var(--h3-faint);white-space:pre}'+
I+' #msum .h3d{display:block;width:var(--h3-dot);height:var(--h3-dot);border-radius:50%;background:var(--h3-live);margin-right:var(--h3-dotgap);flex:none}'+I+' #msum.h3old .h3d{background:var(--h3-stale)}'+
/* рабочее поле разделов — те же max-width и боковые отступы, что у шапки */
(H.page_sel?H.page_sel.split(',').map(function(s){return 'html body '+s.trim()}).join(',')+'{max-width:var(--h3-maxw)!important;margin-left:auto!important;margin-right:auto!important;padding-left:var(--h3-padx)!important;padding-right:var(--h3-padx)!important;box-sizing:border-box!important}':'')+
(H.page_inner_sel?H.page_inner_sel.split(',').filter(function(s){return !/^#vreg/.test(s.trim())}).map(function(s){return 'html body '+s.trim()}).join(',')+'{padding-left:0!important;padding-right:0!important;max-width:none!important}':'')+
'html body #othbar .h3inf{display:inline-flex;align-items:center;gap:6px;padding:6px 4px;font-size:13px;color:var(--mut)}html body #othbar .h3inf b{font-weight:600;color:var(--ink)}'+
/* адаптив */
'@media(max-width:'+H.bp_compact+'px){'+I+'{grid-template-columns:auto minmax(0,1fr) auto}'+I+' .h3b .brand-s,'+I+' .h3b small,'+I+' .h3b .brand-n{display:none!important}'+I+' .h3b .h3sn{display:block}'+I+' .h3b .hb>img{width:var(--h3-logoc)!important}'+
 A+'>#rfb,'+A+'>#urb{width:var(--h3-ibtn)!important;height:var(--h3-ibtn)!important;padding:0!important}'+A+' #rfb .rl,'+A+' #urb .lb{display:none!important}'+A+'>[data-tip]:hover::after{display:var(--h3-tipd,none)}}@media(hover:hover){:root{--h3-tipd:block}}'+
'@media(max-width:'+H.bp_narrow+'px){'+I+'{grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"brand act" "nav nav" "st st"}'+I+'>nav{grid-template-columns:repeat(var(--h3-colsn),minmax(0,1fr))!important}'+A+'{grid-template-rows:none;grid-auto-flow:column;padding:0}}'+
'@media(max-width:'+H.bp_phone+'px){'+B+' .ico{display:none!important}'+B+'{padding:0 var(--h3-tabpxp)!important;gap:var(--h3-tabgapp)!important}}';
var st=document.createElement('style');st.id='h3css';st.textContent=css;document.head.appendChild(st);
/* каркас */
hd.classList.add('h3');hd.classList.remove('hg','mx');
var W=document.createElement('div');W.id='h3in';W.className='in';W.innerHTML='<div class="h3b"></div><div class="h3a"></div><div class="h3t"></div>';hd.insertBefore(W,hd.firstChild);
var Bx=W.querySelector('.h3b'),Ax=W.querySelector('.h3a'),Sx=W.querySelector('.h3t');
var HI=H.hints||{};
function tip(e,t){if(!e||!t)return;e.setAttribute('data-tip',t);e.title=t}
function place(){var hb=hd.querySelector('.hb'),th=$('thm'),r=$('rfb'),u=$('urb'),sm=$('msum');
 if(hd.classList.contains('hg'))hd.classList.remove('hg');
 if(hb&&hb.parentNode!==Bx)Bx.insertBefore(hb,Bx.firstChild);
 if(hb){var bt=hb.querySelector('.bt');if(bt&&!bt.querySelector('.h3sn')){var s=document.createElement('span');s.className='h3sn';s.textContent=H.brand_short||'';bt.appendChild(s)}}
 if(th&&th.parentNode!==Bx)Bx.appendChild(th);
 if(nav.parentNode!==W||nav.previousElementSibling!==Bx)W.insertBefore(nav,Ax);
 if(r&&r.parentNode!==Ax)Ax.insertBefore(r,Ax.firstChild);
 if(u&&u.parentNode!==Ax)Ax.appendChild(u);
 if(r&&r.getAttribute('data-tip')!==HI.refresh)tip(r,HI.refresh);if(u&&u.getAttribute('data-tip')!==HI.more)tip(u,HI.more);
 if(u){['width','height','borderRadius','border','background','color','boxShadow','padding','fontSize','right','top'].forEach(function(k){if(u.style[k])u.style[k]=''});var lb=u.querySelector('.lb');if(lb&&lb.style.display)lb.style.display=''}
 var hbb=hd.querySelector('.hb');if(hbb&&hbb.style.minHeight)hbb.style.minHeight='';
 if(sm){if(sm.parentNode!==Sx)Sx.appendChild(sm);if(sm.onclick)sm.onclick=null;if(sm.title)sm.removeAttribute('title');sm.tabIndex=-1;var sc=$('schl');sm.classList.toggle('h3old',!!(sc&&sc.classList.contains('st')))}
 info()}
/* источник данных и состояние ключа — пунктами в «Прочее» (без самого ключа) */
function G(n){try{return (0,eval)(n)}catch(e){return undefined}}
function info(){var bar=$('othbar'),M=H.more_info||{};if(!bar)return;var x=bar.querySelector('.h3infw');if(!x){x=document.createElement('span');x.className='h3infw';x.style.display='contents';bar.insertBefore(x,bar.firstChild)}
 var src=G('SRC')||M.src_none||'',tk=!!G('TOKEN'),E=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
 var h='<span class="h3inf">'+E(M.src_label||'')+': <b>'+E(src)+'</b></span><span class="h3inf">'+E(M.key_label||'')+': <b>'+E(tk?M.key_on:M.key_off)+'</b></span>';if(x.__h!==h){x.__h=h;x.innerHTML=h}}
place();setTimeout(place,0);setTimeout(place,500);setTimeout(place,1600);setInterval(place,1000);addEventListener('resize',place);
})();
