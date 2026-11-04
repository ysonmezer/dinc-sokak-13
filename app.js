
'use strict';
const STOPS = Object.freeze({
  dinc: {code:'200051', title:'Dinç Sokak',short:'Dinç Sokak'},
  berrak: {code:'224031',title:'Berrak Sitesi',short:'Berrak',official:'Şenol Güneş Bulvarı'}
});
const ROUTES = [{"id":"13_G_D0","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D2021","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205772","ATAŞEHİR",40.99242,29.128377],["262892","ERGUVAN CADDESİ",40.995643,29.129719],["209181","VİYANA SOKAK",40.996538,29.133759],["209171","ÖZGÜR SOKAK",40.996518,29.136462],["209161","DUDULLU TERMİNALİ",40.996105,29.138826],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D2114","points":[["215381","AŞIK VEYSEL CADDESİ",41.009112,29.129859],["215351","YUNUS EMRE",41.003715,29.127656],["215361","TATLISU CADDESİ",41.000447,29.126798],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D2382","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D2765","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D3996","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D3998","points":[["215381","AŞIK VEYSEL CADDESİ",41.009112,29.129859],["287751","BAKLA SOKAK",41.006026,29.128062],["215351","YUNUS EMRE",41.003715,29.127656],["215361","TATLISU CADDESİ",41.000447,29.126798],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D4465","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]},{"id":"13_G_D6576","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641]]}];
const $ = id => document.getElementById(id);
const statusEl=$('status'),listEl=$('vehicles'),refreshButton=$('refresh'),moreEl=$('more');
const sourceEl=$('source'),stopDesc=$('stop-description');
const pickButtons=Array.from(document.querySelectorAll('[data-stop]'));
let selected='dinc',generation=0,controller=null;
try { if(localStorage.getItem('dinc13-v2-stop') in STOPS)selected=localStorage.getItem('dinc13-v2-stop'); } catch(e){}
function setStopUI(){
  for(const el of pickButtons)el.setAttribute('aria-pressed',String(el.dataset.stop===selected));
  const stop=STOPS[selected];
  stopDesc.textContent=selected==='berrak' ? 'İETT: Şenol Güneş Bulvarı · 224031':'Dinç Sokak · 200051';
  sourceEl.href='https://iettapi.pcislocked.net/v1/stops/'+stop.code+'/arrivals';
}
function xy(lat,lon,baseLat,baseLon){
  return [(lon-baseLon)*111320*Math.cos(baseLat*Math.PI/180),(lat-baseLat)*111320];
}
function projection(bus,p,q){
  const [ax,ay]=xy(p[2],p[3],bus.latitude,bus.longitude);
  const [bx,by]=xy(q[2],q[3],bus.latitude,bus.longitude);
  const dx=bx-ax,dy=by-ay,den=dx*dx+dy*dy;
  const t=den?Math.max(0,Math.min(1,-(ax*dx+ay*dy)/den)):0;
  return {distance:Math.hypot(ax+t*dx,ay+t*dy),t};
}
/** Calculate candidate stop progress using the nearest straight-line segment.
 *  These are approximations, not proof of stop passage. */
/** GPS nearest stop-segment projection; candidate routes may disagree. */
function remainingStops(bus,stopCode){
  if(!Number.isFinite(bus.latitude)||!Number.isFinite(bus.longitude))return null;
  const matches=[];
  for(const route of ROUTES){
    const goalIndex=route.points.findIndex(p=>p[0]===stopCode);
    if(goalIndex<1)continue;
    const points=route.points.slice(0,goalIndex+1);
    let best=null;
    for(let i=0;i<points.length-1;i++){
      const pr=projection(bus,points[i],points[i+1]);
      if(best===null||pr.distance<best.distance)best={...pr,i};
    }
    if(!best)continue;
    matches.push({variant:route.id,distance:best.distance,
      remaining:goalIndex-best.i,
      nextCode:points[best.i+1][0],
      // The bus is presumed to be between i and i+1; neither stop passage
      // nor the actual road path is confirmed.
      upcoming:points.slice(best.i+1).map(p=>({code:p[0],name:p[1]}))});
  }
  if(!matches.length)return null;
  matches.sort((a,b)=>a.distance-b.distance);
  const bestDistance=matches[0].distance;
  if(bestDistance>250)return null;
  const candidates=matches.filter(x=>x.distance<=Math.min(250,bestDistance+75));
  const nums=candidates.map(x=>x.remaining);
  const min=Math.min(...nums),max=Math.max(...nums);
  const common=(direction,maxCount)=>{
    const result=[];
    for(let offset=0;offset<maxCount;offset++){
      const nodes=candidates.map(x=>direction==='forward'?x.upcoming[offset]:x.upcoming.at(-offset-1));
      if(nodes.some(x=>!x)||nodes.some(x=>x.code!==nodes[0].code))break;
      result.push(nodes[0]);
    }
    return direction==='forward'?result:result.reverse();
  };
  // Forward path is useful for leaving-home decisions. If variants branch
  // immediately, show their common final approach instead, *without* a bus
  // marker claiming progress along it.
  const forward=common('forward',10);
  const tail=common('tail',10);
  const view=forward.length?'forward':tail.length?'final':'none';
  const stops=view==='forward'?forward:view==='final'?tail:[];
  const fullForward=view==='forward'&&min===max&&forward.length===min;
  const lastShown=stops.at(-1)?.code;
  return {min,max,view,stops,fullForward,
    goalShown:lastShown===stopCode,
    hiddenMin:view==='forward'?Math.max(0,min-stops.length):Math.max(0,min-stops.length),
    hiddenMax:view==='forward'?Math.max(0,max-stops.length):Math.max(0,max-stops.length),
    variantCount:candidates.length,distance:bestDistance};
}
function ageSeconds(hms){
  if(!hms||!/^\d{2}:\d{2}:\d{2}$/.test(hms))return null;
  const [h,m,s]=hms.split(':').map(Number);
  if(h>23||m>59||s>59)return null;
  const now=new Date(),nowSec=now.getHours()*3600+now.getMinutes()*60+now.getSeconds(),seen=h*3600+m*60+s;
  let delta=nowSec-seen;
  if(delta>43200)delta-=86400;
  if(delta<-43200)delta+=86400;
  return delta;
}
function add(parent,tag,cls,value){
  const el=document.createElement(tag);
  if(cls)el.className=cls;
  if(value!==undefined)el.textContent=String(value);
  parent.appendChild(el);return el;
}
// Remember expanded details when the 30-second refresh replaces cards.
const expandedTracks=new Map();
function addVehicleMarker(parent,label){
  const marker=add(parent,'div','timeline-bus');
  add(marker,'span','timeline-bus-icon','🚌');
  add(marker,'span','',label);
  return marker;
}
function renderRemaining(min,max){return min===max?String(min):min+'–'+max;}
function makeTrack(card,rem,stop,index,vehicleKey){
  const details=add(card,'details','track');
  details.open=expandedTracks.has(vehicleKey)?expandedTracks.get(vehicleKey):index===0;
  const summary=add(details,'summary','track-summary');
  add(summary,'span','','Yaklaşan duraklar · GPS tahmini');
  add(summary,'span','track-toggle','');
  details.addEventListener('toggle',()=>expandedTracks.set(vehicleKey,details.open));
  const body=add(details,'div','timeline');
  if(rem.view==='none'){
    add(body,'p','timeline-warning','Güzergâh varyantları uyuşmuyor. Durak isimleri güvenilir biçimde sıralanamıyor.');
    return;
  }
  if(rem.view==='forward'){
    addVehicleMarker(body,'Otobüsün tahmini konumu · sıradaki duraklar');
    if(rem.min!==rem.max){
      add(body,'p','timeline-warning','Farklı güzergâhlarda kalan durak sayısı değişebilir. Yalnızca ortak sıradaki duraklar gösteriliyor.');
    }
  }else{
    add(body,'p','timeline-warning','Güzergâh belirsiz: yalnızca hedefe yakın ortak duraklar gösteriliyor. Otobüsün bu duraklara ulaştığı doğrulanmadı.');
  }
  const line=add(body,'ol','timeline-stops');
  for(let i=0;i<rem.stops.length;i++){
    const point=rem.stops[i];
    const isGoal=point.code===stop.code;
    const li=add(line,'li','timeline-stop'+(isGoal?' target':'')+(rem.view==='forward'&&i===0?' next':''));
    add(li,'span','timeline-dot',isGoal?'◎':'');
    const label=add(li,'span','timeline-stop-name',isGoal?stop.title+' · biniş':point.name);
  }
  if(!rem.goalShown){
    // On a forward view, +N includes the destination. On a final-section
    // view, the goal should be in the common tail; otherwise avoid a count.
    if(rem.view==='forward'&&rem.hiddenMax>0){
      const extra=add(body,'div','timeline-more');
      add(extra,'span','timeline-more-icon','⋯');
      add(extra,'span','',`+${renderRemaining(rem.hiddenMin,rem.hiddenMax)} durak daha · ${stop.title} hedefine`);
    }else if(rem.view==='forward'){
      add(body,'p','timeline-warning','Hedefe kalan kesim için ortak güzergâh belirlenemedi.');
    }
  }
  if(rem.view==='final'&&rem.min>rem.stops.length){
    add(body,'p','timeline-note','Otobüs bu son yaklaşma bölümüne henüz ulaşmamış olabilir.');
  }
  if(rem.view==='forward'&&rem.hiddenMax>0&&rem.stops.length<10){
    add(body,'p','timeline-note','Ortak sonraki duraklar burada bitiyor; farklı seferler başka yoldan devam edebilir.');
  }
  add(body,'p','timeline-foot','Durak geçişleri ölçülmedi; gösterim GPS konumu ve olası güzergâhlara dayanır.');
}
function makeCard(bus,index,stop){
  const card=add(document.createDocumentFragment(),'article','card'+(index===0?' primary':''));
  const top=add(card,'div','card-top');
  const info=add(top,'div','');
  add(info,'div','plate','Araç '+(bus.kapino||'—'));
  add(info,'div','plate',bus.plate||'Plaka bilinmiyor');
  const age=ageSeconds(bus.last_seen_ts),stale=age!==null&&(age>240||age< -120);
  const minutes=Number(bus.eta_minutes);
  add(top,'div','eta',!stale&&Number.isFinite(minutes)&&minutes>=0?Math.round(minutes)+' dk':'— dk');
  if(stale){
    add(card,'div','rem','Veri eski');
    add(card,'div','detail','GPS zamanı: '+bus.last_seen_ts+' · Durak tahmini gösterilmiyor.');return card;
  }
  const rem=remainingStops({latitude:Number(bus.lat),longitude:Number(bus.lon)},stop.code);
  if(!rem){
    add(card,'div','rem','— durak');
    add(card,'div','detail','GPS konumu seçilen güzergâhla eşleşmedi; tahmin verilemiyor.');return card;
  }
  const exact=rem.min===rem.max;
  add(card,'div','rem'+(exact?'':' range'),exact?'≈ '+rem.min+' durak':rem.min+'–'+rem.max+' durak');
  add(card,'div','detail',exact?'GPS tabanlı tahmin':'Güzergâh belirsiz · tahmini aralık');
  makeTrack(card,rem,stop,index,stop.code+':'+String(bus.kapino||bus.plate||index));
  return card;
}
function live13(arrivals){
  return arrivals.filter(b=>String(b.route_code).trim()==='13' &&
    String(b.destination||'').toLocaleUpperCase('tr-TR').includes('KADIKÖY'))
    .sort((a,b)=>{
      const aEta=Number(a.eta_minutes),bEta=Number(b.eta_minutes);
      return (Number.isFinite(aEta)?aEta:Infinity)-(Number.isFinite(bEta)?bEta:Infinity);
    });
}
async function refresh(){
  const seq=++generation;
  if(controller)controller.abort();
  controller=new AbortController();
  const thisController=controller,stop=STOPS[selected];
  refreshButton.disabled=true;refreshButton.textContent='…';
  statusEl.textContent=stop.title+' için canlı veriler alınıyor…';
  const timeout=setTimeout(()=>thisController.abort(),12000);
  try{
    const url='https://iettapi.pcislocked.net/v1/stops/'+stop.code+'/arrivals';
    const response=await fetch(url,{cache:'no-store',headers:{Accept:'application/json'},signal:thisController.signal});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const data=await response.json();
    if(!Array.isArray(data))throw new Error('API beklenmeyen veri döndürdü');
    if(seq!==generation)return;
    const buses=live13(data);
    listEl.replaceChildren();
    for(const [i,bus] of buses.slice(0,2).entries())listEl.appendChild(makeCard(bus,i,stop));
    if(!buses.length)add(listEl,'div','empty','Bu durakta şu anda yaklaşan 13 aracı bildirilmiyor.');
    const hidden=Math.max(0,buses.length-2);
    moreEl.hidden=!hidden;
    if(hidden)moreEl.textContent='+'+hidden+' araç daha var · yalnızca ilk iki araç gösteriliyor';
    statusEl.textContent=new Date().toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})+' · '+buses.length+' yaklaşan araç';
  }catch(err){
    if(seq!==generation)return;
    listEl.replaceChildren();moreEl.hidden=true;
    add(listEl,'div','empty error','Canlı veri alınamadı. İnternet veya API erişimini kontrol et.');
    statusEl.textContent='Bağlantı hatası: '+(err&&err.name==='AbortError'?'Zaman aşımı':(err instanceof Error?err.message:'Bilinmiyor'));
  }finally{
    clearTimeout(timeout);
    if(seq===generation){controller=null;refreshButton.disabled=false;refreshButton.textContent='Yenile';}
  }
}
for(const el of pickButtons)el.addEventListener('click',()=>{
  const newStop=el.dataset.stop;
  if(!(newStop in STOPS)||newStop===selected)return;
  selected=newStop;
  try{localStorage.setItem('dinc13-v2-stop',selected);}catch(e){}
  setStopUI();listEl.replaceChildren();moreEl.hidden=true;refresh();
});
refreshButton.addEventListener('click',refresh);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refresh();});
setInterval(()=>{if(document.visibilityState==='visible')refresh();},30000);
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{});});
}
setStopUI();refresh();