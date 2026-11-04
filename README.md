# 13 Otobüs Takip — PWA V4.2

**Durum:** Mobil önizleme ve otomatik testler başarılı; gerçek cihazda V4 canlı testi bekleniyor. **Tarih:** 4 Kasım 2026.

## Amaç ve sabit kullanım koşulları

- Yalnızca **İETT 13 hattı**, **Kadıköy yönü**. **13M asla dahil değil.** Araç filtresi tam eşitlik kullanır: `String(route_code).trim() === '13'`. Kapı numarası `M-2349` gibi `M` ile başlayabilir; bu 13M anlamına gelmez.
- İki biniş durağı: **Dinç Sokak 200051** ve **Berrak Sitesi adıyla anılan Şenol Güneş Bulvarı 224031**. Ekrandaki iki düğmeyle tek dokunuşta geçilir. Tercih cihazda `localStorage` anahtarı `dinc13-v2-stop` ile korunur.
- GPS/konum izni, hesap ya da harita gerektirmez. En yakın iki otobüsün tahmini geliş dakikası ve tahmini kalan durak sayısı gösterilir; başkaları için özet sayı verilir.

## Veri akışı ve hesaplama

1. Seçilen durak için `https://iettapi.pcislocked.net/v1/stops/{stop_code}/arrivals` sorgulanır (`fetch`, `cache:'no-store'`). İstemci tarayıcısı 30 saniyede bir (uygulama görünürken) yeniler; görünür olduğunda ayrıca yeniler.
2. Yanıttan yalnızca `route_code === '13'` ve `destination` içinde `KADIKÖY` bulunan kayıtlar tutulur. En yakın ETA ilk karttır. API erişilemezse hata gösterilir, eski varış tahmini canlıymış gibi gösterilmez.
3. **Yerleşik durağa kadar kısaltılmış 9 güzergâh varyantı** `app.js` içindeki `ROUTES` dizisindedir. Bunlar kullanıcı tarafından sağlanan İETT `stops.json` verisinden türetilmiştir: `[stop_code,stop_name,lat,lon]`.
4. Araç GPS'i, durak noktalarını birleştiren düz çizgi segmentlerine projekte edilir. En yakın segmentin uzaklığı 250 metreyi aşarsa durak hesabı gösterilmez. En iyi eşleşmeden en fazla 75 metre daha uzak adaylar da değerlendirilir. Böylece yakın ve olası varyantlar arasında belirsizlik korunur.
5. Her varyant için bir sonraki durağı ve hedefe kalan durak sayısı hesaplanır. Varyantlar anlaşmazlığa düşerse `min–max` aralığı gösterilir.

**Bu, yol geometrisini veya gerçek durak geçişlerini ölçen bir sistem değildir.** Yakın paralel yollar, GPS gecikmesi, farklı sefer varyantları ve yol sapmaları tahminleri etkileyebilir. Dakika değeri API'den alınır; durak sayısı bundan türetilmez.

## V4 görsel davranış

- Başlık: **Yaklaşan duraklar · GPS tahmini**; ilk kart başlangıçta açık, ikinci kart kapalı. Her yenilemede aç/kapat tercihi araç bazında korunur.
- Öngörülen **ilerideki ortak duraklar** otobüsün tahmini mevcut segmentinden itibaren sıralanır; ekranda **en fazla 10 durak** bulunur. 1–10 durak kaldıysa ve varyantlar aynı sırada uzlaşıyorsa tümü gösterilir.
- Hedef 10'dan daha uzaktaysa `+N durak daha · Dinç Sokak hedefine` gibi devam bilgisi görülür. `N`, gösterilen ortak duraklardan sonra kalan ve **hedefi de içeren** sayıdır.
- İleriye doğru güzergâh ortaklığı erken bitiyorsa yalnızca uzlaşılan duraklar gösterilir; eksik kesim ve rota belirsizliği belirtilir. İlk yaklaşan durakta bile uzlaşı yoksa, yalnızca varyantların **ortak son yaklaşma durakları** gösterilir ve otobüsün bu bölümde olduğu iddia edilmez.
- Hedef durak yeşil **içi boş halka** ile işaretlenir; durakta bekleyen/ulaşmış otobüs anlamında onay sembolü kullanılmaz. Turuncu halka, yalnızca GPS'e göre tahmini sıradaki durağı işaretler.
- Dinç Sokak ve Şenol Güneş Bulvarı farklı servis sorguları ve farklı rota kesitleriyle hesaplanır; düz bir `1 durak çıkar` kısayolu yoktur.

## Kaynak dosyalar

- `index.html`: mobil arayüz iskeleti, durak seçici, canlı durum, araç listesi.
- `app.js`: güzergâh noktaları, doğru hat filtresi, GPS yaklaşımı, V4 çizelge, API yenileme.
- `app.css`: dark mode mobil stiller, durak listesi ve devam gösterimi.
- `manifest.webmanifest`, `icons/`: ana ekran uygulaması adı ve simgeleri.
- `sw.js`: uygulama kabuğunun önbelleği, **`dinc13-shell-v4.0.0`**. API yanıtları önbelleğe alınmaz. Yeni sürüm yüklenince eski `dinc13-shell-*` önbellekleri temizlenir.
- `tests/test_v4_node.cjs`: sahte DOM ve örnek koordinatlarla birim/davranış testleri.
- `tests/preview_v4.py`: Chromium + Playwright ile örnek API verisi üzerinden görsel test.
- `.nojekyll`: GitHub Pages statik dosya yayımında Jekyll dönüşümünü devre dışı bırakır.

## Kurulum ve yayımlama

1. Herhangi bir derleyici gerektirmez. Depoyu `main` dalıyla GitHub'a gönderin. GitHub Pages: **Settings → Pages → Deploy from a branch → `main` → `/(root)`**.
2. Yayın adresi: `https://ysonmezer.github.io/dinc-sokak-13/`.
3. Android Chrome'da adresi açın; menüden **Ana ekrana ekle → Yükle** ile kurun. Mevcut kurulumlar normalde otomatik güncellenir; gerekirse kapatıp tekrar açın.
4. Uygulama çevrimdışıyken kabuk açılabilir, fakat **canlı otobüs bilgisi** için API ve internet erişimi şarttır.

## Test ve yayın kontrolü

- `node --check app.js` — sözdizimi.
- `node tests/test_v4_node.cjs` — 13/13M filtre, Berrak/Dinç seçimi, 4→2→1 ve 10 durak sınırı, hedef işareti, belirsizlik.
- `python tests/preview_v4.py` — `playwright` Python paketi ve Chromium kurulu ortamda mobil genişlikli tarayıcı testi; `preview_v4.png` üretir.
- Gerçek telefonda iki durağı seçip ayrı canlı araç listesini doğrulayın; 8 veya daha fazla durak uzaktaki bir araçta **5'ten uzun** çizelgenin açıldığını kontrol edin.
- **Henüz doğrulanmamış:** İETT'den gerçek durak geçişi bazında hata payı; varyantı belirsiz uzak araçlarda doğru sıra; PWA önbellek güncellemesinin her telefon sürümünde aynı hızla gerçekleşmesi.

## Bakım kararı

Veri kaynağı üçüncü taraf API'dir; servis yapısı ve erişimi değişirse uygulama etkilenebilir. Öncelik ekranı karmaşıklaştırmak yerine **güvenilir, anlaşılır durak sayısı** göstermektir. Güzergâh belirsizliğini gizlemek veya doğrulanmamış GPS eşleşmesini kesin konum gibi sunmak kabul edilmiyor.
## V4.1 — Güzergâh belirsizliği ve kompakt ekran (04.11.2026)

- Durak çizelgeleri varsayılan kapalıdır; dokununca açılır ve seçili aracın açık/kapalı durumu her yenilemede korunur.
- Olası güzergâhlar birbirinden ayrılıyorsa, hedefe yakın ortak duraklar ile öncesindeki olası duraklık bölüm farklı gösterilir.
- Olası bölümde araç tek bir kesin konuma yerleştirilmez; alternatif yolların durak adları iç içe açılır bölümde görüntülenir.
- Araç GPS'i ilerledikçe ortak bir ileri rota eşleşmesi oluşursa alternatif bölüm otomatik kaybolur. Bu, sefer varyantı veya durak geçişini doğrulamaz.
- İETT 13M hariç, 13 Kadıköy yönü; Berrak Sitesi (224031) ve Dinç Sokak (200051) seçimi devam eder.
- GitHub Pages main / root üzerinden yayımlanır. Önbellek sürümü dinc13-shell-v4.1.0.
- Test: node sözdizimi, sahte DOM ve Playwright mobil genişlikli görsel testler başarılı. Gerçek GPS geçişi ayrı doğrulanmalıdır.


## V4.2 — Süre/GPS tutarlılık ve ani konum sıçraması denetimi

- Normalleşmiş API ETA (`eta_minutes`) **değiştirilmez**. `eta <= 2 dk` ve GPS'e göre en az **5 durak**, veya `eta <= 5 dk` ve en az **8 durak** kalmışsa **Süre şüpheli** uyarısı çıkar. Bu eşikler saha testine açık korumacı başlangıç kurallarıdır, istatistiksel olarak kalibre edilmiş eşikler değildir.
- Çelişkili ETA, kartta soru işareti ve sarı uyarı ile gösterilir; başka çelişkisiz araçlar varken ETA sıralamasında arkaya alınır. Kaynağın kendi ETA'sını düzeltmeye çalışmaz. Durak sayısı her zaman GPS tahminidir.
- Cihaz açıkken her hat/durak/araç için son makul GPS gözlemi bellekte tutulur. İki farklı `last_seen_ts` gözlemi 180 s içinde 220 metreden veya `37 m/s × Δt + 120 m` eşiğinden fazla sıçrarsa **GPS değişimi** uyarısı üretilir. Aynı sürede tahmini en az 3 durak geri gidildiğinde de uyarı çıkar.
- İlk ani konum değişiminde önceki makul durak tahmini **geçici ve açıkça etiketlenmiş** olarak gösterilir. Sıçrayan konumdan iki tutarlı veri gelirse yeni konum alınır, ancak güzergâh doğrulandığı iddia edilmez. Kayıtlar diske yazılmaz; 10 dakikada atılır.
- GPS zamanı yoksa veya 240 saniyeden eskiyse durak tahmini gösterilmez. 13/13M tam kod filtresi ve Kadıköy yönü korunur. Gizlenen araçların sayısı da gösterilir.
- Başarı ölçütü: 1 dk/10 durak çelişkisini işaretlemek, 1 dk/2 durak makul örneğini gereksiz işaretlememek, iki durakta ayırıcı filtreyi korumak ve ardışık GPS sıçramalarında sahte durak düşüşü göstermemek.
