/* Локальная база Эвереста: зашифрованный кэш в IndexedDB (ключ из PIN), условная загрузка по ETag, офлайн. */
(function(){
if(typeof EMB!=='undefined'&&EMB)return;if(typeof CACHE==='undefined'||!window.crypto||!crypto.subtle)return;
var ENC={'claims:data':1,'claims:prop':1,'claims:mr':1,'claims:mrst':1},COND={'lots.json':1,'property.json':1},
DK=['claims:data','claims:prop','claims:mr','claims:mrst','ldb:etag','ldb:meta'],G=function(n){try{return (0,eval)(n)}catch(e){return undefined}},
K=null,KK='',S={hits:0,n304:0,n200:0,dec_ms:0},ET={},TE=new TextEncoder(),TD=new TextDecoder(),cg=CACHE.get,cs=CACHE.set;
function lsg(k){try{return localStorage.getItem(k)}catch(e){return null}}function lss(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function salt(){var s=lsg('cr.ldbsalt');if(!s){var a=crypto.getRandomValues(new Uint8Array(16));s=Array.from(a,function(x){return ('0'+x.toString(16)).slice(-2)}).join('');lss('cr.ldbsalt',s)}return TE.encode(s)}
function kPin(pin){return crypto.subtle.importKey('raw',TE.encode('ldb:'+pin),'PBKDF2',false,['deriveKey']).then(function(b){return crypto.subtle.deriveKey({name:'PBKDF2',salt:salt(),iterations:120000,hash:'SHA-256'},b,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])})}
function kTok(){var t=G('TOKEN');if(!t)return Promise.resolve(null);return crypto.subtle.digest('SHA-256',TE.encode('ldb:'+t+lsg('cr.ldbsalt'))).then(function(h){return crypto.subtle.importKey('raw',h,'AES-GCM',false,['encrypt','decrypt'])})}
function key(){if(K)return K;if(!G('TOKEN'))return Promise.resolve(null);salt();KK='t';return (K=kTok())}
/* PIN: перехватываем проверку, из того же PIN выводим ключ локальной базы */
var up=window.unpin;if(typeof up==='function'){window.unpin=function(pin){return up.apply(this,arguments).then(function(t){var pb=G('PINBLOB')||{};if(lsg('cr.pinbv')&&lsg('cr.pinbv')!==String(pb.bv||1))wipe();K=kPin(pin);KK='p';return t})}}
async function enc(v){var k=await key();if(!k)return null;var iv=crypto.getRandomValues(new Uint8Array(12));var ct=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},k,TE.encode(JSON.stringify(v)));return {e:1,k:KK,iv:iv,ct:ct,at:Date.now()}}
async function dec(r){var k=await key();if(!k||r.k!==KK)return null;var t=performance.now();try{var x=JSON.parse(TD.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:r.iv},k,r.ct)));S.dec_ms+=Math.round(performance.now()-t);S.hits++;return x}catch(e){return null}}
CACHE.get=async function(k){var r=await cg(k);if(!ENC[k]||r==null)return r;if(r&&r.e===1&&r.ct)return dec(r);/* старый открытый кэш → перешифровать */if(await key()){CACHE.set(k,r)}else return null;return r};
CACHE.set=async function(k,v){if(!ENC[k]||v==null)return cs(k,v);if(v&&v.__ldb304)return true;var r=await enc(v);if(!r)return cs(k,null);var ok=await cs(k,r);persist();return ok};
var PD=0;function persist(){if(PD)return;PD=1;try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(function(g){S.persisted=g}).catch(function(){})}catch(e){}}
cg('ldb:etag').then(function(e){if(e)ET=e});
function wipe(){ET={};DK.forEach(function(k){cs(k,null)})}
/* условная загрузка: если файл не изменился (304) — не качаем 7 МБ */
var gh0=window.gh;window.gh=async function(path){
 var have=path==='lots.json'?!!G('DATA'):path==='property.json'?!!G('PROP'):false;
 if(!COND[path])return gh0.apply(this,arguments);
 var t=G('clean')(G('TOKEN')),R=G('REPO'),B=G('BRANCH');if(!t)return gh0.apply(this,arguments);
 var h={Authorization:'Bearer '+t,Accept:'application/vnd.github.raw+json','X-GitHub-Api-Version':'2022-11-28'};if(have&&ET[path])h['If-None-Match']=ET[path];
 var r;try{r=await fetch('https://api.github.com/repos/'+R+'/contents/'+path+'?ref='+B,{headers:h,cache:'no-store'})}catch(e){off(1);return gh0.apply(this,arguments)}
 off(0);if(r.status===304&&have){S.n304++;CHK[path]=Date.now();return '{"__ldb304":"'+path+'"}'}
 if(!r.ok)return gh0.apply(this,arguments);var x=await r.text();S.n200++;var e=r.headers.get('etag');if(e){ET[path]=e;cs('ldb:etag',ET)}CHK[path]=Date.now();CHG[path]=have;return x};
var CHK={},CHG={};
var sd0=window.setData;window.setData=function(d,src){if(d&&d.__ldb304){SRC0('GitHub');try{G('opts')();G('render')()}catch(e){}stamp();return}var had=!!G('DATA')&&src==='GitHub'&&CHG['lots.json'];var x=sd0.apply(this,arguments);if(had){CHG['lots.json']=0;pill('Данные обновлены')}if(src==='GitHub')stamp();return x};
function SRC0(v){try{(0,eval)('SRC='+JSON.stringify(v))}catch(e){}}
var ps0=window.propSet;if(typeof ps0==='function')window.propSet=function(j,src){if(j&&j.__ldb304){try{(0,eval)('PROPSRC="GitHub"')}catch(e){}return}var had=!!G('PROP')&&src==='GitHub'&&CHG['property.json'];var x=ps0.apply(this,arguments);if(had){CHG['property.json']=0;pill('Данные обновлены');try{G('propRender')()}catch(e){}}return x};
/* реестр «Торги имущество» — сразу из локальной базы, не дожидаясь сети */
var sy0=window.sync;window.sync=function(){try{if(!G('PROP')&&G('PINOK')&&G('TOKEN')){var t=performance.now();CACHE.get('claims:prop').then(function(c){if(c&&!G('PROP')){G('propSet')(c,'кэш устройства');S.prop_cache_ms=Math.round(performance.now()-t);try{G('propRender')()}catch(e){}}})}}catch(e){}return sy0.apply(this,arguments)};
function stamp(){cs('ldb:meta',{checked:Date.now()})}
/* плашка */
var st=document.createElement('style');st.textContent='#ldbp{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;padding:6px 14px;border-radius:999px;font-size:13px;background:rgba(28,46,82,.92);color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.25);opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap}#ldbp.on{opacity:1}#ldbp.off{background:#6f5200}';document.head.appendChild(st);
var P=document.createElement('div');P.id='ldbp';P.setAttribute('role','status');P.setAttribute('aria-live','polite');document.body.appendChild(P);var pt;
function pill(t,cls,ms){P.textContent=t;P.className='on'+(cls?' '+cls:'');clearTimeout(pt);if(ms!==0)pt=setTimeout(function(){P.className=''},ms||2500)}
function ddt(){var D=G('DATA')||{},v=D.data_updated||D.data_date;if(!v)return '';var d=new Date(v);return isNaN(d)?String(v):d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'})}
var OFF=0;function off(v){if(v&&!OFF){OFF=1;setTimeout(function(){if(G('DATA'))pill('Нет сети · данные на '+ddt(),'off',6000)},300)}else if(!v)OFF=0}
window.addEventListener('offline',function(){off(1)});window.addEventListener('online',function(){OFF=0});
/* кнопка «Очистить локальную базу» в «Данных» */
var dlg=document.getElementById('dlg');if(dlg){var w=document.createElement('p');w.className='sm';w.innerHTML='<button type="button" class="btn" id="ldbclr">Очистить локальную базу</button> <span id="ldbinf"></span>';var cl=dlg.querySelector('#cls');(cl&&cl.parentNode===dlg?dlg.insertBefore(w,cl):dlg.appendChild(w));
 document.getElementById('ldbclr').onclick=async function(){if(!confirm('Удалить скачанную базу с этого устройства? Избранное и ключ останутся, база скачается заново.'))return;wipe();await new Promise(function(r){setTimeout(r,300)});location.reload()};
 var cf=document.getElementById('cfg');if(cf)cf.addEventListener('click',function(){cg('ldb:meta').then(function(m){var e=document.getElementById('ldbinf');if(e)e.textContent='База хранится на устройстве, зашифрована'+(m&&m.checked?'; проверена '+new Date(m.checked).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}):'')})})}
/* выход: «Удалить ключ» стирает и локальную базу */
var ds=document.getElementById('dis');if(ds&&ds.onclick){var d0=ds.onclick;ds.onclick=function(){var r=d0.apply(this,arguments);if(!G('TOKEN'))wipe();return r}}
/* офлайн-открытие приложения: service worker только для файлов приложения (данные в нём не хранятся) */
if('serviceWorker' in navigator&&location.protocol==='https:'){try{navigator.serviceWorker.register('sw.js').catch(function(){})}catch(e){}}
window.LDB={stat:function(){return Object.assign({},S,{key:KK})},wipe:wipe};
})();
