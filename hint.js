/* Настройки подсказок в карточках лотов (только подписи и ключевые слова, без данных).
   labels — подписи для ключей lot.legal_flags. aliases — старые ключи → новые. keywords — регулярные выражения
   для угадывания по тексту лота; пустой список = выключено. Если хотя бы у одного лота есть legal_flags,
   используются только они. */
var HINT_CFG={
 order:['license','preemptive_llc','coowner_dispute','agri_special','exclusion_check','challenge_risk'],
 labels:{
  license:'Требуется лицензия',
  preemptive_llc:'Преимущественное право участников ООО — есть по закону, если устав не изменил порядок',
  coowner_dispute:'Возможен спор о праве сособственников',
  exclusion_check:'Проверить исключение из конкурсной массы',
  challenge_risk:'Риск оспаривания',
  agri_special:'Сельхозземля или имущество сельхозорганизации: преимущественное право покупки у сельхозпроизводителей, владеющих участком, прилегающим к участку должника (ст. 179 Закона о банкротстве)'
 },
 aliases:{preemptive:'preemptive_llc'},
 keywords:{
  license:['(лицензи|разрешени)\\S*(\\s+\\([^)]{0,30}\\))?\\s+на\\s+(приобретение|хранение|ношение)','разрешени\\S*[^.]{0,40}оруж'],
  preemptive_llc:[],coowner_dispute:[],exclusion_check:[],challenge_risk:[],agri_special:[]
 }
};

/* подсказки в карточках лотов (ключи lot.legal_flags или ключевые слова; подписи и слова — в hint_config.js) и вид архивных карточек в «Избранном» */
function pHints(l){if(l._ph)return l._ph;const C=self.HINT_CFG||{order:[],labels:{},keywords:{}},LS=(typeof PROP!=='undefined'&&PROP&&PROP.lots)||[];if(pHints._L!==LS){pHints._L=LS;pHints._F=LS.some(x=>Array.isArray(x.legal_flags));pHints._R={};for(const k in C.keywords||{})pHints._R[k]=(C.keywords[k]||[]).map(r=>new RegExp(r,'i'))}let ks;if(pHints._F)ks=(Array.isArray(l.legal_flags)?l.legal_flags:[]).map(k=>(C.aliases||{})[k]||k);else{const t=[l.title,l.description].filter(Boolean).join(' ');ks=Object.keys(pHints._R).filter(k=>pHints._R[k].some(r=>r.test(t)))}const o=C.order||[];ks=[...new Set(ks)].filter(k=>C.labels[k]).sort((a,b)=>o.indexOf(a)-o.indexOf(b));return l._ph=ks.map(k=>C.labels[k])}
function pHint(l){const h=pHints(l);if(!h.length)return'';const op=typeof POPEN!=='undefined'&&POPEN===String(l.id);return op?'<div class="phint pfull"><span class="phi">ⓘ</span><div>'+h.map(x=>'<div>'+x+'</div>').join('')+'</div></div>':'<div class="phint"><span class="phi">ⓘ</span><span class="pht" title="'+h.join(' · ')+'">'+h[0]+'</span>'+(h.length>1?'<span class="phc">+'+(h.length-1)+'</span>':'')+'</div>'}
(function(){var st=document.createElement('style');st.textContent=".phint{grid-column:2/-1;display:flex;align-items:center;gap:6px;justify-self:end;max-width:100%;margin-top:-6px;padding:3px 9px;border-radius:6px;background:rgba(245,165,36,.12);color:#b26f00;font-size:12px;line-height:16px;white-space:nowrap;font-weight:500}.phint .pht{white-space:nowrap}.phint .phc{flex:none;font-size:11px;line-height:14px;padding:0 6px;border-radius:999px;background:rgba(245,165,36,.22)}.phint.pfull{white-space:normal;align-items:flex-start}.phint.pfull>div>div+div{margin-top:3px}.phint:not(.pfull){overflow-x:auto;scrollbar-width:none}@media(max-width:820px){.phint:not(.pfull) .pht{font-size:11px}}.phint .phi{font-size:14px;line-height:14px;flex:none}[data-theme=dark] .phint{color:#F5A524}.tag.arch,[data-theme] .tag.arch{display:inline-block;font-size:12px;padding:0 7px;border-radius:999px;background:transparent;border:1px solid #8a93a3;color:#8a93a3;white-space:nowrap}.plot.arch{opacity:.6}@media(max-width:820px){.phint{grid-column:1/-1;justify-self:start;margin-top:0}}";(document.head||document.documentElement).appendChild(st)})();
