/* Тексты интерфейса Эверест (правьте здесь, не в коде) */
window.EV_TEXTS={
 move_notice:{text:'Раздел скоро переедет в приложение Arbitr и исчезнет отсюда',link_text:'Открыть Arbitr',url:'https://makc178.github.io/arbitr-app/',views:['vprc','vfin']}
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
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
var hd=document.querySelector('header'),m=$('meta'),sum=document.createElement('button');sum.type='button';sum.id='msum';sum.title='Подробнее о данных';
if(hd&&m){hd.insertBefore(m,hd.firstChild);hd.insertBefore(sum,hd.firstChild);sum.onclick=function(){hd.classList.toggle('mx')}}
function plural(n){var a=n%10,b=n%100;return a==1&&b!=11?'лот':a>=2&&a<=4&&(b<12||b>14)?'лота':'лотов'}
function bdg(v,id){var b=nav.querySelector('button[data-v="'+v+'"]');if(!b)return null;var e=$(id);if(!e){e=document.createElement('span');e.className='badge';e.id=id;e.textContent='0';b.appendChild(e)}return e}
function cls(){var r1=[];[].forEach.call(nav.children,function(b){var v=b.dataset&&b.dataset.v,i=R1.indexOf(v);b.classList.toggle('r1',i>=0);b.classList.toggle('r2',i<0&&b.id!=='oth');b.classList.remove('f','l');if(i>=0){b.style.order=1;r1[i]=b}else b.style.order=''});var v=r1.filter(Boolean);if(v.length){v.forEach(function(b,i){b.style.order=1+i/10});v[0].classList.add('f');v[v.length-1].classList.add('l')}}
function fs(){var b=document.querySelector('#favseg button[data-s=prop]');if(b&&b.firstChild&&b.firstChild.nodeType==3&&/Имущество/.test(b.firstChild.textContent))b.firstChild.textContent='Торги '}
function G(n){try{return (0,eval)(n)}catch(e){return undefined}}
function cnt(){try{var D=G('DATA'),P=G('PROP'),r=bdg('reg','regn'),p=bdg('prop','propn'),n=D&&D.lots?D.lots.length:null;
 if(r)r.textContent=n==null?'0':n;
 if(p)p.textContent=P&&P.lots?(P.lots.length-G('pMissL')().length):'0';
 if(m&&n!=null){[].forEach.call(m.querySelectorAll('.mc'),function(x){if(/^лотов: /.test(x.textContent)){var t='лотов: '+n;if(x.textContent!==t)x.textContent=t}})}
 var dt=D&&(D.data_date||D.generated_at),dd=G('dd'),tk=G('TOKEN'),src=G('SRC')||'',L=[];
 if(dt){var d=new Date(dt);L.push(isNaN(d)?String(dt):('0'+d.getDate()).slice(-2)+'.'+('0'+(d.getMonth()+1)).slice(-2))}
 if(n!=null)L.push(n.toLocaleString('ru-RU')+' '+plural(n));if(src)L.push(src);if(tk)L.push('🔑');
 if(G('LOADING'))L.push('обновление…');if(G('LERR'))L.push('⚠ не удалось обновить');
 var t=L.join(' · ')||'нет данных';if(sum.textContent!==t)sum.textContent=t}catch(e){}}
function pf(){document.documentElement.classList.toggle('pfm',!!window.PFM)}
function hp(){var h=document.querySelector('header');if(h)document.documentElement.style.setProperty('--hpr',getComputedStyle(h).paddingRight)}
addEventListener('resize',hp);
function all(){pf();hp();cls();fs();cnt()}
document.addEventListener('click',function(){setTimeout(pf,0)},true);
['render','propRender','setData','favUI'].forEach(function(f){try{var o=(0,eval)(f);if(typeof o!='function')return;window['__n2o_'+f]=o;(0,eval)(f+'=function(){var r=window.__n2o_'+f+'.apply(this,arguments);try{window.__n2all()}catch(e){}return r}')}catch(e){}});
window.__n2all=all;all();setInterval(cnt,3000);
new MutationObserver(function(){cls();fs()}).observe(nav,{childList:true});
})();
(function(){var T=(window.EV_TEXTS||{}).move_notice;if(!T)return;var st=document.createElement('style');st.textContent='.mvn{margin:0 0 12px;padding:10px 14px;border-radius:6px;background:#C0392B;color:#fff;font-size:15px;font-weight:600;line-height:1.4}.mvn a{color:#fff;text-decoration:underline;font-weight:600;margin-left:6px;white-space:nowrap}';document.head.appendChild(st);
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
(T.views||[]).forEach(function(id){var v=document.getElementById(id);if(!v||v.querySelector('.mvn'))return;var d=document.createElement('div');d.className='mvn';d.setAttribute('role','alert');d.innerHTML=esc(T.text)+(T.url?' <a href="'+esc(T.url)+'" target="_blank" rel="noopener">'+esc(T.link_text||T.url)+' →</a>':'');v.insertBefore(d,v.firstChild)})})();
