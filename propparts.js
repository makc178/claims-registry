/* «Торги»: база по регионам (решение пользователя 21.10.2026, вариант 3). Список частей — только из манифеста АПТ (config/prop_parts.json → manifest).
   Порядок: часть выбранного в фильтре региона → последняя выбранная пользователем → first_keys → остальные (unknown_keys/last_keys — в конце), остальные — в фоне.
   Каждая часть: sha256 и число лотов сверяются с манифестом; не совпало — часть не показывается, в полосе прогресса «Не загрузилось … · Повторить».
   Нет манифеста / неверный / ни одна часть не загрузилась — прежняя загрузка одним property.json. Кэш — тот же зашифрованный claims:prop (ldb.js), с отметкой частей _parts. */
(function(){
var C={"enabled":true,"manifest":"property_index.json","file_re":"^[A-Za-z0-9_.-]+\\.json$","verify_sha":true,"verify_count":true,"concurrency":1,"first_keys":[],"last_keys":["unknown"],"unknown_keys":["unknown"],"ls_last":"cr.ppart","ls_map":"cr.ppartmap","done_ms":2500,"texts":{"unknown_region":"Регион не определён","progress":"Загружаем регионы: {done} из {parts} · лотов {lots} из {total}","progress_now":"сейчас: {region}","done":"Все регионы загружены · лотов {lots}","part_err":"Не загрузилось: {regions}","retry":"Повторить","err_sha":"файл повреждён или изменился при загрузке (контрольная сумма не совпала)","err_count":"в файле {got} лотов вместо {want}","err_json":"файл не читается"}};if(!C||C.enabled===false)return;
function G(n){try{return (0,eval)(n)}catch(e){return undefined}}
function SET(n,v){window.__evpp_v=v;try{(0,eval)(n+'=window.__evpp_v')}catch(e){}window.__evpp_v=undefined}
if(G('EMB'))return;var pl0=window.propLoad,ps0=window.propSet;if(typeof pl0!=='function'||typeof ps0!=='function')return;
var T=C.texts||{},UNK=C.unknown_keys||[],LAST=C.last_keys||[],FIRST=C.first_keys||[];
var ST={state:'idle',parts:[],first_ms:null,all_ms:null,reused:0,dups:0};
function lsg(k){try{return localStorage.getItem(k)}catch(e){return null}}function lss(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function fmt(s,o){return String(s||'').replace(/\{(\w+)\}/g,function(_,k){return o[k]!=null?o[k]:''})}
function nf(n){return Number(n||0).toLocaleString('ru-RU')}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function isUnk(k){return UNK.indexOf(String(k))>=0}
function pname(p){return isUnk(p.key)?(T.unknown_region||p.region):(p.region||p.key)}
async function sha(txt){var b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(txt));return Array.from(new Uint8Array(b),function(x){return ('0'+x.toString(16)).slice(-2)}).join('')}
function valid(m){if(!m||!Array.isArray(m.parts)||!m.parts.length)return false;var re=new RegExp(C.file_re||'^[A-Za-z0-9_.-]+\\.json$'),seen={};
 return m.parts.every(function(p){if(!p||p.key==null||seen[p.key]||typeof p.file!=='string'||!re.test(p.file)||!(p.count>=0))return false;seen[p.key]=1;return true})}
/* регион пользователя: выбранный в фильтре «Регион» (через выученное соответствие регион→часть) или последняя выбранная часть */
function pmap(){try{return JSON.parse(lsg(C.ls_map||'cr.ppartmap')||'{}')||{}}catch(e){return {}}}
function selRegions(){var e=document.getElementById('preg');if(!e)return [];if(e._ms&&e._ms.size)return Array.from(e._ms);return e.value?[e.value]:[]}
function selKeys(){var M=pmap(),K={};selRegions().forEach(function(r){if(M[r])K[M[r]]=1});ST.parts.forEach(function(p){if(selRegions().indexOf(p.region)>=0||selRegions().indexOf(pname(p))>=0)K[p.key]=1});return K}
function rank(p){var k=String(p.key),S=selKeys();if(S[k])return 0;if(lsg(C.ls_last||'cr.ppart')===k)return 1;var f=FIRST.indexOf(k);if(f>=0)return 2+f/1000;if(isUnk(k)||LAST.indexOf(k)>=0)return 9;return 5}
function order(P){return P.map(function(p,i){return [rank(p),i,p]}).sort(function(a,b){return a[0]-b[0]||a[1]-b[1]}).map(function(x){return x[2]})}
function remember(){var S=selKeys(),k=Object.keys(S);if(k.length===1)lss(C.ls_last||'cr.ppart',k[0])}
function learn(){var P=G('PROP');if(!P||!P.lots)return;var M=pmap(),n=0;P.lots.forEach(function(l){if(l._pk!=null&&l._r&&!isUnk(l._pk)&&M[l._r]!==l._pk){M[l._r]=String(l._pk);n++}});if(n)lss(C.ls_map||'cr.ppartmap',JSON.stringify(M))}
/* лоты части «регион не определён» (и лоты частей без распознанного региона) — подпись из конфига */
function lab(){var P=G('PROP');if(!P||!P.lots)return;var u=T.unknown_region,RU=window.REG_UNKNOWN,ch=0;if(!u)return;
 P.lots.forEach(function(l){if(l._pk==null)return;if(isUnk(l._pk)||!l._r||l._r===RU){if(l._r!==u){l._r=u;ch=1}}});if(ch)try{G('propOpts')()}catch(e){}}
window.propSet=function(j,src){var x=ps0.apply(this,arguments);try{lab()}catch(e){}return x};
/* полоса прогресса над списком «Торгов» */
var css='#ppbar{display:none;margin:6px 0 10px;padding:8px 12px;border-radius:10px;background:var(--soft,rgba(140,150,165,.14));font-size:13.5px;line-height:1.35}#ppbar.on{display:block}'+
 '#ppbar .pptx{display:flex;flex-wrap:wrap;gap:4px 10px;align-items:center}#ppbar .ppsub{opacity:.75;font-size:12.5px}#ppbar .pptr{height:4px;margin-top:6px;border-radius:2px;background:rgba(140,150,165,.25);overflow:hidden}'+
 '#ppbar .pptr i{display:block;height:100%;width:0;background:var(--gold,var(--acc,#D4AF5A));transition:width .3s}#ppbar.ok{background:#e3f3e6;color:#1d6b33}[data-theme=dark] #ppbar.ok{background:#1e3f2c;color:#c6f0d2}'+
 '#ppbar .pperr{color:#a1291d}[data-theme=dark] #ppbar .pperr{color:#ffb4aa}#ppbar button{font:inherit;font-size:13px;padding:3px 12px;border-radius:7px;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer;min-height:32px}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function bar(){var b=document.getElementById('ppbar');if(b)return b;var L=document.getElementById('pL');if(!L||!L.parentNode)return null;b=document.createElement('div');b.id='ppbar';b.setAttribute('role','status');b.setAttribute('aria-live','polite');L.parentNode.insertBefore(b,L);
 b.addEventListener('click',function(e){if(e.target&&e.target.id==='ppretry'){e.preventDefault();retry()}});return b}
var HT=null;
function ui(){var b=bar();if(!b)return;clearTimeout(HT);var P=ST.parts,n=P.length,done=P.filter(function(p){return p.state==='ok'}).length,err=P.filter(function(p){return p.state==='err'}),
 lots=P.reduce(function(s,p){return s+(p.state==='ok'?p.count:0)},0),now=P.filter(function(p){return p.state==='load'});
 if(ST.state==='idle'||ST.state==='fallback'||!n){b.className='';b.innerHTML='';return}
 var h='',w=ST.total?Math.round(lots/ST.total*100):Math.round(done/n*100);
 if(ST.state==='loading'){h='<div class="pptx"><span>'+esc(fmt(T.progress,{done:done,parts:n,lots:nf(lots),total:nf(ST.total)}))+'</span>'+(now.length?'<span class="ppsub">'+esc(fmt(T.progress_now,{region:now.map(pname).join(', ')}))+'</span>':'')+'</div><div class="pptr" aria-hidden="true"><i style="width:'+w+'%"></i></div>';b.className='on'}
 else if(!err.length){h='<div class="pptx"><span>'+esc(fmt(T.done,{lots:nf(lots)}))+'</span></div>';b.className='on ok';HT=setTimeout(function(){if(ST.state==='done'){b.className='';b.innerHTML=''}},C.done_ms||2500)}
 else b.className='on';
 if(err.length&&ST.state!=='loading')h='<div class="pptx"><span>'+esc(fmt(T.progress,{done:done,parts:n,lots:nf(lots),total:nf(ST.total)}))+'</span></div>';
 if(err.length)h+='<div class="pptx pperr"><span>'+esc(fmt(T.part_err,{regions:err.map(pname).join(', ')}))+'</span>'+(ST.state!=='loading'?'<button type="button" id="ppretry">'+esc(T.retry)+'</button>':'')+'</div>';
 b.innerHTML=h;b.title=err.map(function(p){return pname(p)+': '+p.err}).join('\n')}
/* сборка общей базы из загруженных частей: порядок манифеста, «не определён» — последним, дубли id — первая часть */
var GOT={},MAN=null;
function merged(){var out=[],seen={},P=MAN.parts.slice().sort(function(a,b){return (isUnk(a.key)?1:0)-(isUnk(b.key)?1:0)});ST.dups=0;
 P.forEach(function(p){var L=GOT[p.key];if(!L)return;L.forEach(function(l){var id=String(l.id);if(seen[id]){ST.dups++;return}seen[id]=1;out.push(l)})});return out}
function publish(src){var lots=merged(),p0=MAN.parts.find(function(p){return p.data_date});
 var j={data_date:MAN.data_date||(p0&&p0.data_date)||(MAN.generated||'').slice(0,10),generated:MAN.property_generated||MAN.generated,lots:lots,
  _parts:ST.parts.filter(function(p){return GOT[p.key]}).map(function(p){return {key:p.key,sha256:p.sha256,count:p.count}})};
 window.propSet(j,src||'GitHub');learn();try{G('propRender')()}catch(e){}return j}
async function one(p){p.state='load';p.err='';ui();var t=performance.now();
 try{var txt=await G('gh')(p.file);p.kb=Math.round(txt.length/1024);
  if(C.verify_sha!==false&&p.sha256&&(await sha(txt))!==String(p.sha256).toLowerCase())throw new Error(T.err_sha||'sha256');
  var j;try{j=JSON.parse(txt)}catch(e){throw new Error(T.err_json||'json')}var L=Array.isArray(j)?j:(j&&(j.lots||j.items))||[];
  if(C.verify_count!==false&&(L.length!==p.count||(j&&j.count!=null&&j.count!==L.length)))throw new Error(fmt(T.err_count,{got:L.length,want:p.count}));
  L.forEach(function(l){l._pk=String(p.key)});GOT[p.key]=L;p.state='ok';p.ms=Math.round(performance.now()-t)}
 catch(e){p.state='err';p.err=String(e&&e.message||e)}}
var RUN=null;
async function run(force){
 var t0=performance.now();ST.state='loading';ST.first_ms=null;ST.all_ms=null;ST.manifest_err=null;
 try{var m=null;try{m=JSON.parse(await G('gh')(C.manifest||'property_index.json'))}catch(e){ST.manifest_err=String(e&&e.message||e)}
  if(!valid(m)){ST.state='fallback';ST.parts=[];ui();SET('PLD',null);return pl0(force)}
  MAN=m;ST.total=m.total||m.parts.reduce(function(s,p){return s+p.count},0);
  var old={};(ST.parts||[]).forEach(function(p){old[p.key]=p});
  ST.parts=m.parts.map(function(p){return {key:String(p.key),file:p.file,region:p.region,count:p.count,sha256:p.sha256,state:'wait'}});
  /* части с тем же sha256, что в кэше устройства (или уже загруженные), повторно не качаются */
  var NG={},cj=null;try{cj=await G('CACHE').get('claims:prop')}catch(e){}
  var cp={};((cj&&cj._parts)||[]).forEach(function(x){cp[x.key]=x.sha256});
  ST.reused=0;ST.parts.forEach(function(p){var o=old[p.key];if(GOT[p.key]&&o&&o.state==='ok'&&o.sha256===p.sha256){NG[p.key]=GOT[p.key];p.state='ok';ST.reused++}
   else if(cj&&cp[p.key]&&cp[p.key]===p.sha256){var L=(cj.lots||[]).filter(function(l){return String(l._pk)===p.key});if(L.length===p.count){NG[p.key]=L;p.state='ok';ST.reused++}}});
  GOT=NG;if(ST.reused)publish('GitHub');
  var Q=ST.parts.filter(function(p){return p.state!=='ok'});ui();
  async function worker(){while(Q.length){var nx=order(Q)[0];Q.splice(Q.indexOf(nx),1);await one(nx);if(nx.state==='ok'){publish('GitHub');if(ST.first_ms==null)ST.first_ms=Math.round(performance.now()-t0)}ui()}}
  if(Q.length){var nx=order(Q)[0];Q.splice(Q.indexOf(nx),1);await one(nx);if(nx.state==='ok'){publish('GitHub');ST.first_ms=Math.round(performance.now()-t0)}ui();
   var W=[];for(var i=0;i<Math.max(1,C.concurrency||1);i++)W.push(worker());await Promise.all(W)}
  var okN=ST.parts.filter(function(p){return p.state==='ok'}).length;
  if(!okN){ST.state='fallback';ui();SET('PLD',null);return pl0(force)}
  ST.state=ST.parts.some(function(p){return p.state==='err'})?'partial':'done';ST.all_ms=Math.round(performance.now()-t0);
  var j=publish('GitHub');SET('PLT',Date.now());SET('PROPSRC','GitHub');window.PLERR=ST.state==='partial'?'части: '+ST.parts.filter(function(p){return p.state==='err'}).map(pname).join(', '):null;
  try{G('CACHE').set('claims:prop',j)}catch(e){}ui()}
 finally{RUN=null;SET('PLD',null);try{G('propRender')()}catch(e){}}}
/* первая часть — одна, остальные — в фоне по C.concurrency */
function start(force){if(RUN)return RUN;RUN=run(force);SET('PLD',RUN);return RUN}
function retry(){var T0=G('TOKEN');if(!T0)return;return start(true)}
window.propLoad=async function(force){
 if(G('EMB'))return pl0.apply(this,arguments);
 if(!G('PROP')){try{var c=await G('CACHE').get('claims:prop');if(c&&!G('PROP'))window.propSet(c,'кэш')}catch(e){}}
 try{G('propRender')()}catch(e){}ui();
 var R=G('REPO');if(!(G('TOKEN')&&R&&!String(R).startsWith('/*')))return;
 if(RUN)return RUN;var PL=G('PLD');if(PL)return PL;var PLT=G('PLT'),PT=G('PTTL');if(!force&&PLT&&Date.now()-PLT<PT)return;
 return start(force)};
document.addEventListener('change',function(e){if(e.target&&e.target.id==='preg')remember()},true);
document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('#preg,[data-ms="preg"]'))setTimeout(remember,0)},true);
window.EVPP={stat:function(){return JSON.parse(JSON.stringify(ST))},order:function(){return order(ST.parts).map(function(p){return p.key})},retry:retry,cfg:C};
})();
