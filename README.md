# 🌱 Karbon Ayak İzi Hesaplayıcısı

Modern, kullanıcı dostu bir karbon ayak izi hesaplama aracı. Bireysel karbon emisyonlarınızı hesaplayın ve çevre dostu yaşam için adımlar atın.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Frontend Only](https://img.shields.io/badge/Frontend_Only-✅-green?style=for-the-badge)

## ✨ Özellikler

### 🧮 Kapsamlı Hesaplama
- **Ulaşım:** Uçak, araba, motor, otobüs, metro
- **Elektrik:** Ev elektrik tüketimi
- **Doğalgaz:** Tüm ısıtma yakıtları (doğalgaz, fuel oil, LPG, kömür, odun)
- **Diğer:** Gıda tüketimi ve malzeme kullanımı

### 📱 Modern Arayüz
- Responsive tasarım (mobil uyumlu)
- Adım adım form süreci
- Görsel sonuç raporları
- Sektör bazında detaylı analiz

### 🌳 Çevresel Eylem
- Gerçek ağaç dikim bağışı entegrasyonu
- TEMA Vakfı partnership
- Karbon nötralizasyon önerileri

### 📊 Eğitici İçerik
- İklim değişikliği istatistikleri
- Uluslararası standartlar bilgisi
- Yeşil yaşam önerileri
- Türkiye İklim Kanunu bilgilendirmesi

## 🚀 Teknoloji Stack

Bu proje **tamamen frontend-only** bir uygulamadır:

- **Framework:** Next.js 15.4.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Radix UI + Custom Components
- **Icons:** Lucide React
- **Build:** Turbopack (development)
- **Deployment:** Static Export Ready

### 🎯 Neden Frontend-Only?

- ✅ **Basit Deployment:** Herhangi bir static hosting'de çalışır
- ✅ **Hızlı Performans:** API çağrısı yok, anında hesaplama
- ✅ **Gizlilik:** Kullanıcı verileri sunucuya gönderilmez
- ✅ **Offline Çalışma:** İnternet bağlantısı olmadan hesaplama yapabilir
- ✅ **Maliyet:** Backend maliyeti yok

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adım 1: Projeyi İndirin
```bash
git clone https://github.com/yourusername/carbon-system.git
cd carbon-system
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
npm install
```

### Adım 3: Development Server'ı Başlatın
```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Adım 4: Production Build
```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
carbon-system/
├── app/                      # Next.js App Router sayfaları
│   ├── page.tsx             # Ana hesaplayıcı sayfası
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global CSS
│   ├── hakkinda/            # Hakkında sayfası
│   ├── iletisim/            # İletişim sayfası
│   ├── istatistikler/       # İstatistikler sayfası
│   ├── uluslararasi-standartlar/  # Standartlar sayfası
│   └── yesil-adim/          # Yeşil yaşam önerileri
├── components/              # React bileşenleri
│   ├── navbar.tsx           # Navigation bar
│   └── ui/                  # UI bileşenleri (Radix UI based)
├── lib/                     # Utility fonksiyonları
├── public/                  # Static dosyalar
├── package.json             # Proje bağımlılıkları
├── tailwind.config.ts       # Tailwind konfigürasyonu
├── next.config.ts           # Next.js konfigürasyonu
└── tsconfig.json           # TypeScript konfigürasyonu
```

## 🧮 Emisyon Faktörleri

Uygulama, güncel bilimsel kaynaklara dayanan emisyon faktörlerini kullanır:

### Ulaşım
- **Uçak:** 0.15 kgCO2e/km
- **Benzinli Araç:** 0.192 kgCO2e/km  
- **Dizel Araç:** 0.171 kgCO2e/km
- **Otobüs:** 0.082 kgCO2e/km
- **Metro/Tramvay:** 0.035 kgCO2e/km

### Enerji
- **Elektrik (TR Grid):** 0.35 kgCO2e/kWh
- **Doğalgaz:** 0.202 kgCO2e/kWh
- **Fuel Oil:** 2.68 kgCO2e/L
- **LPG:** 3.0 kgCO2e/kg

### Gıda (LCA Ortalama)
- **Dana Eti:** 40.0 kgCO2e/kg
- **Kuzu Eti:** 24.0 kgCO2e/kg
- **Tavuk:** 6.0 kgCO2e/kg
- **Süt:** 1.2 kgCO2e/L

## 📱 Kullanım

1. **Sektör Seçimi:** Hesaplamak istediğiniz sektörleri seçin
2. **Veri Girişi:** Her sektör için tüketim verilerinizi girin
3. **Sonuç Görüntüleme:** Toplam karbon ayak izinizi ve sektör dağılımını görün
4. **Eylem Planı:** Karbon nötralizasyonu için ağaç dikim önerilerini görün

## 🌍 Çevresel Etki

### Karbon Nötralizasyon
- **Ağaç Dikim Oranı:** 1 ağaç = ~50kg CO2 (20 yıl)
- **TEMA Vakfı Entegrasyonu:** Direkt bağış bağlantısı
- **Şeffaflık:** Açık hesaplama formülleri

### Eğitim ve Farkındalık
- Türkiye İklim Kanunu bilgilendirmesi
- Uluslararası iklim hedefleri
- Bireysel eylem önerileri

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# out/ klasörünü Netlify'a yükleyin
```

### GitHub Pages
```bash
npm run build
# out/ klasörünü gh-pages branch'ine push edin
```

### Diğer Static Hosting
Herhangi bir static file hosting servisi kullanabilirsiniz (AWS S3, Cloudflare Pages, vb.)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Web:** [Karbon Hesaplayıcı](https://your-domain.com)
- **Email:** contact@your-domain.com
- **TEMA Vakfı:** [tema.org.tr](https://www.tema.org.tr)

## 🙏 Teşekkürler

- **TEMA Vakfı:** Ağaç dikim partnership
- **Radix UI:** Erişilebilir UI bileşenleri
- **Tailwind CSS:** Modern styling framework
- **Next.js:** React framework
- **Lucide:** Beautiful icons

---

**🌱 Gelecek nesillere yaşanabilir bir dünya bırakalım!**
