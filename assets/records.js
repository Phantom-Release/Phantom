'use strict';
const filters=document.querySelector('.record-filters');
if(filters){
  filters.hidden=false;
  filters.addEventListener('submit',e=>e.preventDefault());
  const cards=[...document.querySelectorAll('.fact-card')];
  const search=document.querySelector('#record-search'),status=document.querySelector('#record-status');
  function filter(){let count=0;const q=search.value.trim().toLocaleLowerCase();for(const card of cards){card.hidden=!(card.textContent.toLocaleLowerCase().includes(q)&&(status.value==='all'||card.dataset.status===status.value));if(!card.hidden)count++;}document.querySelector('#record-count').textContent=`显示 ${count} / ${cards.length} 项事实记录`;document.querySelector('#record-empty').hidden=count!==0;}
  search.addEventListener('input',filter);status.addEventListener('change',filter);
  const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  for(const el of document.querySelectorAll('[data-record-date]')){const days=Number(el.dataset.reviewDays);if(!days)continue;const age=Math.floor((Date.parse(today)-Date.parse(el.dataset.recordDate))/86400000);el.textContent=age>=days?'已到建议复核时间，尚无新记录。':`距记录 ${Math.max(0,age)} 天；到期后会提示复核。`;}
}
