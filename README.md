# 13 Otobüs Takip — PWA V3

İETT'nin Kadıköy yönüne giden yalnızca **13** numaralı otobüslerini izleyen hafif PWA. **13M dahil değildir.**

## Duraklar
- **Dinç Sokak** — 200051
- **Berrak Sitesi (Şenol Güneş Bulvarı)** — 224031

Seçilen durak cihazda saklanır (eski `dinc13-v2-stop` anahtarı korunmuştur). Her 30 saniyede seçili durağın ayrı geliş servisi sorgulanır.

## Son 5 durak çizelgesi

- Sıralı son durak adları; geçmiş olduğu tahmin edilen duraklar ve yaklaşmakta olduğu tahmin edilen bir sonraki durak gösterilir.
- Otobüs son bölüme girmediyse bunun bilgisi yazılır.
- Alternatif güzergâhlarda yalnızca tüm olası varyantların ortak son durakları gösterilir. Konum güvenilir eşleşmiyorsa marker yerleştirilmez.
- **Hedef durak yeşil boş halka ile işaretlenir:** araç ulaştı anlamında yeşil onay kullanılmaz.
- İlk aracın çizelgesi açık, ikincininki katlanmış olarak başlar. Kullanıcı açma tercihi 30 saniyelik yenilemede korunur.

## Veri sınırları

`https://iettapi.pcislocked.net/v1/stops/{code}/arrivals` içindeki koordinatlar yerleşik durak bilgileriyle karşılaştırılır. Yol geometrisi ve durak geçiş olayı doğrulanmadığı için **bütün durak/geçiş gösterimleri GPS temelli tahmindir**. Farklı güzergâhlar, GPS gecikmesi veya bir kavşak eşleşmeyi etkileyebilir. Araçların gerçek geçişleri fiziksel veya ayrı kaynakla doğrulanmalıdır.

## Yayım

GitHub Pages, `main`, `/(root)`. PWA kabuğu `dinc13-shell-v3.0.0` önbelleğiyle sürümlenir. Canlı API yanıtları çevrimdışında saklanmaz.
