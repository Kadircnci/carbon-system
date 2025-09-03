import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TreePine, Globe, Calendar, Target, Users, Award } from 'lucide-react'

export default function UluslararasiStandartlarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">Uluslararası Standartlar</h1>
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Uluslararası Standartlara uygun hızlı hesaplama modülümüz ile kurumsal/bireysel 
            karbon ayak izini hesapla, gelecek için Yeşil Bir Adım At!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Kyoto Protokolü */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Calendar className="h-6 w-6" />
                Kyoto Protokolü (1997)
              </CardTitle>
              <CardDescription className="text-green-600">
                İklim değişikliğiyle mücadelenin ilk küresel adımı
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">1997</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Sera Gazları</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Emisyon Azaltımı</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Kyoto Protokolü, <strong>Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi</strong>&apos;ne 
                  bağlı olarak geliştirilmiş uluslararası bir anlaşmadır. Bu protokol ile:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Sera gazı emisyonlarının azaltılması hedeflendi
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Gelişmiş ülkeler için bağlayıcı emisyon hedefleri belirlendi
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Karbon ticareti ve temiz kalkınma mekanizmaları oluşturuldu
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Paris Anlaşması */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Globe className="h-6 w-6" />
                Paris İklim Anlaşması (2015)
              </CardTitle>
              <CardDescription className="text-green-600">
                İklim değişikliğiyle mücadelede yeni bir dönem
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">2015</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">2°C Hedefi</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">1.5°C İdeal</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">195 Ülke</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Paris Anlaşması, küresel ısınmayı sınırlamak için tarihi bir mutabakat sağlamıştır:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Ana Hedef</h4>
                    <p className="text-red-700 text-sm">
                      Küresel sıcaklık artışının <strong>2°C&apos;nin altında</strong> tutulması ve 
                      mümkünse <strong>1.5°C ile sınırlandırılması</strong>
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Karbon Nötrlüğü</h4>
                    <p className="text-green-700 text-sm">
                      2050 yılına kadar küresel <strong>net sıfır emisyon</strong> hedefi ve 
                      sürdürülebilir kalkınma
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Temel İlkeler:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-green-600 mt-1" />
                      <span className="text-gray-700 text-sm">
                        <strong>Ulusal Katkı Beyanları (NDC):</strong> Her ülke kendi emisyon azaltım hedeflerini belirler
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <TreePine className="w-4 h-4 text-green-600 mt-1" />
                      <span className="text-gray-700 text-sm">
                        <strong>Şeffaflık:</strong> İlerleme ve sonuçların düzenli olarak raporlanması
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-green-600 mt-1" />
                      <span className="text-gray-700 text-sm">
                        <strong>Ambisyon Artışı:</strong> Her 5 yılda bir hedeflerin gözden geçirilmesi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Türkiye&apos;nin Durumu */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Award className="h-6 w-6" />
                Türkiye&apos;nin İklim Mücadelesindeki Konumu
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Türkiye&apos;nin iklim değişikliğiyle mücadelesinde <strong>tarihi bir adım</strong> atıldı. 
                  İklim Kanunu, 9 Temmuz 2025 tarihinde Resmî Gazete&apos;de yayımlanarak yürürlüğe girdi. 
                  Bu kanun ile birlikte Türkiye, düşük karbonlu kalkınma hedefleri doğrultusunda 
                  çevre ve iklim politikalarını yasal bir zemine kavuşturmuş oldu.
                </p>

                {/* İklim Kanunu&apos;nun Ana Unsurları */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <h3 className="font-bold text-blue-800 mb-4 text-lg">İklim Kanunu&apos;nun Kapsamı</h3>
                  <p className="text-blue-700 mb-4">
                    Kanun, iklim değişikliğiyle mücadelede kapsamlı ve bütüncül bir yaklaşımı 
                    benimseyerek aşağıdaki alanlarda somut düzenlemeleri içermektedir:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Sera gazı emisyonlarının azaltılması
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        İklim değişikliğine uyum stratejileri
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Enerji verimliliği artırımı
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Yenilenebilir enerji kullanımı
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Yeşil finansman mekanizmaları
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        İklim Şurası&apos;nın kurulması
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Ulusal emisyon ticaret sistemi
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        Yeşil dönüşüm uygulamalarının teşviki
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Yapısal Değişiklikler */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Yapısal Değişiklikler ve Kurumsal Düzenlemeler
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">İklim Şurası</h4>
                      <p className="text-xs text-green-600">
                        İklim politikalarının koordinasyonu ve karar verme süreçlerinin etkin yönetimi
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Emisyon Ticaret Sistemi</h4>
                      <p className="text-xs text-green-600">
                        Ulusal düzeyde sera gazı emisyon ticareti mekanizmasının oluşturulması
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Yeşil Dönüşüm</h4>
                      <p className="text-xs text-green-600">
                        Sürdürülebilir kalkınma uygulamalarının teşvik edilmesi ve yaygınlaştırılması
                      </p>
                    </div>
                  </div>
                </div>

                {/* Net Sıfır Hedefi */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-5">
                  <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    2053 Net Sıfır Emisyon Hedefi
                  </h3>
                  <p className="text-emerald-700 mb-3">
                    Bu gelişme, Türkiye&apos;nin <strong>2053 net sıfır emisyon hedefiyle</strong> uyumlu 
                    politikaların ve uygulamaların hayata geçirilmesi açısından önemli bir 
                    dönüm noktası olarak değerlendirilmektedir.
                  </p>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-emerald-800 font-semibold text-sm">
                      Kanun ile birlikte Türkiye, düşük karbonlu kalkınma hedefleri doğrultusunda 
                      çevre ve iklim politikalarını yasal bir zemine kavuşturmuş bulunmaktadır.
                    </p>
                  </div>
                </div>

                {/* Akademik ve Toplumsal Etki */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Akademik ve Toplumsal Katkı</h4>
                  <p className="text-purple-700 text-sm">
                    Fırat Üniversitesi İklim Değişikliği, Çevre ve Yeşil Kalkınma Uygulama ve Araştırma Merkezi 
                    gibi akademik kurumlar, bu tarihi adımı memnuniyetle karşılayarak iklim politikalarının 
                    yaygınlaştırılması, farkındalığın artırılması ve akademik katkı sağlanması amacıyla 
                    faaliyetlerini sürdürmektedir.
                  </p>
                </div>

                {/* İletişim ve Kaynak */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-gray-600 text-sm">
                    <strong>Kanun Metni:</strong> İklim Kanunu&apos;nun tam metni 9 Temmuz 2025 tarihli 
                    Resmî Gazete&apos;de yayımlanmıştır.
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
