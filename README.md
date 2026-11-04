# 13 · Dinç Sokak — PWA V1

İETT 13 numaralı hattın **Kadıköy yönünde**, **Dinç Sokak (200051)** durağına yaklaşan **ilk iki** otobüsünü gösterir. **13M dahil değildir.**

## Çalışma biçimi

- Tek API sorgusu: `https://iettapi.pcislocked.net/v1/stops/200051/arrivals`
- `route_code === "13"` ve hedefte `KADIKÖY` filtresi.
- Kalan duraklar, 9 Kadıköy yönlü güzergâh varyantına ait durak koordinatlarına GPS izdüşümüyle **tahmini** hesaplanır. Varyant belirsizse aralık gösterilir.
- Geliş süreleri API'den alınır, durak sayısı tahminidir; ikisi birebir örtüşmeyebilir.
- 30 saniyede bir yalnızca sayfa görünürken güncellenir, yeniden görünür olduğunda hemen yenilenir.
- Konum erişimi, hesap veya arka planda sunucu gerekmez.
- Service worker yalnızca uygulama kabuğunu çevrimdışı önbelleğe alır; **canlı otobüs verisini önbelleğe almaz**. İnternet/API yoksa hata gösterilir.
- Üçüncü taraf API'nin erişilebilirliği ve izinleri zamanla değişebilir; ileride CORS veya oran sınırlaması olursa veri çekilemeyebilir.

## GitHub Pages'e yükleme

1. GitHub'da yeni bir **public** depo oluştur (örnek: `dinc-sokak-13`). **Dikkat:** depo ve yayınlanan sayfa herkese açık olacağından takip ettiğin hat ve durak da açık olur.
2. ZIP dosyasını aç; bu dizindeki **dosyaları ve `icons` klasörünü** deponun kök dizinine yükle. `index.html` üst düzeyde kalmalı; ZIP'i tek dosya olarak yükleme.
3. Depo ayarlarında **Settings → Pages → Build and deployment → Source: Deploy from a branch**, `main`, `/(root)` seç ve **Save**.
4. GitHub Pages bölümündeki **Visit site** bağlantısını aç. `https://KULLANICI.github.io/dinc-sokak-13/` benzeri HTTPS adreste çalışmalı.
5. Android Chrome'da sayfayı aç, menüden **Uygulamayı yükle** veya **Ana ekrana ekle** seç. PWA kendi simgesiyle açılır.

> PWA olarak kurulabilmesi için sayfanın HTTPS adresinden açılması gerekir. Önceki `content://` yöntemi kurulu PWA değildir.

## Proje dosyaları

- `index.html`: arayüz
- `app.css`: mobil görünüm
- `app.js`: API/filtre, GPS/durak tahmin algoritması
- `manifest.webmanifest`: kurulum bilgileri
- `sw.js`: uygulama kabuğu önbelleği
- `icons/*.png`: uygulama ikonları
- `.nojekyll`: GitHub Pages'in dosyaları doğrudan sunmasını sağlar

## Test ve sınırlamalar

- Önceki prototipte C-275 için 6 → 3 → 1 durak görülmüş, araç sonra listeden çıkmıştır. Bu, GPS tahmininin ilerlemeyi izlediğini destekler; fiziksel durak geçişi bağımsız doğrulanmış değildir.
- `stop_sequence` servis alanı varyant ID'si içermediğinden tüm araçlara kesin durak sayısı vermek mümkün değildir.
- `last_seen_ts` 4 dakikadan eskiyse hesaplama "Veri eski" olarak engellenir (saat dilimi cihaz ayarına bağlıdır).
- Servis kesilirse PWA kabuğu açılabilir fakat canlı araç verisi gelmez.

## V1 sürüm notları

- Mevcut çalışan güzergâh tahmin fonksiyonu korunmuştur.
- Sadece ilk iki araç gösterilir; üç ve üzeri olduğunda kaçının gizli olduğu belirtilir.
- Sıralama API'nin `eta_minutes` değerine göredir.
- Yerel konum izni kullanılmaz.