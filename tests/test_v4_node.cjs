'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const path=require('node:path');
const code=fs.readFileSync(path.resolve(__dirname,'../app.js'),'utf8');
class Elem{
 constructor(tag){this.tagName=tag;this.children=[];this.parent=null;this._text='';this.className='';this.attributes={};this.listeners={};this.dataset={};this.hidden=false;this.disabled=false;this.open=false;this.href='';}
 appendChild(el){this.children.push(el);el.parent=this;return el}
 replaceChildren(...els){this.children=[];for(const el of els)this.appendChild(el)}
 setAttribute(k,v){this.attributes[k]=String(v)}
 addEventListener(t,f){(this.listeners[t]??=[]).push(f)}
 fire(t){for(const f of this.listeners[t]??[])f()}
 set textContent(v){this._text=String(v);this.children=[]}
 get textContent(){return this._text+this.children.map(c=>c.textContent).join('')}
}
function all(root,pred){const res=[];function walk(el){if(pred(el))res.push(el);for(const child of el.children)walk(child)}walk(root);return res}
const ids=Object.fromEntries(['status','vehicles','refresh','more','source','stop-description'].map(id=>[id,new Elem('div')]));
const berrak=new Elem('button');berrak.dataset.stop='berrak';const dinc=new Elem('button');dinc.dataset.stop='dinc';
const doc={getElementById:id=>ids[id],querySelectorAll:()=>[berrak,dinc],createElement:tag=>new Elem(tag),createDocumentFragment:()=>new Elem('fragment'),addEventListener:()=>{},visibilityState:'visible'};
const storage={};const ctx=vm.createContext({document:doc,window:{},navigator:{},location:{protocol:'file:',hostname:''},localStorage:{getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v},console,Math,Date,Number,String,Array,Object,Set,Map,AbortController,setTimeout:()=>1,clearTimeout:()=>{},setInterval:()=>1,fetch:()=>Promise.resolve({ok:true,json:async()=>[]})});
vm.runInContext(code,ctx,{filename:'app.js'});
const estimate=(lat,lon,stopCode)=>vm.runInContext(`remainingStops({latitude:${lat},longitude:${lon}},${JSON.stringify(stopCode)})`,ctx);
const track=vm.runInContext('makeTrack',ctx);
function trackFor(est,stopCode='200051') {const card=new Elem('article');track(card,est,{code:stopCode,title:stopCode==='200051'?'Dinç Sokak':'Berrak Sitesi'},0,stopCode+':test');return card}
function getView(pts,stop='200051'){const r=estimate(...pts,stop);assert(r);return r}
const beforeEry=getView([40.99744,29.136031]);const beforeSenol=getView([40.99915,29.12966]);const beforeDinc=getView([40.99916,29.12660]);
for(const [r,num,label] of [[beforeEry,4,'ERYILDIZ'],[beforeSenol,2,'ŞENOL GÜNEŞ BULVARI'],[beforeDinc,1,'DİNÇ SOKAK']]){
 assert.equal(r.min,num);assert.equal(r.max,num);assert.equal(r.view,'forward');
 assert.equal(r.stops.length,num);assert.equal(r.stops[0].name,label);assert.equal(r.goalShown,true);
 const c=trackFor(r);assert.equal(all(c,x=>x.className==='timeline-stop' || x.className.includes('timeline-stop ')).length,num);
 assert(c.textContent.includes('Yaklaşan duraklar'));
 assert(!c.textContent.includes('+'), 'should show all upcoming with <= 10 remaining');
}
const nearCard=trackFor(beforeDinc);
assert.equal(all(nearCard,x=>x.className.includes('timeline-stop target')).length,1);
assert.equal(all(nearCard,x=>x.className==='timeline-dot').at(-1)._text,'◎','target not falsely reached');
assert.equal(all(nearCard,x=>x.className==='timeline-bus').length,1);
const beforeBerrak=getView([40.99915,29.12966],'224031');
assert.equal(beforeBerrak.min,1);assert.equal(beforeBerrak.max,1);
assert.equal(beforeBerrak.stops.at(-1).code,'224031');
const far=getView([40.995276,29.104227]);
assert(far.min>10,'far away from goal');
const farCard=trackFor(far);
assert(far.stops.length<=10,'max 10 visible nodes');
assert(farCard.textContent.includes('Güzergâh')||farCard.textContent.includes('durak daha'),'no false certainty when far');
// The bus must be between stop nodes, not a permanently fixed end-of-route icon.
const stops=vm.runInContext('ROUTES[0].points',ctx);
let good8=null,good12=null;
for(let i=1;i<stops.length-1;i++){
 const [code,_,lat,lon]=stops[i]; const rem=getView([lat,lon]);
 if(rem.view==='forward'&&rem.min===rem.max&&rem.min>=7&&rem.min<=10&&!good8)good8=rem;
 if(rem.view==='forward'&&rem.min===rem.max&&rem.min>10&&!good12)good12=rem;
}
assert(good8,'find route position 7–10 stops out to show more than five');console.log('Sample 7–10 stops:',good8.min,good8.stops.map(x=>x.name).join(' / '));
assert(good8.stops.length>5,'V4 expands beyond old five-stop limit');
const midCard=trackFor(good8);
assert.equal(all(midCard,x=>x.className.split(' ').includes('timeline-stop')).length,good8.stops.length);
if(good12){
 assert.equal(good12.stops.length,10);
 assert(trackFor(good12).textContent.includes('durak daha'));
}
const filtered=vm.runInContext('live13',ctx)([
 {route_code:'13',kapino:'M-2349',destination:'KADIKÖY',eta_minutes:12},
 {route_code:'13M',kapino:'13M',destination:'KADIKÖY',eta_minutes:1},
 {route_code:'13',kapino:'WRONG',destination:'BATI ATAŞEHİR PERONLAR',eta_minutes:2},
]);
assert.equal(filtered.length,1);assert.equal(filtered[0].kapino,'M-2349');
// Stop selector is independent of vehicle door number and still persists.
berrak.fire('click');assert.equal(storage['dinc13-v2-stop'],'berrak');
assert.equal(ids['source'].href.endsWith('/224031/arrivals'),true);
dinc.fire('click');assert.equal(ids['source'].href.endsWith('/200051/arrivals'),true);
console.log('PASS V4: exact 13 filter, both stops, last 4/2/1, >5 in middle, 10 max, branch uncertainty, dynamic list, non-arrival marker, preferences');