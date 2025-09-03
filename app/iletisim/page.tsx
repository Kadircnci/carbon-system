import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, TreePine, Leaf } from 'lucide-react'

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">İletişim</h1>
            <TreePine className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Karbon ayak izi hesaplama aracımız hakkında sorularınız mı var? Bizimle iletişime geçin!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* İletişim Formu */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Send className="h-6 w-6" />
                  Mesaj Gönder
                </CardTitle>
                <CardDescription className="text-green-600">
                  Sorularınızı ve önerilerinizi bizimle paylaşın
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-green-800">Ad Soyad</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Adınızı yazın"
                        className="border-green-200 bg-white focus:border-green-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-green-800">E-posta</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@email.com"
                        className="border-green-200 bg-white focus:border-green-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-green-800">Konu</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="Mesajınızın konusu"
                      className="border-green-200 bg-white focus:border-green-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-green-800">Mesaj</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      className="border-green-200 bg-white focus:border-green-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Phone className="h-6 w-6" />
                    İletişim Bilgileri
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-medium text-green-800">E-posta</div>
                        <div className="text-green-700">info@karbonhesaplayici.com</div>
                        <div className="text-green-700">destek@karbonhesaplayici.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-medium text-green-800">Telefon</div>
                        <div className="text-green-700">+90 (212) 555 0123</div>
                        <div className="text-green-700">+90 (532) 555 0123</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-medium text-green-800">Adres</div>
                        <div className="text-green-700">
                          Çevre Teknolojileri Merkezi<br />
                          Maslak Mahallesi<br />
                          İstanbul, Türkiye
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <TreePine className="h-6 w-6" />
                    Misyonumuz
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 text-green-700">
                    <p>
                      Karbon ayak izi hesaplama aracımızla bireysel ve kurumsal çevre bilincini 
                      artırmayı hedefliyoruz.
                    </p>
                    <p>
                      Sürdürülebilir bir gelecek için uluslararası standartlara uygun, 
                      kullanıcı dostu çözümler sunuyoruz.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Leaf className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800">
                        Yeşil bir dünya için birlikte çalışalım!
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Çalışma Saatleri</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2 text-green-700">
                    <div className="flex justify-between">
                      <span>Pazartesi - Cuma</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cumartesi</span>
                      <span className="font-medium">09:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar</span>
                      <span className="font-medium">Kapalı</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
