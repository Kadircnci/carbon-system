'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Leaf, Calculator, BarChart3, TreePine, Zap, Car, UtensilsCrossed, Building, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

interface Results {
  totalEmissions: number
  bySector: Array<{
    sector: string
    emissions: number
  }>
}

const sectors = [
  {
    id: 'transport',
    name: 'Ulaşım',
    icon: Car,
    color: 'blue',
    description: 'Uçak, araba, motor'
  },
  {
    id: 'electricity',
    name: 'Elektrik',
    icon: Zap,
    color: 'yellow',
    description: 'Elektrik tüketimi'
  },
  {
    id: 'heating',
    name: 'Doğalgaz',
    icon: Building,
    color: 'orange',
    description: 'Doğalgaz ve ısıtma'
  },
  {
    id: 'fuel',
    name: 'Diğer',
    icon: UtensilsCrossed,
    color: 'green',
    description: 'Gıda, yakacak'
  }
]

const transportOptions = [
  { id: 'flight_domestic', name: 'İç Hat Uçak', unit: 'km' },
  { id: 'flight_international', name: 'Dış Hat Uçak', unit: 'km' },
  { id: 'car_gasoline', name: 'Benzinli Araç', unit: 'km' },
  { id: 'car_diesel', name: 'Dizel Araç', unit: 'km' },
  { id: 'motorcycle', name: 'Motorsiklet', unit: 'km' },
  { id: 'bus', name: 'Otobüs', unit: 'km' },
  { id: 'metro', name: 'Metro/Tramvay', unit: 'km' }
]

const electricityOptions = [
  { id: 'household_electricity', name: 'Ev Elektriği', unit: 'kWh' }
]

const heatingOptions = [
  { id: 'natural_gas', name: 'Doğalgaz', unit: 'kWh' },
  { id: 'heating_oil', name: 'Fuel Oil', unit: 'L' },
  { id: 'lpg', name: 'LPG', unit: 'kg' },
  { id: 'coal', name: 'Kömür', unit: 'kg' },
  { id: 'wood', name: 'Odun', unit: 'kg' }
]

const otherOptions = [
  { id: 'beef', name: 'Dana Eti', unit: 'kg' },
  { id: 'lamb', name: 'Kuzu Eti', unit: 'kg' },
  { id: 'poultry', name: 'Tavuk', unit: 'kg' },
  { id: 'milk', name: 'Süt', unit: 'L' },
  { id: 'cheese', name: 'Peynir', unit: 'kg' },
  { id: 'rice', name: 'Pirinç', unit: 'kg' },
  { id: 'paper', name: 'Kağıt', unit: 'kg' },
  { id: 'cement', name: 'Çimento', unit: 'kg' }
]

// Emisyon faktörleri (backend ile uyumlu)
const emissionFactors: Record<string, number> = {
  'flight_domestic': 0.15,
  'flight_international': 0.15,
  'car_gasoline': 0.192,
  'car_diesel': 0.171,
  'motorcycle': 0.15,
  'bus': 0.082,
  'metro': 0.035,
  'household_electricity': 0.35,
  'natural_gas': 0.202,
  'heating_oil': 2.68,
  'lpg': 3.0,
  'coal': 2.42,
  'wood': 1.8,
  'beef': 40.0,
  'lamb': 24.0,
  'poultry': 6.0,
  'milk': 1.2,
  'cheese': 13.5,
  'rice': 4.0,
  'paper': 1.3,
  'cement': 0.75
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'sectors' | 'form' | 'results'>('sectors')
  const [selectedSector, setSelectedSector] = useState<string>('')
  const [completedSectors, setCompletedSectors] = useState<string[]>([])
  const [results, setResults] = useState<Results | null>(null)
  const [sectorData, setSectorData] = useState<Record<string, Record<string, number>>>({
    transport: {},
    electricity: {},
    heating: {},
    fuel: {}
  })
  
  // Araç sahipliği state'leri
  const [hasMotorcycle, setHasMotorcycle] = useState<boolean | null>(null)
  const [hasCar, setHasCar] = useState<boolean | null>(null)
  const [carFuelType, setCarFuelType] = useState<'gasoline' | 'diesel'>('gasoline')

  const getSectorOptions = (sectorId: string) => {
    switch(sectorId) {
      case 'transport': return transportOptions
      case 'electricity': return electricityOptions  
      case 'heating': return heatingOptions
      case 'fuel': return otherOptions
      default: return []
    }
  }

  const calculateSectorEmissions = (sectorId: string, data: Record<string, number>) => {
    let totalEmissions = 0
    
    if (sectorId === 'transport') {
      // Uçak yolculukları (kgCO2e)
      const flightDomestic = (data.flight_domestic || 0) * emissionFactors.flight_domestic
      const flightIntl = (data.flight_international || 0) * emissionFactors.flight_international
      
      // Araç sahipliği kontrolü ile hesaplama (kgCO2e)
      const motorcycle = hasMotorcycle ? ((data.motorcycle || 0) * emissionFactors.motorcycle) : 0
      const carGasoline = hasCar ? ((data.car_gasoline || 0) * emissionFactors.car_gasoline) : 0
      const carDiesel = hasCar ? ((data.car_diesel || 0) * emissionFactors.car_diesel) : 0
      
      // Toplu taşıma (kgCO2e)
      const bus = (data.bus || 0) * emissionFactors.bus
      const metro = (data.metro || 0) * emissionFactors.metro
      
      totalEmissions = flightDomestic + flightIntl + motorcycle + carGasoline + carDiesel + bus + metro
      
    } else if (sectorId === 'electricity') {
      // Elektrik tüketimi (kgCO2e)
      totalEmissions = (data.household_electricity || 0) * emissionFactors.household_electricity
      
    } else if (sectorId === 'heating') {
      // Doğalgaz yıllık tüketim (kWh) -> kgCO2e
      const naturalGasEmissions = (data.natural_gas || 0) * emissionFactors.natural_gas
      
      // Diğer ısıtma yakıtları
      const heatingOil = (data.heating_oil || 0) * emissionFactors.heating_oil // L -> kgCO2e
      const lpg = (data.lpg || 0) * emissionFactors.lpg // kg -> kgCO2e
      const coal = (data.coal || 0) * emissionFactors.coal // kg -> kgCO2e
      const wood = (data.wood || 0) * emissionFactors.wood // kg -> kgCO2e
      
      totalEmissions = naturalGasEmissions + heatingOil + lpg + coal + wood
      
    } else if (sectorId === 'fuel') {
      // Gıda maddeleri ve diğer tüketim (kgCO2e)
      const beef = (data.beef || 0) * emissionFactors.beef
      const lamb = (data.lamb || 0) * emissionFactors.lamb  
      const poultry = (data.poultry || 0) * emissionFactors.poultry
      const milk = (data.milk || 0) * emissionFactors.milk
      const cheese = (data.cheese || 0) * emissionFactors.cheese
      const rice = (data.rice || 0) * emissionFactors.rice
      const paper = (data.paper || 0) * emissionFactors.paper
      const cement = (data.cement || 0) * emissionFactors.cement
      
      totalEmissions = beef + lamb + poultry + milk + cheese + rice + paper + cement
    }
    
    return totalEmissions / 1000 // Convert to tCO2e
  }

  const calculateTotalEmissions = () => {
    let total = 0
    sectors.forEach(sector => {
      total += calculateSectorEmissions(sector.id, sectorData[sector.id])
    })
    
    const bySector = sectors.map(sector => ({
      sector: sector.name,
      emissions: calculateSectorEmissions(sector.id, sectorData[sector.id])
    })).filter(s => s.emissions > 0).sort((a, b) => b.emissions - a.emissions)

    setResults({
      totalEmissions: total,
      bySector
    })
  }

  const updateSectorData = (sectorId: string, field: string, value: number) => {
    setSectorData(prev => ({
      ...prev,
      [sectorId]: {
        ...prev[sectorId],
        [field]: value
      }
    }))
  }

  const handleSectorSelect = (sectorId: string) => {
    setSelectedSector(sectorId)
    setCurrentStep('form')
  }

  const handleSectorComplete = () => {
    if (!completedSectors.includes(selectedSector)) {
      setCompletedSectors(prev => [...prev, selectedSector])
    }
    setCurrentStep('sectors')
    setSelectedSector('')
  }

  const handleBackToSectors = () => {
    setCurrentStep('sectors')
    setSelectedSector('')
  }

  const handleShowResults = () => {
    calculateTotalEmissions()
    setCurrentStep('results')
  }

  const handleRestart = () => {
    setCurrentStep('sectors')
    setSelectedSector('')
    setCompletedSectors([])
    setSectorData({
      transport: {},
      electricity: {},
      heating: {},
      fuel: {}
    })
    setResults(null)
  }

  const renderSectorForm = (sector?: { id: string; name: string; icon: React.ComponentType; color: string; description: string }) => {
    if (!sector) return null
    const data = sectorData[sector.id] || {}

    if (sector.id === 'transport') {
      return (
        <div className="space-y-6">
          {/* Flight Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
              ✈️ Ulaşım - Son 1 yıl içinde yaptığınız uçak seyahatlerini yazınız
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="flight_domestic" className="text-blue-800">Türkiye - Avrupa (km)</Label>
                <Input 
                  id="flight_domestic"
                  name="flight_domestic"
                  type="number" 
                  value={data.flight_domestic || ''} 
                  onChange={(e) => updateSectorData('transport', 'flight_domestic', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-blue-200 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="flight_international" className="text-blue-800">Avrupa - Amerika (km)</Label>
                <Input 
                  id="flight_international"
                  name="flight_international"
                  type="number" 
                  value={data.flight_international || ''} 
                  onChange={(e) => updateSectorData('transport', 'flight_international', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-blue-200 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Motor Section */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 mb-3 flex items-center gap-2">
              🏍️ Motor
            </h4>
            <div className="space-y-3">
              <div>
                <Label className="text-green-800">Motosikletiniz var mı?</Label>
                <div className="flex gap-4 mt-2">
                  <label htmlFor="motorcycle_yes" className="flex items-center gap-2">
                    <input 
                      id="motorcycle_yes" 
                      name="motorcycle_ownership" 
                      type="radio" 
                      className="rounded"
                      checked={hasMotorcycle === true}
                      onChange={() => setHasMotorcycle(true)}
                    />
                    <span>Var</span>
                  </label>
                  <label htmlFor="motorcycle_no" className="flex items-center gap-2">
                    <input 
                      id="motorcycle_no" 
                      name="motorcycle_ownership" 
                      type="radio" 
                      className="rounded"
                      checked={hasMotorcycle === false}
                      onChange={() => {
                        setHasMotorcycle(false)
                        updateSectorData('transport', 'motorcycle', 0)
                      }}
                    />
                    <span>Yok</span>
                  </label>
                </div>
              </div>
              <div>
                <Label htmlFor="motorcycle_km" className="text-green-800">Yıllık ortalama kaç km yol yapıyorsunuz?</Label>
                <Input 
                  id="motorcycle_km"
                  name="motorcycle_km"
                  type="number" 
                  value={hasMotorcycle === false ? '' : (data.motorcycle || '')} 
                  onChange={(e) => updateSectorData('transport', 'motorcycle', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                  disabled={hasMotorcycle === false}
                />
              </div>
            </div>
          </div>

          {/* Car Section */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-900 mb-3 flex items-center gap-2">
              🚗 Araba
            </h4>
            <div className="space-y-3">
              <div>
                <Label className="text-yellow-800">Arabanız var mı?</Label>
                <div className="flex gap-4 mt-2">
                  <label htmlFor="car_yes" className="flex items-center gap-2">
                    <input 
                      id="car_yes" 
                      name="car_ownership" 
                      type="radio" 
                      className="rounded"
                      checked={hasCar === true}
                      onChange={() => setHasCar(true)}
                    />
                    <span>Var</span>
                  </label>
                  <label htmlFor="car_no" className="flex items-center gap-2">
                    <input 
                      id="car_no" 
                      name="car_ownership" 
                      type="radio" 
                      className="rounded"
                      checked={hasCar === false}
                      onChange={() => {
                        setHasCar(false)
                        updateSectorData('transport', 'car_gasoline', 0)
                      }}
                    />
                    <span>Yok</span>
                  </label>
                </div>
              </div>
              <div>
                <Label htmlFor="car_fuel_type" className="text-yellow-800">Arabanızın yakıt türü nedir?</Label>
                <Select disabled={hasCar === false} onValueChange={(value) => setCarFuelType(value as 'gasoline' | 'diesel')}>
                  <SelectTrigger id="car_fuel_type" className="border-yellow-200 bg-white">
                    <SelectValue placeholder="Yakıt türü seçin" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-yellow-200">
                    <SelectItem value="gasoline">Benzin</SelectItem>
                    <SelectItem value="diesel">Dizel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="car_km" className="text-yellow-800">Yıllık ortalama kaç km yol yapıyorsunuz?</Label>
                <Input 
                  id="car_km"
                  name="car_km"
                  type="number" 
                  value={hasCar === false ? '' : (data[`car_${carFuelType}`] || '')} 
                  onChange={(e) => {
                    const fieldName = `car_${carFuelType}`
                    updateSectorData('transport', fieldName, parseFloat(e.target.value) || 0)
                    // Diğer yakıt türünü sıfırla
                    const otherFuelType = carFuelType === 'gasoline' ? 'diesel' : 'gasoline'
                    updateSectorData('transport', `car_${otherFuelType}`, 0)
                  }}
                  placeholder="0"
                  className="border-yellow-200 bg-white"
                  disabled={hasCar === false}
                />
              </div>
            </div>
          </div>

          {/* Public Transport Section */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 mb-3 flex items-center gap-2">
              🚌 Toplu Taşıma - Yıllık kullanım miktarınızı giriniz
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bus_km" className="text-green-800">Otobüs (km/yıl)</Label>
                <Input 
                  id="bus_km"
                  name="bus_km"
                  type="number" 
                  value={data.bus || ''} 
                  onChange={(e) => updateSectorData('transport', 'bus', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="metro_km" className="text-green-800">Metro/Tramvay (km/yıl)</Label>
                <Input 
                  id="metro_km"
                  name="metro_km"
                  type="number" 
                  value={data.metro || ''} 
                  onChange={(e) => updateSectorData('transport', 'metro', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (sector.id === 'electricity') {
      return (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-900 mb-3 flex items-center gap-2">
              ⚡ Elektrik
            </h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="household_people" className="text-yellow-800">Evinizde yaşayan kaç kişi var?</Label>
                <Select>
                  <SelectTrigger id="household_people" className="border-yellow-200 bg-white">
                    <SelectValue placeholder="Kişi sayısı" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-yellow-200">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="electricity_bill" className="text-yellow-800">Elektrik faturasını giriniz (kWh/yıl)</Label>
                <Input 
                  id="electricity_bill"
                  name="electricity_bill"
                  type="number" 
                  value={data.household_electricity || ''} 
                  onChange={(e) => updateSectorData('electricity', 'household_electricity', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-yellow-200 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (sector.id === 'heating') {
      return (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
              🔥 Doğalgaz - Yıllık toplam tüketiminizi giriniz (kWh)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="natural_gas" className="text-orange-800">Doğalgaz (kWh/yıl)</Label>
                <Input 
                  id="natural_gas"
                  name="natural_gas"
                  type="number" 
                  value={data.natural_gas || ''} 
                  onChange={(e) => updateSectorData('heating', 'natural_gas', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="heating_oil" className="text-orange-800">Fuel Oil (L/yıl)</Label>
                <Input 
                  id="heating_oil"
                  name="heating_oil"
                  type="number" 
                  value={data.heating_oil || ''} 
                  onChange={(e) => updateSectorData('heating', 'heating_oil', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="lpg" className="text-orange-800">LPG (kg/yıl)</Label>
                <Input 
                  id="lpg"
                  name="lpg"
                  type="number" 
                  value={data.lpg || ''} 
                  onChange={(e) => updateSectorData('heating', 'lpg', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="coal_heating" className="text-orange-800">Kömür (kg/yıl)</Label>
                <Input 
                  id="coal_heating"
                  name="coal_heating"
                  type="number" 
                  value={data.coal || ''} 
                  onChange={(e) => updateSectorData('heating', 'coal', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-orange-200"
                />
              </div>
              <div>
                <Label htmlFor="wood_heating" className="text-orange-800">Odun (kg/yıl)</Label>
                <Input 
                  id="wood_heating"
                  name="wood_heating"
                  type="number" 
                  value={data.wood || ''} 
                  onChange={(e) => updateSectorData('heating', 'wood', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-orange-200"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (sector.id === 'fuel') {
      return (
        <div className="space-y-4">
          {/* Food Section */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 mb-3 flex items-center gap-2">
              🍽️ Gıda - Yıllık tüketim miktarınızı giriniz
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="beef_amount" className="text-green-800">Dana Eti (kg/yıl)</Label>
                <Input 
                  id="beef_amount"
                  name="beef_amount"
                  type="number" 
                  value={data.beef || ''} 
                  onChange={(e) => updateSectorData('fuel', 'beef', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="lamb_amount" className="text-green-800">Kuzu Eti (kg/yıl)</Label>
                <Input 
                  id="lamb_amount"
                  name="lamb_amount"
                  type="number" 
                  value={data.lamb || ''} 
                  onChange={(e) => updateSectorData('fuel', 'lamb', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="poultry_amount" className="text-green-800">Tavuk (kg/yıl)</Label>
                <Input 
                  id="poultry_amount"
                  name="poultry_amount"
                  type="number" 
                  value={data.poultry || ''} 
                  onChange={(e) => updateSectorData('fuel', 'poultry', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="milk_amount" className="text-green-800">Süt (L/yıl)</Label>
                <Input 
                  id="milk_amount"
                  name="milk_amount"
                  type="number" 
                  value={data.milk || ''} 
                  onChange={(e) => updateSectorData('fuel', 'milk', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="cheese_amount" className="text-green-800">Peynir (kg/yıl)</Label>
                <Input 
                  id="cheese_amount"
                  name="cheese_amount"
                  type="number" 
                  value={data.cheese || ''} 
                  onChange={(e) => updateSectorData('fuel', 'cheese', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
              <div>
                <Label htmlFor="rice_amount" className="text-green-800">Pirinç (kg/yıl)</Label>
                <Input 
                  id="rice_amount"
                  name="rice_amount"
                  type="number" 
                  value={data.rice || ''} 
                  onChange={(e) => updateSectorData('fuel', 'rice', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-green-200"
                />
              </div>
            </div>
          </div>

          {/* Other Materials Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
              📄 Diğer Malzemeler - Yıllık tüketim miktarınızı giriniz
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="paper_amount" className="text-blue-800">Kağıt (kg/yıl)</Label>
                <Input 
                  id="paper_amount"
                  name="paper_amount"
                  type="number" 
                  value={data.paper || ''} 
                  onChange={(e) => updateSectorData('fuel', 'paper', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="cement_amount" className="text-blue-800">Çimento (kg/yıl)</Label>
                <Input 
                  id="cement_amount"
                  name="cement_amount"
                  type="number" 
                  value={data.cement || ''} 
                  onChange={(e) => updateSectorData('fuel', 'cement', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="border-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePine className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-green-800">Karbon Ayak İzi Hesaplama Aracı</h1>
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-green-700 max-w-2xl mx-auto mb-6">
            CO₂ ayakizi hesaplama aracını çalıştırmak istiyor musun?
          </p>
        </div>

        {/* Sector Selection Step */}
        {currentStep === 'sectors' && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-center text-green-800 flex items-center justify-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Sektör Seçimi
                </CardTitle>
                <CardDescription className="text-center text-green-600">
                  Hesaplamak istediğiniz sektörü seçin
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sectors.map((sector) => {
                    const IconComponent = sector.icon
                    const isCompleted = completedSectors.includes(sector.id)
                    
                    let buttonClasses = "h-28 flex flex-col gap-2 transition-all duration-200 relative text-center p-4"
                    
                    if (isCompleted) {
                      buttonClasses += " border-green-500 bg-green-50 text-green-700"
                    } else {
                      switch(sector.color) {
                        case 'blue': buttonClasses += " border-blue-300 text-blue-700 hover:bg-blue-50"; break
                        case 'yellow': buttonClasses += " border-yellow-300 text-yellow-700 hover:bg-yellow-50"; break
                        case 'orange': buttonClasses += " border-orange-300 text-orange-700 hover:bg-orange-50"; break
                        case 'green': buttonClasses += " border-green-300 text-green-700 hover:bg-green-50"; break
                      }
                    }
                    
                    return (
                      <Button
                        key={sector.id}
                        onClick={() => handleSectorSelect(sector.id)}
                        variant="outline"
                        className={buttonClasses}
                      >
                        {isCompleted && (
                          <CheckCircle className="absolute -top-2 -right-2 h-6 w-6 text-green-600 bg-white rounded-full" />
                        )}
                        <IconComponent className="h-6 w-6" />
                        <span className="font-medium text-base">{sector.name}</span>
                        <span className="text-xs opacity-75 leading-tight">{sector.description}</span>
                      </Button>
                    )
                  })}
                </div>
                
                {completedSectors.length > 0 && (
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={handleShowResults}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                    >
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Sonuçları Göster ({completedSectors.length} sektör tamamlandı)
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sector Form Step */}
        {currentStep === 'form' && selectedSector && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const sector = sectors.find(s => s.id === selectedSector)
                      const IconComponent = sector?.icon
                      return (
                        <>
                          {IconComponent && <IconComponent className="h-6 w-6 text-green-700" />}
                          <CardTitle className="text-green-800">{sector?.name}</CardTitle>
                        </>
                      )
                    })()}
                  </div>
                  <Button
                    onClick={handleBackToSectors}
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Geri
                  </Button>
                </div>
                <CardDescription className="text-green-600">
                  {sectors.find(s => s.id === selectedSector)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {renderSectorForm(sectors.find(s => s.id === selectedSector))}
                
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-green-200">
                  <Button
                    onClick={handleBackToSectors}
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Sektörlere Dön
                  </Button>
                  
                  <Button
                    onClick={handleSectorComplete}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Devam Et
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results Step */}
        {currentStep === 'results' && results && (
          <div className="max-w-4xl mx-auto">
            {/* Total Emissions Result */}
            <Card className="mb-8 bg-white border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Leaf className="h-6 w-6" />
                  TOPLAM EMİSYON:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 rounded-lg p-8 text-center border border-green-200">
                  <div className="text-6xl font-bold text-green-700 mb-2">
                    {results.totalEmissions.toFixed(3)}
                  </div>
                  <div className="text-2xl text-green-600">tCO₂e</div>
                </div>
              </CardContent>
            </Card>

            {/* Offset Suggestion */}
            <Card className="mb-8 bg-white border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <TreePine className="h-12 w-12 text-green-600" />
                  <div>
                    <p className="text-green-800 text-lg">
                      Doğaya olan borcunuzu{' '}
                      <span className="bg-green-100 px-2 py-1 rounded border border-green-300 font-medium">
                        {Math.ceil(results.totalEmissions * 20)}
                      </span>{' '}
                      tane ağaç dikerek ödeyebilirsiniz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Yeniden Hesapla
              </Button>
              
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a 
                  href="https://www.tema.org.tr/fidan-bagisi-secenekleri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TreePine className="h-5 w-5 mr-2" />
                  Ağaç Dik
                </a>
              </Button>
            </div>

            {/* Sector Breakdown */}
            {results.bySector.length > 0 && (
              <Card className="mt-8 bg-white border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800">Sektör Bazında Dağılım</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.bySector.map((item: { sector: string; emissions: number }) => (
                      <div key={item.sector} className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                        <span className="text-green-700 font-medium">{item.sector}</span>
                        <span className="font-bold text-green-800">
                          {item.emissions.toFixed(3)} tCO₂e
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
