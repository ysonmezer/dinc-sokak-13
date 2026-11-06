
'use strict';
const STOPS = Object.freeze({
  dinc: {code:'200051', title:'Dinç Sokak',short:'Dinç Sokak'},
  berrak: {code:'224031',title:'Berrak Sitesi',short:'Berrak Sitesi',official:'Şenol Güneş Bulvarı'},
  murat: {code:'214201',title:'Şehit Murat Filik Parkı',short:'Şehit Murat Filik'}
});
const ROUTES = [{"id":"13_G_D0","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D2021","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205772","ATAŞEHİR",40.99242,29.128377],["262892","ERGUVAN CADDESİ",40.995643,29.129719],["209181","VİYANA SOKAK",40.996538,29.133759],["209171","ÖZGÜR SOKAK",40.996518,29.136462],["209161","DUDULLU TERMİNALİ",40.996105,29.138826],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D2114","points":[["215381","AŞIK VEYSEL CADDESİ",41.009112,29.129859],["215351","YUNUS EMRE",41.003715,29.127656],["215361","TATLISU CADDESİ",41.000447,29.126798],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D2382","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D2765","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D3996","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D3998","points":[["215381","AŞIK VEYSEL CADDESİ",41.009112,29.129859],["287751","BAKLA SOKAK",41.006026,29.128062],["215351","YUNUS EMRE",41.003715,29.127656],["215361","TATLISU CADDESİ",41.000447,29.126798],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D4465","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]},{"id":"13_G_D6576","points":[["209541","BATI ATAŞEHİR PERONLAR",40.995276,29.104227],["213552","ATAŞEHİR  BELEDİYESİ",40.997834,29.102261],["228982","ARDIÇ SOKAK",40.997481,29.103377],["228992","MENEKŞE SOKAK",40.996094,29.105197],["213822","CUMHURİYET PARKI",40.99425,29.108754],["229042","MİMAR SİNAN CAMİİ",40.993301,29.111525],["205751","ATAŞEHİR ATATÜRK MAHALLESİ",40.992436,29.11813],["205761","ATAŞEHİR PLAZALAR",40.992837,29.123086],["205771","ATAŞEHİR",40.992228,29.128479],["205781","ATAŞEHİR SİTELER",40.991482,29.131714],["210772","SİNPAŞ KORU KONUTLARI",40.993669,29.13466],["210782","ADIGÜZEL ORTAOKULU",40.993802,29.139057],["211832","PINAR SİTESİ",40.993822,29.142909],["210792","YENİŞEHİR MUHTARLIĞI",40.993839,29.145553],["209162","DUDULLU TERMİNALİ",40.995911,29.145882],["209151","ATAŞEHİR İGDAŞ",40.997271,29.138354],["209141","ERYILDIZ",40.997609,29.133708],["218591","ESENLİ SOKAK",40.998735,29.130761],["224031","ŞENOL GÜNEŞ BULVARI",40.999553,29.128572],["200051","DİNÇ SOKAK",40.998768,29.124641],["214232","ÇAMLIK MAHALLESİ",41.000366,29.123942],["214221","ÇAMLIK MERKEZ CAMİİ",41.003318,29.124417],["214211","ŞEHİT EMRE ANŞİN",41.006546,29.125497],["214201","ŞEHİT MURAT FİLİK PARKI",41.009913,29.12782]]}];
const $ = id => document.getElementById(id);
const statusEl=$('status'),listEl=$('vehicles'),refreshButton=$('refresh'),moreEl=$('more');
const sourceEl=$('source'),stopDesc=$('stop-description');
const pickButtons=Array.from(document.querySelectorAll('[data-stop]'));
const otherStopButtons=Array.from(document.querySelectorAll('[data-extra-stop]'));
const stopManager=$('stop-manager');
const FAVORITES_KEY='dinc13-v4-favorites';
let selected='dinc',favorites=['berrak','dinc'],generation=0,controller=null;
try {
  const saved=localStorage.getItem('dinc13-v2-stop');
  if(Object.hasOwn(STOPS,saved))selected=saved;
  const raw=JSON.parse(localStorage.getItem(FAVORITES_KEY)||'null');
  if(Array.isArray(raw)&&raw.length===2&&new Set(raw).size===2&&raw.every(k=>Object.hasOwn(STOPS,k)))favorites=raw;
} catch(e){}
// Keep the selected stop in the two shortcuts after any settings migration.
if(!favorites.includes(selected))favorites=[favorites[0],selected];
function setStopUI(){
  for(let i=0;i<pickButtons.length;i++){
    const key=favorites[i],el=pickButtons[i];
    el.dataset.stop=key;
    el.textContent=STOPS[key].short;
    el.setAttribute('aria-label',STOPS[key].title);
    el.setAttribute('aria-pressed',String(key===selected));
  }
  for(const el of otherStopButtons){
    const key=el.dataset.extraStop;
    el.setAttribute('aria-pressed',String(key===selected));
    el.setAttribute('data-favorite',String(favorites.includes(key)));
  }
  const stop=STOPS[selected];
  stopDesc.textContent=(stop.official?'İETT: '+stop.official:stop.title)+' · '+stop.code;
  sourceEl.href='https://iettapi.pcislocked.net/v1/stops/'+stop.code+'/arrivals';
}
function selectStop(key){
  if(!Object.hasOwn(STOPS,key))return;
  if(!favorites.includes(key))favorites=[selected,key];
  const changed=selected!==key;
  selected=key;
  try {
    localStorage.setItem('dinc13-v2-stop',selected);
    localStorage.setItem(FAVORITES_KEY,JSON.stringify(favorites));
  } catch(e){}
  setStopUI();
  if(stopManager)stopManager.open=false;
  if(changed){listEl.replaceChildren();moreEl.hidden=true;refresh();}
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
      if(!best||pr.distance<best.distance)best={...pr,i};
    }
    if(!best)continue;
    matches.push({variant:route.id,distance:best.distance,
      remaining:goalIndex-best.i,
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
  const forward=common('forward',10);
  const tail=common('tail',10);
  const view=forward.length?'forward':tail.length?'final':'none';
  const stops=view==='forward'?forward:view==='final'?tail:[];
  // One route can be represented by many identical schedule variant IDs.
  // Deduplicate *stop sequences*, not route IDs. These are possibilities,
  // never evidence that the vehicle actually passed a stop.
  const prefixLength=view==='forward'?forward.length:0;
  const suffixLength=view==='final'?tail.length:
    (view==='forward' && forward.length<10 && forward.at(-1)?.code!==stopCode?tail.length:0);
  const alternativeMap=new Map();
  for(const candidate of candidates){
    const begin=Math.min(prefixLength,candidate.upcoming.length);
    const end=Math.max(begin,candidate.upcoming.length-suffixLength);
    const nodes=candidate.upcoming.slice(begin,end);
    if(nodes.length===0)continue;
    const key=nodes.map(p=>p.code).join('/');
    if(!alternativeMap.has(key))alternativeMap.set(key,{nodes,routeCount:0,distance:candidate.distance});
    const group=alternativeMap.get(key);
    group.routeCount++;
    group.distance=Math.min(group.distance,candidate.distance);
  }
  const alternatives=[...alternativeMap.values()].sort((a,b)=>a.distance-b.distance||a.nodes.length-b.nodes.length);
  const hiddenMin=Math.max(0,min-stops.length);
  const hiddenMax=Math.max(0,max-stops.length);
  // A single count does not imply a confirmed variant: two variants can have
  // equal numbers of remaining stops while following different roads.
  const samePath=candidates.every(x=>x.upcoming.map(p=>p.code).join('/')===candidates[0].upcoming.map(p=>p.code).join('/'));
  return {min,max,view,stops,forward,tail,alternatives,samePath,
    goalShown:stops.at(-1)?.code===stopCode,
    hiddenMin,hiddenMax,
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
// V4.2: conservative, per-stop GPS consistency checks. All observations are
// kept only in memory while the app is open, never uploaded or persisted.
const gpsHistory=new Map();
const GPS_HISTORY_TTL_MS=10*60*1000;
function vehicleIdentity(bus,stop){
  return stop.code+':'+String(bus.kapino||bus.plate||'—')+':'+String(bus.plate||'—');
}
function gpsTimeMillis(bus,now){
  const age=ageSeconds(bus.last_seen_ts);
  return age===null ? null : now-age*1000;
}
function geoDistanceMeters(a,b){
  const [dx,dy]=xy(a.lat,a.lon,b.lat,b.lon);
  return Math.hypot(dx,dy);
}
function analyzeArrival(bus,stop,now=Date.now()){
  const latitude=bus.lat==null?NaN:Number(bus.lat);
  const longitude=bus.lon==null?NaN:Number(bus.lon);
  const coordsValid=Number.isFinite(latitude)&&Number.isFinite(longitude)
    &&Math.abs(latitude)<=90&&Math.abs(longitude)<=180;
  const age=ageSeconds(bus.last_seen_ts);
  const stale=age===null||age>240||age< -120;
  const eta=bus.eta_minutes==null?NaN:Number(bus.eta_minutes);
  const etaValid=Number.isFinite(eta)&&eta>=0;
  const current=(!stale&&coordsValid)?remainingStops({latitude,longitude},stop.code):null;
  const key=vehicleIdentity(bus,stop);
  const ts=gpsTimeMillis(bus,now);
  let rem=current;
  let motionAlert='';
  const prev=gpsHistory.get(key);
  if(current && prev && ts!==null && prev.ts!==null){
    const dt=(ts-prev.ts)/1000;
    if(dt>0&&dt<=180){
      const dist=geoDistanceMeters({lat:latitude,lon:longitude},prev);
      // GPS jitter of 100-200 m is tolerated; an actual bus cannot plausibly
      // travel 37 m/s plus a 120 m margin between these timestamps.
      const jump=dist>Math.max(220,37*dt+120);
      const regressed=prev.rem && current.min>=prev.rem.max+3;
      const currentPoint={lat:latitude,lon:longitude,ts};
      const repeated=prev.candidate&&
        geoDistanceMeters(currentPoint,prev.candidate)<=150&&
        (ts-prev.candidate.ts)/1000>0&&
        (ts-prev.candidate.ts)/1000<=120;
      if(repeated){
        // Second coherent observation supersedes a quarantined outlier,
        // irrespective of its now-increased elapsed time from the old fix.
        motionAlert='Konum yeniden eşleştirildi; durak tahmini kontrol edilmeli.';
        gpsHistory.set(key,{...currentPoint,rem:current,updatedAt:now});
      }else if(jump||regressed){
        rem=prev.rem;
        motionAlert=jump?
          'GPS konumu ani sıçradı; önceki makul konumun durak tahmini gösteriliyor.':
          'Durak sayısı beklenmedik arttı; önceki tahmin geçici olarak gösteriliyor.';
        gpsHistory.set(key,{...prev,candidate:currentPoint,updatedAt:now});
      }else{
        gpsHistory.set(key,{...currentPoint,rem:current,updatedAt:now});
      }
    }else if(dt>180){
      gpsHistory.set(key,{lat:latitude,lon:longitude,ts,rem:current,updatedAt:now});
    }
    // Equal or older timestamps do not count as a new observation.
  }else if(current && ts!==null){
    gpsHistory.set(key,{lat:latitude,lon:longitude,ts,rem:current,updatedAt:now});
  }
  const etaConflict=Boolean(rem&&etaValid&&(
    (eta<=2&&rem.min>=5)||(eta<=5&&rem.min>=8)));
  // This is a heuristic warning, not a recalculation of IETT arrival minutes.
  const warning=etaConflict?
    'Süre/GPS uyuşmuyor: '+Math.round(eta)+' dk bildirilirken GPS yaklaşık '+renderRemaining(rem.min,rem.max)+' durak gösteriyor.':
    '';
  return {bus,rem,stale,eta,etaValid,etaConflict,warning,motionAlert,
    gpsAge:age,identity:key};
}
function purgeGpsHistory(now=Date.now()){
  for(const [key,entry] of gpsHistory){
    if(now-entry.updatedAt>GPS_HISTORY_TTL_MS)gpsHistory.delete(key);
  }
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
function renderAlternativeOptions(parent,rem){
  const groups=rem.alternatives;
  if(!groups.length){
    add(parent,'p','timeline-note','Bu bölümün durak adları tek bir güzergâh olarak belirlenemedi.');
    return;
  }
  const alternatives=add(parent,'details','timeline-alternatives');
  const summary=add(alternatives,'summary','timeline-alt-summary');
  add(summary,'span','','Olası yolların duraklarını göster');
  add(summary,'span','alt-count',groups.length+' seçenek');
  const body=add(alternatives,'div','timeline-alt-list');
  groups.forEach((group,i)=>{
    const box=add(body,'div','timeline-alt-path');
    add(box,'div','timeline-alt-heading','Olası yol '+(i+1)+' · '+group.nodes.length+' durak');
    const shown=group.nodes.slice(-6);
    if(group.nodes.length>shown.length){
      add(box,'p','timeline-alt-ellipsis','… '+(group.nodes.length-shown.length)+' önceki durak daha');
    }
    const ol=add(box,'ol','timeline-alt-stops');
    shown.forEach(point=>add(ol,'li','',point.name));
  });
  add(body,'p','timeline-foot','Bunlar olası güzergâhlar; araç için doğrulanmış durak geçişleri değildir.');
}
function addStopTimeline(parent,points,stop,placeBus){
  if(placeBus)addVehicleMarker(parent,'Otobüsün GPS’e göre tahmini yeri');
  const line=add(parent,'ol','timeline-stops');
  for(let i=0;i<points.length;i++){
    const point=points[i],isGoal=point.code===stop.code;
    const li=add(line,'li','timeline-stop'+(isGoal?' target':'')+(placeBus&&i===0?' next':''));
    add(li,'span','timeline-dot',isGoal?'◎':'');
    add(li,'span','timeline-stop-name',isGoal?stop.title+' · biniş':point.name);
  }
}
function makeTrack(card,rem,stop,index,vehicleKey){
  const details=add(card,'details','track');
  // The daily glance should prioritize minutes and stop count. Opening a
  // vehicle's timeline persists through the 30-second refresh.
  details.open=expandedTracks.has(vehicleKey)?expandedTracks.get(vehicleKey):index===0;
  const summary=add(details,'summary','track-summary');
  add(summary,'span','','Yaklaşan duraklar · GPS tahmini');
  add(summary,'span','track-toggle','');
  details.addEventListener('toggle',()=>expandedTracks.set(vehicleKey,details.open));
  const body=add(details,'div','timeline');
  if(rem.view==='none'){
    add(body,'p','timeline-warning','Olası güzergâhların ortak sıradaki durağı bulunamadı.');
    renderAlternativeOptions(body,rem);
    add(body,'p','timeline-foot','GPS, aracın izleyeceği kesin güzergâhı göstermiyor.');
    return;
  }
  if(rem.view==='final'){
    const unknownMin=Math.max(0,rem.min-rem.tail.length);
    const unknownMax=Math.max(0,rem.max-rem.tail.length);
    const uncertain=add(body,'section','timeline-uncertain');
    add(uncertain,'div','timeline-section-heading','OLASI ÖNCEKİ BÖLÜM · GÜZERGÂH BELİRSİZ');
    const position=add(uncertain,'div','timeline-unknown-position');
    add(position,'span','timeline-unknown-icon','🚌');
    add(position,'span','','Araç bu olası yollardan birinde olabilir.');
    add(uncertain,'div','timeline-unknown-count',renderRemaining(unknownMin,unknownMax)+' durak · henüz ortak bölümde değil');
    renderAlternativeOptions(uncertain,rem);
    const shared=add(body,'section','timeline-shared');
    add(shared,'div','timeline-section-heading','TÜM OLASI YOLLARDA ORTAK SON DURAKLAR');
    addStopTimeline(shared,rem.tail,stop,false);
  }else{
    const shared=add(body,'section','timeline-shared');
    add(shared,'div','timeline-section-heading',rem.samePath?'TAHMİNİ SIRADAKİ DURAKLAR':'ORTAK SIRADAKİ DURAKLAR');
    addStopTimeline(shared,rem.forward,stop,true);
    if(rem.hiddenMax>0){
      const extra=add(body,'div','timeline-more');
      add(extra,'span','timeline-more-icon','⋯');
      add(extra,'span','',`+${renderRemaining(rem.hiddenMin,rem.hiddenMax)} durak daha · ${stop.title} hedefine`);
      if(!rem.samePath && rem.forward.length<10){
        add(body,'p','timeline-warning','Devam eden yolda güzergâh farklılıkları olabilir.');
        renderAlternativeOptions(body,rem);
      }
    }
  }
  add(body,'p','timeline-foot','Durak geçişleri ölçülmedi. GPS konumu ve olası İETT güzergâhlarına göre tahmin edilir.');
}
function makeCard(item,index,stop){
  const {bus,rem,stale,eta,etaValid,etaConflict,warning,motionAlert}=item;
  const card=add(document.createDocumentFragment(),'article',
    'card'+(index===0?' primary':'')+(etaConflict?' has-warning':''));
  const top=add(card,'div','card-top');
  const info=add(top,'div','');
  add(info,'div','plate','Araç '+(bus.kapino||'—'));
  add(info,'div','plate',bus.plate||'Plaka bilinmiyor');
  const etaText=etaValid&&!stale?Math.round(eta)+' dk'+(etaConflict?' ?':''):'— dk';
  add(top,'div','eta'+(etaConflict?' eta-alert':''),etaText);
  if(stale){
    add(card,'div','rem','Veri eski');
    add(card,'div','detail','GPS zamanı güncel değil veya doğrulanamadı: '+String(bus.last_seen_ts||'—'));
    return card;
  }
  if(!rem){
    add(card,'div','rem','— durak');
    add(card,'div','detail','GPS konumu seçilen güzergâhla eşleşmedi; tahmin verilemiyor.');
    return card;
  }
  const exact=rem.min===rem.max;
  add(card,'div','rem'+(exact?'':' range'),exact?'≈ '+rem.min+' durak':rem.min+'–'+rem.max+' durak');
  add(card,'div','detail',exact?'GPS tabanlı tahmin':'Güzergâh belirsiz · tahmini aralık');
  if(warning){
    const alert=add(card,'div','confidence-alert');
    add(alert,'strong','','⚠ Süre şüpheli');
    add(alert,'span','',warning+' Evden çıkış kararını yalnız bu dakikaya göre verme.');
  }
  if(motionAlert){
    const alert=add(card,'div','motion-alert');
    add(alert,'strong','','GPS değişimi');
    add(alert,'span','',motionAlert);
  }
  makeTrack(card,rem,stop,index,item.identity);
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
    const now=Date.now();
    purgeGpsHistory(now);
    const assessed=buses.map(bus=>analyzeArrival(bus,stop,now));
    // When ETA conflicts with GPS, move that record behind non-conflicting
    // arrivals; never silently rewrite its ETA or claim precise arrival.
    assessed.sort((a,b)=>Number(a.etaConflict)-Number(b.etaConflict)||
      (a.etaValid?a.eta:Infinity)-(b.etaValid?b.eta:Infinity));
    listEl.replaceChildren();
    for(const [i,item] of assessed.slice(0,2).entries())listEl.appendChild(makeCard(item,i,stop));
    if(!buses.length)add(listEl,'div','empty','Bu durakta şu anda yaklaşan 13 aracı bildirilmiyor.');
    const hidden=Math.max(0,buses.length-2);
    moreEl.hidden=!hidden;
    if(hidden)moreEl.textContent='+'+hidden+' araç daha var · yalnızca ilk iki araç gösteriliyor';
    const conflicts=assessed.filter(x=>x.etaConflict).length;
    statusEl.textContent=new Date().toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})+' · '+buses.length+' yaklaşan araç'+
      (conflicts?' · '+conflicts+' süre/GPS uyuşmazlığı':'');
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
for(const el of pickButtons)el.addEventListener('click',()=>selectStop(el.dataset.stop));
for(const el of otherStopButtons)el.addEventListener('click',()=>selectStop(el.dataset.extraStop));
refreshButton.addEventListener('click',refresh);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refresh();});
setInterval(()=>{if(document.visibilityState==='visible')refresh();},30000);
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{});});
}
setStopUI();refresh();