import {resolve, extname, sep} from 'node:path';
const root=process.cwd();
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.txt':'text/plain'};
Bun.serve({hostname:'127.0.0.1',port:4176,async fetch(req){let pathname;try{pathname=decodeURIComponent(new URL(req.url).pathname);}catch{return new Response('Bad URL',{status:400});}const path=resolve(root,'.'+pathname+(pathname.endsWith('/')?'index.html':''));if(!path.startsWith(root+sep))return new Response('Forbidden',{status:403});const file=Bun.file(path);return await file.exists()?new Response(file,{headers:{'Content-Type':types[extname(path)]||file.type}}):new Response('Not found',{status:404});}});
console.log('Local: http://127.0.0.1:4176');
