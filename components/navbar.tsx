'use client'

import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { TreePine, Leaf, Calculator, Info, Mail } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-b-2 border-green-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <TreePine className="h-8 w-8 text-green-700 relative z-10 group-hover:text-green-800 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-green-800 group-hover:text-green-900 transition-colors">
                Karbon Hesaplayıcı
              </span>
              <span className="text-xs text-green-600 font-medium">Çevre Dostu Yaşam</span>
            </div>
            <Leaf className="h-6 w-6 text-green-600 animate-pulse" />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navItemStyle()}>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-green-100 rounded-full">
                          <Calculator className="w-4 h-4 text-green-700" />
                        </div>
                        <span className="font-medium">Hesapla</span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(navItemStyle(), "data-[state=open]:bg-green-100")}>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-blue-100 rounded-full">
                        <Info className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="font-medium">Bilgi</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white/98 backdrop-blur-md border border-green-200 rounded-xl shadow-xl p-2">
                      <div className="grid w-[500px] gap-2 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                        <DropdownItem 
                          href="/hakkinda" 
                          title="Karbon Ayak İzi Nedir?" 
                          icon="🌱"
                          description="Karbon ayak izi hesaplama ve önemi hakkında detaylı bilgi"
                        />
                        <DropdownItem 
                          href="/uluslararasi-standartlar" 
                          title="Uluslararası Standartlar" 
                          icon="🌍"
                          description="Kyoto Protokolü ve Paris Anlaşması ile ilgili bilgiler"
                        />
                        <DropdownItem 
                          href="/yesil-adim" 
                          title="Yeşil Bir Adım At" 
                          icon="♻️"
                          description="Karbon ayak izinizi azaltmak için pratik öneriler"
                        />
                        <DropdownItem 
                          href="/istatistikler" 
                          title="İstatistikler" 
                          icon="📊"
                          description="Türkiye ve dünya karbon emisyon istatistikleri"
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/iletisim" className={navItemStyle()}>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-purple-100 rounded-full">
                          <Mail className="w-4 h-4 text-purple-700" />
                        </div>
                        <span className="font-medium">İletişim</span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <Button 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5 rounded-full font-semibold"
            asChild
          >
            <a 
              href="https://www.tema.org.tr/fidan-bagisi-secenekleri" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TreePine className="w-5 h-5 mr-2" />
              Ağaç Dik
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string
    icon: string
    description: string
  }
>(({ className, title, icon, description, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md focus:bg-green-50 focus:shadow-md border border-transparent hover:border-green-200",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">{icon}</div>
          <div className="flex-1">
            <div className="text-sm font-semibold leading-none text-green-800 group-hover:text-green-900 mb-1">
              {title}
            </div>
            <p className="line-clamp-2 text-xs leading-relaxed text-green-600 group-hover:text-green-700">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </NavigationMenuLink>
  )
})
DropdownItem.displayName = "DropdownItem"

const navItemStyle = () =>
  "group relative inline-flex h-12 w-max items-center justify-center rounded-xl bg-white/50 px-4 py-2 text-sm font-medium text-green-700 transition-all duration-200 hover:bg-white hover:text-green-900 hover:shadow-md focus:bg-white focus:text-green-900 focus:outline-none focus:shadow-md disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white data-[state=open]:bg-white border border-transparent hover:border-green-200"

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-900 focus:bg-green-50 focus:text-green-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-green-800">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-green-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
