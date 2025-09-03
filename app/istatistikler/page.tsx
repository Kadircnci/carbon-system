import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, Globe, MapPin, Factory, Users, Target } from 'lucide-react'

export default function IstatistiklerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">Karbon Emisyon İstatistikleri</h1>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Türkiye ve dünya genelindeki karbon emisyon verileri ve iklim değişikliği trendleri
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Global İstatistikler */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Globe className="h-6 w-6" />
                Küresel Karbon Emisyon Verileri
              </CardTitle>
              <CardDescription className="text-green-600">
                Dünya genelindeki sera gazı emisyonları ve trendler
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                  <div className="text-3xl font-bold text-red-700 mb-2">36.8 Gt</div>
                  <div className="text-red-600 text-sm font-medium">Yıllık Küresel CO₂</div>
                  <div className="text-red-500 text-xs mt-1">2023 verileri</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">+1.1°C</div>
                  <div className="text-orange-600 text-sm font-medium">Küresel Isınma</div>
                  <div className="text-orange-500 text-xs mt-1">1850-1900 ortalaması</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">421 ppm</div>
                  <div className="text-blue-600 text-sm font-medium">Atmosferik CO₂</div>
                  <div className="text-blue-500 text-xs mt-1">Tarihi rekor seviye</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">30%</div>
                  <div className="text-green-600 text-sm font-medium">Yenilenebilir Enerji</div>
                  <div className="text-green-500 text-xs mt-1">Küresel elektrik üretimi</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Türkiye İstatistikleri */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <MapPin className="h-6 w-6" />
                Türkiye Karbon Emisyon Profili
              </CardTitle>
              <CardDescription className="text-green-600">
                Ülkemizin emisyon durumu ve hedefleri
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Temel Veriler</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Toplam CO₂ Emisyonu</span>
                      <Badge className="bg-red-100 text-red-800">429 Mt CO₂</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Kişi Başı Emisyon</span>
                      <Badge className="bg-orange-100 text-orange-800">5.1 t CO₂/kişi</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Dünya Sıralaması</span>
                      <Badge className="bg-blue-100 text-blue-800">16. sırada</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Küresel Payı</span>
                      <Badge className="bg-yellow-100 text-yellow-800">%1.2</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Sektörel Dağılım</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-gray-700 flex-1">Enerji</span>
                      <span className="font-semibold text-red-700">72%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span className="text-gray-700 flex-1">Sanayi İşlemleri</span>
                      <span className="font-semibold text-orange-700">13%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-gray-700 flex-1">Tarım</span>
                      <span className="font-semibold text-green-700">8%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span className="text-gray-700 flex-1">Atık</span>
                      <span className="font-semibold text-purple-700">4%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-gray-700 flex-1">Diğer</span>
                      <span className="font-semibold text-blue-700">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sektörel Detay */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Factory className="h-6 w-6" />
                Sektör Bazında Emisyon Analizi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-3">Enerji Sektörü</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">Elektrik Üretimi</span>
                      <span className="font-medium">%35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Ulaştırma</span>
                      <span className="font-medium">%15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Isıtma/Soğutma</span>
                      <span className="font-medium">%12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Diğer</span>
                      <span className="font-medium">%10</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-3">Sanayi</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-700">Çimento</span>
                      <span className="font-medium">%4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Demir-Çelik</span>
                      <span className="font-medium">%4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Kimya</span>
                      <span className="font-medium">%3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-700">Diğer</span>
                      <span className="font-medium">%2</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">Tarım & Arazi</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">Hayvancılık</span>
                      <span className="font-medium">%5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Tarımsal Toprak</span>
                      <span className="font-medium">%2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Orman Kaybı</span>
                      <span className="font-medium">%1</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bireysel Karşılaştırma */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Users className="h-6 w-6" />
                Bireysel Karbon Ayak İzi Karşılaştırması
              </CardTitle>
              <CardDescription className="text-green-600">
                Dünya genelindeki kişi başı ortalama emisyon verileri
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-700 mb-1">16.1</div>
                  <div className="text-red-600 font-medium">ABD</div>
                  <div className="text-red-500 text-xs">tCO₂/kişi/yıl</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-700 mb-1">7.4</div>
                  <div className="text-orange-600 font-medium">AB Ortalaması</div>
                  <div className="text-orange-500 text-xs">tCO₂/kişi/yıl</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-700 mb-1">5.1</div>
                  <div className="text-yellow-600 font-medium">Türkiye</div>
                  <div className="text-yellow-500 text-xs">tCO₂/kişi/yıl</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-700 mb-1">4.6</div>
                  <div className="text-green-600 font-medium">Dünya Ortalaması</div>
                  <div className="text-green-500 text-xs">tCO₂/kişi/yıl</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hedefler ve Projeksiyonlar */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Target className="h-6 w-6" />
                İklim Hedefleri ve Projeksiyonlar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Türkiye&apos;nin Hedefleri</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded border border-blue-200">
                      <div className="font-medium text-blue-800">2030 Hedefi</div>
                      <div className="text-blue-700 text-sm">%21 emisyon azaltımı (BAU&apos;ya göre)</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <div className="font-medium text-green-800">2053 Hedefi</div>
                      <div className="text-green-700 text-sm">Net sıfır emisyon (karbon nötrlüğü)</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded border border-purple-200">
                      <div className="font-medium text-purple-800">Yenilenebilir Enerji</div>
                      <div className="text-purple-700 text-sm">2030&apos;da %38 hedefi</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Küresel Hedefler</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded border border-red-200">
                      <div className="font-medium text-red-800">Paris Anlaşması</div>
                      <div className="text-red-700 text-sm">Küresel ısınmayı 1.5°C ile sınırla</div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <div className="font-medium text-orange-800">2030 Küresel Hedef</div>
                      <div className="text-orange-700 text-sm">%45 emisyon azaltımı (2010 baz)</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <div className="font-medium text-green-800">2050 Net Sıfır</div>
                      <div className="text-green-700 text-sm">100+ ülke taahhüt verdi</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
