import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TreePine, Leaf, BarChart3, Target, Globe } from 'lucide-react'

export default function HakkindaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">Karbon Ayak İzi Nedir?</h1>
            <TreePine className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Karbon ayak izi, bir kişi, organizasyon, etkinlik veya ürünün atmosfere saldığı sera gazlarının toplam miktarıdır.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tanım */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Target className="h-6 w-6" />
                Karbon Ayak İzi Tanımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>Karbon ayak izi</strong>, Kyoto Protokolü tarafından belirlenmiş üretim, hizmet, 
                  işletme gibi faaliyetler sonucu oluşan sera gazlarının etkilerinin 
                  <span className="text-green-700 font-semibold"> karbondioksit (CO₂) cinsinden eşdeğerlerinin hesaplanması</span> 
                  çalışmasıdır.
                </p>
                <p className="text-gray-700 mb-4">
                  Karbon ayak izi azaltma işleminden önce karbon ayak izi hesaplaması yapılmalıdır. 
                  Karbon ayak izinin nasıl ve ne kadar azaltılacağı tam olarak bilinmemektedir.
                </p>
                <p className="text-gray-700">
                  Hesaplama ardından emisyon kaynakları incelenerek alternatif çözümler ile 
                  karbon ayak izinin azaltılması mümkündür.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* İstatistikler */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <BarChart3 className="h-6 w-6" />
                Önemli İstatistikler
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="text-3xl font-bold text-yellow-700 mb-2">%40</div>
                  <p className="text-yellow-800">
                    Enerji tüketiminin önceki senelere göre artış gösterdiği günümüzde, 
                    enerjinin <strong>%80&apos;i</strong> fosil kaynaklı üretim tesislerinden sağlanıyor.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="text-3xl font-bold text-red-700 mb-2">2°C</div>
                  <p className="text-red-800">
                    2015 yılının sonunda Birleşmiş Milletler tarafından düzenlenen Paris Konferansında 
                    küresel ısınmanın <strong>100 yılın sonunda 2 derece ile sınırlandırılmasına</strong> karar verildi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Neden Önemli */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Globe className="h-6 w-6" />
                Neden Önemli?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>İklim Değişikliği:</strong> Fosil yakıt kullanımı her geçen gün iklim değişikliğine 
                    sebep olmakta ve bu durum ciddi çevresel sorunlara yol açmaktadır.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Sürdürülebilirlik:</strong> Gelecek nesillere yaşanabilir bir dünya bırakmak 
                    için karbon emisyonlarımızı azaltmamız gerekiyor.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Bireysel Sorumluluk:</strong> Her birey kendi karbon ayak izini azaltarak 
                    küresel çevre korumasına katkı sağlayabilir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
