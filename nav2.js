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
 header_grid:{on:true, pad:16, col_gap:12, btn_min:112, btn_w:141, busy_keep_label:true, spinner_px:14, busy_opacity:0.6, btn_h:36, btn_gap:8, btn_radius:10, btn_px:14, date_px:12, date_color:'rgba(255,255,255,.62)', lots_px:13, lots_color:'rgba(255,255,255,.92)', thm_px:36, row_gap:10},
 sum_reg:'Реестры', sum_torgi:'Торги', sum_total:'Всего',
 cnt_abbr_maxw:380, cnt_abbr_from:1000, cnt_abbr_suffix:'к', cnt_abbr_decimal:',', cnt_longpress_ms:500, r1_gap_narrow:'3px', r1_pad_narrow:'2px', r1_icons_narrow:false,
 sel_bg:'rgba(212,175,90,.22)', sel_border:'rgba(212,175,90,.5)', sel_text:'#D4AF5A',
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
'nav #nr2>button:first-child{border-radius:10px 0 0 10px!important;margin-left:0!important}nav #nr2>button:last-child{border-radius:0 10px 10px 0!important}'+
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
var KC={maxw:+(U.cnt_abbr_maxw||380),from:+(U.cnt_abbr_from||1000),suf:U.cnt_abbr_suffix==null?'к':U.cnt_abbr_suffix,dec:U.cnt_abbr_decimal||',',lp:+(U.cnt_longpress_ms||500)};
function kfmt(n){n=+n||0;if(innerWidth>KC.maxw||n<KC.from)return String(n);var k=n/1000;if(k<10){var t=Math.floor(k*10)/10;return (t%1?t.toFixed(1).replace('.',KC.dec):String(t))+KC.suf}return Math.floor(k)+KC.suf}
function setB(e,n,vid,nm){var t=kfmt(n),full=(+n||0).toLocaleString('ru-RU');if(e.textContent!==t)e.textContent=t;e.dataset.full=full;e.title=full;e.classList.toggle('kab',t!==String(n));
 var v=$(vid);if(v){var h=v.querySelector(':scope>.evtot');if(!h){h=document.createElement('div');h.className='evtot';v.insertBefore(h,v.firstChild)}var s=nm+': '+full+' '+plural(+n||0);if(h.textContent!==s)h.textContent=s;h.classList.toggle('kab',t!==String(n))}
 if(!e.__lp)setLP(e)}
function setLP(e){{e.__lp=1;var tm,fired;e.addEventListener('pointerdown',function(){fired=0;clearTimeout(tm);tm=setTimeout(function(){fired=1;kpop(e)},KC.lp)});['pointerup','pointerleave','pointercancel'].forEach(function(x){e.addEventListener(x,function(){clearTimeout(tm)})});e.addEventListener('click',function(ev){if(fired){ev.stopPropagation();ev.preventDefault();fired=0}},true);e.addEventListener('contextmenu',function(ev){ev.preventDefault();kpop(e)})}}
function kpop(e){var o=$('kpop');if(!o){o=document.createElement('div');o.id='kpop';document.body.appendChild(o);document.addEventListener('pointerdown',function(ev){if(ev.target!==o&&!(ev.target.classList&&ev.target.classList.contains('badge')))o.style.display='none'},true)}
 o.textContent=e.dataset.full;o.style.display='block';var r=e.getBoundingClientRect(),w=o.offsetWidth;o.style.left=Math.max(4,Math.min(innerWidth-w-4,r.left+r.width/2-w/2))+'px';o.style.top=(r.bottom+6)+'px';clearTimeout(o.__t);o.__t=setTimeout(function(){o.style.display='none'},2500)}
function kall(){[].forEach.call(nav.querySelectorAll('button.r1 .badge'),function(e){if(e.id==='regn'||e.id==='propn')return;var t=e.textContent.trim(),raw=(e.dataset.sh&&t===e.dataset.sh)?e.dataset.raw:t;if(!/^\d+$/.test(raw))return;var f=kfmt(raw);e.dataset.raw=raw;e.dataset.sh=f;e.dataset.full=(+raw).toLocaleString('ru-RU');e.title=e.dataset.full;if(t!==f)e.textContent=f;if(!e.__lp)setLP(e)})}
var kmo=new MutationObserver(function(){kmo.disconnect();try{kall()}catch(x){}kmo.observe(nav,{subtree:true,childList:true,characterData:true})});kmo.observe(nav,{subtree:true,childList:true,characterData:true});
addEventListener('resize',function(){try{cnt();kall()}catch(e){}});
var kst=document.createElement('style');kst.textContent='nav button{-webkit-tap-highlight-color:transparent}html body nav>button.r1.on,html body nav #nr2>button.on{background:'+(U.sel_bg||'rgba(212,175,90,.22)')+'!important;border-color:'+(U.sel_border||'rgba(212,175,90,.5)')+'!important;color:'+(U.sel_text||U.gold||'#D4AF5A')+'!important;z-index:1}html body nav>button.r1.on .badge,html body nav #nr2>button.on .badge{background:rgba(212,175,90,.25)!important;color:inherit!important}html body nav>button.r1:active,html body nav #nr2>button:active{filter:brightness(.8);transition:filter 100ms}html body nav #nr2,html body nav #nr2.on,html body nav #nr2:active{background:none!important;filter:none!important;border:0!important}@media(max-width:'+KC.maxw+'px){'+(U.r1_icons_narrow===false?'html body nav>button.r1 .ico svg{display:none!important}':'')+'}.lbtn .rpic{width:16px;height:16px;flex:none;vertical-align:-4px;margin-right:6px}.lbtn:has(.rpic){display:inline-flex;align-items:center}#kpop{position:fixed;z-index:9999;display:none;padding:4px 10px;border-radius:8px;background:#0F1B33;color:#fff;font-size:13px;font-weight:600;border:1px solid #ffffff40;box-shadow:0 4px 12px rgba(0,0,0,.35);pointer-events:none;white-space:nowrap}.evtot{display:none;font-size:13px;color:#9aa6b8;margin:0 0 8px}@media(max-width:'+KC.maxw+'px){.evtot.kab{display:block}html body nav>button.r1{font-size:13px!important;letter-spacing:0!important;gap:'+(U.r1_gap_narrow||'6px')+'!important;padding:0 '+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1.q{padding-left:'+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1 .badge{font-size:10px!important;padding:0 4px!important;letter-spacing:0!important;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}}';document.head.appendChild(kst);
function cnt(){try{var D=G('DATA'),P=G('PROP'),r=bdg('reg','regn'),p=bdg('prop','propn'),n=D&&D.lots?D.lots.length:null;
 var pn=P&&P.lots?(P.lots.length-G('pMissL')().length):0;
 if(r)setB(r,n==null?0:n,'vreg','Реестр');if(p)setB(p,pn,'vprop','Торги');
 if(m&&n!=null){[].forEach.call(m.querySelectorAll('.mc'),function(x){if(/^лотов: /.test(x.textContent)){var t='лотов: '+n;if(x.textContent!==t)x.textContent=t}})}
 var tk=G('TOKEN'),src=G('SRC')||'',L1=[],L2=[],SC=U.update_schedule||{},lu=lastUpd(D,P);
 var SP=SC.label_sep==null?': ':SC.label_sep;L1.push((SC.label_last||'Обновлено')+SP+(lu?fmsk(lu):'—'));var nx=nextRun(SC);if(nx)L1.push((SC.label_next||'Следующее')+SP+fmsk(nx));
 if(src)L1.push(src);if(tk)L1.push('🔑');if(G('LOADING'))L1.push('обновление…');if(G('LERR'))L1.push('⚠ не удалось обновить');
 var tg=P&&P.lots?P.lots.length:null;if(n!=null)L2.push((U.sum_reg||'Реестры')+SP+n.toLocaleString('ru-RU'));if(tg!=null)L2.push((U.sum_torgi||'Торги')+SP+tg.toLocaleString('ru-RU'));if(n!=null||tg!=null)L2.push((U.sum_total||'Всего')+SP+((n||0)+(tg||0)).toLocaleString('ru-RU'));
 var E=function(a){return a.map(function(x){return '<span>'+String(x).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})+'</span>'}).join('<i> · </i>')},h='<span class="ml">'+E(L1)+'</span>'+(L2.length?'<span class="ml">'+E(L2)+'</span>':'');
 if(sum.__h!==h){sum.__h=h;sum.innerHTML=h}}catch(e){}}
/* метки времени (МСК) и следующее плановое обновление по cron из EV_UI.update_schedule */
function lastUpd(D,P){var c=[D&&D.data_updated,P&&P.generated].map(function(x){var d=x?new Date(x):null;return d&&!isNaN(d)?d:null}).filter(Boolean);if(!c.length&&D&&D.data_date){var d=new Date(D.data_date);if(!isNaN(d))c.push(d)}return c.length?new Date(Math.max.apply(null,c)):null}
function fmsk(d){var o=((U.update_schedule||{}).tz_offset_hours);o=o==null?3:+o;var z=new Date(d.getTime()+o*3600e3),p=function(x){return ('0'+x).slice(-2)};return p(z.getUTCDate())+'.'+p(z.getUTCMonth()+1)+', '+p(z.getUTCHours())+':'+p(z.getUTCMinutes())}
function nextRun(SC){var D=SC.days,T=String(SC.time||'').match(/^(\d{1,2}):(\d{2})$/);if(!D||!D.length||!T)return null;var off=SC.tz_offset_hours==null?3:+SC.tz_offset_hours,z=new Date(Date.now()+off*3600e3);
 for(var i=0;i<70;i++){var d=new Date(Date.UTC(z.getUTCFullYear(),z.getUTCMonth(),z.getUTCDate()+i,+T[1],+T[2]));if(D.indexOf(d.getUTCDate())>=0&&d.getTime()-off*3600e3>Date.now())return new Date(d.getTime()-off*3600e3)}return null}
function pf(){document.documentElement.classList.toggle('pfm',!!window.PFM)}
function hp(){var h=document.querySelector('header');if(h)document.documentElement.style.setProperty('--hpr',getComputedStyle(h).paddingRight)}
addEventListener('resize',hp);
function all(){pf();hp();cls();evNav();fs();cnt()}
document.addEventListener('click',function(){setTimeout(pf,0)},true);
['render','propRender','setData','favUI'].forEach(function(f){try{var o=(0,eval)(f);if(typeof o!='function')return;window['__n2o_'+f]=o;(0,eval)(f+'=function(){var r=window.__n2o_'+f+'.apply(this,arguments);try{window.__n2all()}catch(e){}return r}')}catch(e){}});
window.__n2all=all;all();setInterval(cnt,3000);
new MutationObserver(function(){cls();fs()}).observe(nav,{childList:true});
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
var HG=U.header_grid||{},HGO=!!HG.on,HGW=null;
function rp(){var b=document.getElementById('urb')||document.querySelector(SEL),r=document.getElementById('rfb');if(!b||!r)return;
 if(b.id!=='urb'){b.dataset.oid=b.id||'';b.id='urb';b.classList.remove('evx','r2');b.style.order='';(HGO&&hgrid()||hd).appendChild(b);b.addEventListener('click',function(){b.classList.add('on')});
  var nv=document.querySelector('nav');if(nv)nv.addEventListener('click',function(e){var x=e.target.closest('button');if(x&&x!==b)b.classList.remove('on')})}
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
 'html body header.hg #hgr #rfb .ri,html body header.hg #hgr #urb .ico svg{width:18px!important;height:18px!important;display:block!important}html body header.hg #hgr #urb .ico{display:inline-flex!important;width:auto!important;position:static!important}html body header.hg #hgr #urb .lb{display:inline!important}html body header.hg #hgr #urb .badge{display:none!important}'+
 'html body header.hg #hgr>#rfb,html body header.hg #hgr>#urb{width:100%!important;overflow:hidden}'+
 'html body header.hg #hgr #rfb .ri{flex:none;box-sizing:content-box}html body header.hg #hgr #rfb.busy .ri{width:'+(+(HG.spinner_px||14))+'px!important;height:'+(+(HG.spinner_px||14))+'px!important;padding:'+((18-(+(HG.spinner_px||14)))/2)+'px!important}'+
 'html body header.hg #hgr #rfb:disabled,html body header.hg #hgr #rfb[aria-busy=true]{opacity:'+(HG.busy_opacity==null?0.6:+HG.busy_opacity)+'!important;cursor:progress}'+
'html body header.hg #hrow{order:-2;flex:0 0 100%;width:100%;display:flex;align-items:center;gap:12px;min-width:0}'+
 'html body header.hg #hrow>.hb{flex:1 1 auto!important;min-width:0;justify-content:flex-start!important;min-height:0!important}'+
 'html body header.hg #hrow>#thm{display:inline-flex!important;position:static!important;flex:none;width:'+TP+'px!important;height:'+TP+'px!important;margin:0!important;border-radius:'+R+'px!important;align-items:center;justify-content:center}'+
 '@media(min-width:1024px){html body header.hg #hrow{flex:0 1 auto;width:auto}}';
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
