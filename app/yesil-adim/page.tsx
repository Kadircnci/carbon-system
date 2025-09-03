import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TreePine, Leaf, Lightbulb, Car, Home, Recycle, Droplets, Zap, ShoppingCart, Plane } from 'lucide-react'

export default function YesilAdimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePine className="h-10 w-10 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">Yeşil Bir Adım At!</h1>
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Karbon ayak izinizi azaltmak için uygulayabileceğiniz pratik öneriler ve 
            sürdürülebilir yaşam rehberi
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Evde Enerji Tasarrufu */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Home className="h-6 w-6" />
                Evde Enerji Tasarrufu
              </CardTitle>
              <CardDescription className="text-green-600">
                Günlük hayatınızda uygulayabileceğiniz basit ama etkili yöntemler
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">Aydınlatma</h4>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• LED ampul kullanın</li>
                    <li>• Gereksiz ışıkları kapatın</li>
                    <li>• Doğal ışıktan yararlanın</li>
                    <li>• Hareket sensörlü aydınlatma</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Elektronik Cihazlar</h4>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Bekleme modundan çıkartın</li>
                    <li>• A+ enerji sınıfı seçin</li>
                    <li>• Akıllı priz kullanın</li>
                    <li>• Cihazları tamamen kapatın</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-800">Isıtma/Soğutma</h4>
                  </div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Termostatı ayarlayın (20-22°C)</li>
                    <li>• Yalıtımı iyileştirin</li>
                    <li>• Pencereleri havalandırın</li>
                    <li>• Kalın perdeler kullanın</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ulaşım */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Car className="h-6 w-6" />
                Sürdürülebilir Ulaşım
              </CardTitle>
              <CardDescription className="text-green-600">
                Karbon emisyonunuzu azaltacak ulaşım alternatifleri
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800 mb-3">Günlük Ulaşım</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-green-100 text-green-800">%100 Azalım</Badge>
                      <div>
                        <p className="font-medium text-gray-800">Yürüyüş ve Bisiklet</p>
                        <p className="text-sm text-gray-600">Kısa mesafeler için ideal seçim</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-blue-100 text-blue-800">%80 Azalım</Badge>
                      <div>
                        <p className="font-medium text-gray-800">Toplu Taşıma</p>
                        <p className="text-sm text-gray-600">Metro, otobüs, tramvay kullanın</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-purple-100 text-purple-800">%50 Azalım</Badge>
                      <div>
                        <p className="font-medium text-gray-800">Araç Paylaşımı</p>
                        <p className="text-sm text-gray-600">Carpool, car sharing hizmetleri</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800 mb-3">Uzun Mesafe</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Plane className="w-5 h-5 text-gray-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Uçuş Yerine Alternatifler</p>
                        <p className="text-sm text-gray-600">Tren, otobüs gibi seçenekleri değerlendirin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Hibrit/Elektrikli Araç</p>
                        <p className="text-sm text-gray-600">Yenilenebilir enerji kaynaklı şarj</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tüketim Alışkanlıkları */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <ShoppingCart className="h-6 w-6" />
                Bilinçli Tüketim
              </CardTitle>
              <CardDescription className="text-green-600">
                Satın alma kararlarınızla çevreyi koruyun
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">Gıda Tercihleri</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 mt-0.5" />
                      Yerel ve mevsimlik ürünler
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 mt-0.5" />
                      Organik tarım ürünleri
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 mt-0.5" />
                      Bitki bazlı protein kaynakları
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 mt-0.5" />
                      Gıda israfını önleyin
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Su Tasarrufu</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Droplets className="w-4 h-4 mt-0.5" />
                      Kısa duş alın (5 dk)
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplets className="w-4 h-4 mt-0.5" />
                      Muslukları kapatmayı unutmayın
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplets className="w-4 h-4 mt-0.5" />
                      Yağmur suyu toplama
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplets className="w-4 h-4 mt-0.5" />
                      Ekonomik aletler kullanın
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">Geri Dönüşüm</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Recycle className="w-4 h-4 mt-0.5" />
                      Atıkları ayrıştırın
                    </li>
                    <li className="flex items-start gap-2">
                      <Recycle className="w-4 h-4 mt-0.5" />
                      Plastik kullanımını azaltın
                    </li>
                    <li className="flex items-start gap-2">
                      <Recycle className="w-4 h-4 mt-0.5" />
                      Yeniden kullanılabilir ürünler
                    </li>
                    <li className="flex items-start gap-2">
                      <Recycle className="w-4 h-4 mt-0.5" />
                      Kompost yapın
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hızlı İpuçları */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Lightbulb className="h-6 w-6" />
                Hemen Başlayabileceğiniz 10 Adım
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-green-800">Gereksiz ışıkları kapatın</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-green-800">Tek kullanımlık plastik kullanmayın</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-green-800">Kısa mesafelerde yürüyün</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-green-800">Su tasarrufu yapın</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                    <span className="text-green-800">Atıkları doğru şekilde ayrıştırın</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                    <span className="text-green-800">Yerel ürünleri tercih edin</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
                    <span className="text-green-800">Elektronik cihazları tamamen kapatın</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</span>
                    <span className="text-green-800">Toplu taşıma kullanın</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">9</span>
                    <span className="text-green-800">Gıda israfını önleyin</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">10</span>
                    <span className="text-green-800">Ağaç dikin veya destekleyin</span>
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
