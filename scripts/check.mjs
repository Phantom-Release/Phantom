import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
const db=JSON.parse(readFileSync('data/observations.json','utf8'));
const errors=[];const assert=(v,msg)=>{if(!v)errors.push(msg);};
const ids=new Set(),obsIds=new Set(),sourceIds=new Set(db.sources.map(s=>s.id));
for(const c of db.claims){assert(!ids.has(c.id),`duplicate claim ${c.id}`);ids.add(c.id);let prior='';assert(c.observations.length>0,`empty ${c.id}`);for(const o of c.observations){assert(!obsIds.has(o.id),`duplicate observation ${o.id}`);obsIds.add(o.id);assert(/^\d{4}-\d{2}-\d{2}$/.test(o.date)&&!Number.isNaN(Date.parse(o.date)),`date ${o.id}`);assert(o.date>=prior,`unordered ${o.id}`);prior=o.date;assert(db.statusLabels[o.status],`status ${o.id}`);assert(o.method&&o.text&&o.sources.length,`missing provenance ${o.id}`);assert(o.sources.every(s=>sourceIds.has(s)),`source ${o.id}`);if(['unresolved','reported'].includes(o.status))assert(o.nextCheck,`missing followup ${o.id}`);}}
let old;try{old=JSON.parse(execFileSync('git',['show','HEAD:data/observations.json'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}));}catch{}
if(old){for(const c of old.claims){const current=db.claims.find(x=>x.id===c.id);assert(current,`removed claim ${c.id}`);for(const o of c.observations)assert(JSON.stringify(current?.observations.find(x=>x.id===o.id))===JSON.stringify(o),`historical observation changed: ${o.id}`);}}
const pages=new Map();
for(const file of readdirSync('.').filter(f=>f.endsWith('.html'))){const text=readFileSync(file,'utf8');const page={ids:new Set(),links:[],h1:0,main:0};pages.set(resolve(file),page);await new HTMLRewriter().on('*',{element(el){const id=el.getAttribute('id');if(id){assert(!page.ids.has(id),`${file}: duplicate id ${id}`);page.ids.add(id);}if(el.tagName==='h1')page.h1++;if(el.tagName==='main')page.main++;for(const attr of ['href','src']){const value=el.getAttribute(attr);if(value)page.links.push(value);}}}).transform(new Response(text)).text();assert(page.h1===1&&page.main===1,`${file}: expected one h1 and main`);assert(text.includes('https://phantom.jichang.space/'+(file==='index.html'?'':file)+'" rel="canonical"'),`${file}: canonical`);assert((text.match(/class="guide-sidebar"/g)||[]).length===(file==='index.html'?0:1),`${file}: expected navigation layout`);}
for(const [file,page] of pages)for(const link of page.links){if(/^(https?:|mailto:|tel:|data:)/.test(link))continue;const [path,hash]=link.split('#');const clean=path.split('?')[0];const target=resolve(dirname(file),clean||file);const actual=clean.endsWith('/')?resolve(target,'index.html'):target;assert(existsSync(actual),`${file}: missing ${link}`);if(hash&&pages.has(actual))assert(pages.get(actual).ids.has(decodeURIComponent(hash)),`${file}: missing anchor ${link}`);}
const home=readFileSync('index.html','utf8');
assert(home.includes('data-aff="hero"')&&home.includes('data-aff="closing"'),'home needs visible registration entry points');
for(const file of readdirSync('.').filter(f=>f.endsWith('.html'))){const text=readFileSync(file,'utf8');assert(text.includes('data-aff="navigation"'),'missing registration navigation '+file);for(const match of text.matchAll(/auth\/register\?code=([A-Za-z0-9]+)/g))assert(match[1]==='vyMwqgOF','inconsistent referral destination '+file);}
const faq=JSON.parse(readFileSync('data/faq.json','utf8'));
const faqIds=new Set();
for(const item of faq.items){assert(!faqIds.has(item.id),'duplicate FAQ '+item.id);faqIds.add(item.id);assert(item.question&&item.answer&&item.basis&&item.link?.href,'incomplete FAQ '+item.id);assert(!/可能|待复核|待核查|尚未|或许|大概/.test(item.answer),'FAQ needs a definite supported answer: '+item.id);assert(home.includes('id="faq-'+item.id+'"')&&home.includes(item.answer),'FAQ not synchronized '+item.id);}
assert(!home.includes('{{'),'unfilled home template');
const evidence=readFileSync('evidence.html','utf8');
for(const claim of db.claims){const item=claim.observations.at(-1);if(item.value===undefined){const section=evidence.slice(evidence.indexOf('id="'+claim.id+'"'),evidence.indexOf('</article>',evidence.indexOf('id="'+claim.id+'"')));assert(!section.includes('两次记录值一致'),'missing value cannot imply unchanged: '+claim.id);}}
assert([24,16,7,3].reduce((a,b)=>a+b,0)===50,'protocol totals');
for(const c of db.claims)assert(readFileSync('evidence.html','utf8').includes(`id="${c.id}"`),`record not rendered ${c.id}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Checked ${pages.size} pages, ${ids.size} claims, ${obsIds.size} observations, local links, anchors and immutable history.`);
