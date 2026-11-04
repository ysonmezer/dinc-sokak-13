# 13 Otobüs Takip — PWA V2

İETT'nin **13 numaralı hattını**, yalnızca **Kadıköy yönünde** takip eden küçük Android PWA. **13M dışarıda tutulur**; kapı numarası M ile başlayan ama route_code alanı 13 olan otobüsler yanlışlıkla elenmez.

## Biniş durakları

- **Dinç Sokak:** İETT durak kodu 200051 (V1'in durağı).
- **Berrak Sitesi:** Kullanıcının yerel adlandırması; İETT durağı **Şenol Güneş Bulvarı**, durak kodu 224031.
- Üstteki iki düğmeyle geçiş yapılır; son seçim cihazdaki localStorage içinde hatırlanır.
- Ayrı uç noktalar: https://iettapi.pcislocked.net/v1/stops/200051/arrivals ve https://iettapi.pcislocked.net/v1/stops/224031/arrivals.
- Durak değiştirildiğinde önceki sorgu iptal edilir; yeni durak için ayrı sorgu başlatılır.

## Tahminler ve görsel çizgi

- Tam hat filtresi: route_code === "13"; Kadıköy varış yönü ek koşul.
- Kaynak stops.json'un **9 Kadıköy yönlü varyantının** Dinç Sokak'a kadar olan durak koordinatları V1'den korunur.
- Şenol Güneş Bulvarı'nı içermeyen kısa güzergâhlar bu durağın GPS hesabına dahil edilmez.
- Bir aracın konumu sıralı durakların oluşturduğu çizgiye izdüşürülür; 250 m'den uzak konumlarda güvenilir eşleşme yapılmaz.
- Olası varyantlar farklı sonuçlar verirse **kalan durak aralığı** gösterilir. Adayların sıradaki durak adı aynıysa görsel çizgide bu ad kullanılır.
- **Görsel ilerleme ve durak sayısı GPS tabanlı tahmindir**, doğrulanmış durak geçişi değildir.
- Sağdaki dakika değeri API tarafından sağlanan **ayrı** bir geliş tahminidir. Durak sayısı ve dakika her zaman birbiriyle uyuşmayabilir.
- 4 dakikadan eski GPS saatlerinde durak sayısı yerine eski veri uyarısı gösterilir.

## Çalıştırma ve yayın

- Uygulama dosyaları: index.html, app.css, app.js, manifest.webmanifest, sw.js, icons.
- GitHub Pages: https://ysonmezer.github.io/dinc-sokak-13/
- Android Chrome'da adresi açıp **Uygulamayı yükle** / **Ana ekrana ekle** seçilir.
- Sayfa görünürken yaklaşık 30 saniyede bir yenilenir; arka planda sürekli GPS kullanılmaz.
- Service worker yalnızca uygulama kabuğunu önbelleğe alır. **Canlı API yanıtları önbelleğe alınmaz**.

## Test durumu ve sınırlamalar

- V1 için Dinç Sokak'ta kullanıcı tarafından canlı test yapıldı: C-275 tahmini 6→3→1 durak ilerledi ve listeden çıktı.
- V2'nin seçime göre iki farklı URL sorgulaması ve yalnız 13'ü filtrelemesi örnek verilerle sınandı.
- **224031 için gerçek İETT canlı yanıtı henüz kullanıcı cihazında doğrulanmadı.** Bu yüzden V2, her iki durak telefonda canlı test edilene kadar pilot sürüm sayılmalı.
- Üçüncü taraf iettapi.pcislocked.net servisinin çalışma süresi, CORS ve veri doğruluğu garanti değildir.
- Depo ve GitHub Pages herkese açıktır.
