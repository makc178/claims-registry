/* Тексты интерфейса Эверест (правьте здесь, не в коде) */
window.EV_TEXTS={
 move_notice:{text:'Раздел скоро переедет в приложение Arbitr и исчезнет отсюда',link_text:'Открыть Arbitr',url:'https://makc178.github.io/arbitr-app/',views:['vprc','vfin']}
};

/* Цвета и размеры интерфейса Эверест (правьте здесь) */
window.EV_UI={
 star_size:'24px', star_hit:'44px', star_off:'rgba(255,255,255,.55)', star_on:'#D9B86A',
 sum_reg:'Реестры', sum_torgi:'Торги', sum_total:'Всего',
 cnt_abbr_maxw:380, cnt_abbr_from:1000, cnt_abbr_suffix:'к', cnt_abbr_decimal:',', cnt_longpress_ms:500, r1_gap_narrow:'3px', r1_pad_narrow:'2px', r1_icons_narrow:false,
 sel_bg:'rgba(217,184,106,.22)', sel_border:'rgba(217,184,106,.5)', sel_text:'#D9B86A',
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
css+=':root{--ev-star:'+(U.star_size||'24px')+';--ev-star-hit:'+(U.star_hit||'44px')+';--ev-star-off:'+(U.star_off||'rgba(255,255,255,.55)')+';--ev-star-on:'+(U.star_on||'#D9B86A')+';--ev-vreq:'+(U.vreq_bg||'#C0392B')+';--ev-vreq-p:'+(U.vreq_bg_pressed||'#A93226')+';--ev-vreq-t:'+(U.vreq_text||'#fff')+';--ev-vreq-b:'+(U.vreq_border||'rgba(255,255,255,.2)')+'}'+
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
var kst=document.createElement('style');kst.textContent='nav button{-webkit-tap-highlight-color:transparent}html body nav>button.r1.on,html body nav #nr2>button.on{background:'+(U.sel_bg||'rgba(217,184,106,.22)')+'!important;border-color:'+(U.sel_border||'rgba(217,184,106,.5)')+'!important;color:'+(U.sel_text||'#D9B86A')+'!important;z-index:1}html body nav>button.r1.on .badge,html body nav #nr2>button.on .badge{background:rgba(217,184,106,.25)!important;color:inherit!important}html body nav>button.r1:active,html body nav #nr2>button:active{filter:brightness(.8);transition:filter 100ms}html body nav #nr2,html body nav #nr2.on,html body nav #nr2:active{background:none!important;filter:none!important;border:0!important}@media(max-width:'+KC.maxw+'px){'+(U.r1_icons_narrow===false?'html body nav>button.r1 .ico svg{display:none!important}':'')+'}.lbtn .rpic{width:16px;height:16px;flex:none;vertical-align:-4px;margin-right:6px}.lbtn:has(.rpic){display:inline-flex;align-items:center}#kpop{position:fixed;z-index:9999;display:none;padding:4px 10px;border-radius:8px;background:#0F1B33;color:#fff;font-size:13px;font-weight:600;border:1px solid #ffffff40;box-shadow:0 4px 12px rgba(0,0,0,.35);pointer-events:none;white-space:nowrap}.evtot{display:none;font-size:13px;color:#9aa6b8;margin:0 0 8px}@media(max-width:'+KC.maxw+'px){.evtot.kab{display:block}html body nav>button.r1{font-size:13px!important;letter-spacing:0!important;gap:'+(U.r1_gap_narrow||'6px')+'!important;padding:0 '+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1.q{padding-left:'+(U.r1_pad_narrow||'4px')+'!important}html body nav>button.r1 .badge{font-size:10px!important;padding:0 4px!important;letter-spacing:0!important;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}}';document.head.appendChild(kst);
function cnt(){try{var D=G('DATA'),P=G('PROP'),r=bdg('reg','regn'),p=bdg('prop','propn'),n=D&&D.lots?D.lots.length:null;
 var pn=P&&P.lots?(P.lots.length-G('pMissL')().length):0;
 if(r)setB(r,n==null?0:n,'vreg','Реестр');if(p)setB(p,pn,'vprop','Торги');
 if(m&&n!=null){[].forEach.call(m.querySelectorAll('.mc'),function(x){if(/^лотов: /.test(x.textContent)){var t='лотов: '+n;if(x.textContent!==t)x.textContent=t}})}
 var dt=D&&(D.data_date||D.generated_at),dd=G('dd'),tk=G('TOKEN'),src=G('SRC')||'',L=[];
 if(dt){var d=new Date(dt);L.push(isNaN(d)?String(dt):('0'+d.getDate()).slice(-2)+'.'+('0'+(d.getMonth()+1)).slice(-2))}
 var tg=P&&P.lots?P.lots.length:null;if(n!=null)L.push((U.sum_reg||'Реестры')+': '+n.toLocaleString('ru-RU'));if(tg!=null)L.push((U.sum_torgi||'Торги')+': '+tg.toLocaleString('ru-RU'));if(n!=null||tg!=null)L.push((U.sum_total||'Всего')+': '+((n||0)+(tg||0)).toLocaleString('ru-RU'));if(src)L.push(src);if(tk)L.push('🔑');
 if(G('LOADING'))L.push('обновление…');if(G('LERR'))L.push('⚠ не удалось обновить');
 var t=L.join(' · ')||'нет данных';if(sum.textContent!==t)sum.textContent=t}catch(e){}}
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
