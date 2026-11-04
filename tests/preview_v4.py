import json
from pathlib import Path
from datetime import datetime
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="./app.css">','<style>'+(root/'app.css').read_text()+'</style>')
lat,lon=40.991482,29.131714 # preceding SİNPAŞ KORU KONUTLARI; about ten stops away on standard route
mock={'route_code':'13','destination':'BATI ATAŞEHİR PERONLAR - KADIKÖY','eta_minutes':15,'plate':'34 HO 3009','kapino':'C-275','lat':lat,'lon':lon,'last_seen_ts':datetime.now().strftime('%H:%M:%S')}
mock2={'route_code':'13M','destination':'KADIKÖY','eta_minutes':1,'plate':'34 B 0001','kapino':'13M','lat':lat,'lon':lon,'last_seen_ts':datetime.now().strftime('%H:%M:%S')}
data=json.dumps([mock,mock2],ensure_ascii=False)
html=html.replace('<script src="./app.js" defer></script>', '<script>window.fetch=async()=>({ok:true,json:async()=>'+data+'});</script>')
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    page=browser.new_page(viewport={'width':412,'height':915},device_scale_factor=1)
    errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.set_content(html,wait_until='domcontentloaded',timeout=15000)
    page.add_script_tag(content=(root/'app.js').read_text())
    page.locator('.card').first.wait_for(timeout=5000)
    page.screenshot(path=str(root/'preview_v4.png'),full_page=True)
    assert 'Yaklaşan duraklar' in page.locator('.track-summary').first.inner_text()
    count=page.locator('.timeline-stop').count()
    assert 6<=count<=10, count
    assert page.locator('.card').count()==1 # 13M excluded
    assert not errors,errors
    print('PASS browser preview: visible stops',count,'13M excluded, page errors',errors)
    browser.close()