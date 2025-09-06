"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, Wine, Users, Calendar, Phone, Mail, MapPin, Instagram, Facebook, ChefHat, Utensils } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import type * as THREE from "three"

function CocktailGlass() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI * 0.1
    }
  }, [])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.6, 1.2, 16]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <coneGeometry args={[0.5, 0.8, 16]} />
          <meshStandardMaterial color="#0891b2" transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

function Canape() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
          <meshStandardMaterial color="#d97706" />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>
      </group>
    </Float>
  )
}

function Empanada() {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
      <group>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <coneGeometry args={[0.4, 0.3, 6]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        <mesh position={[0, 0.1, 0]} rotation={[0, 0, Math.PI / 6]}>
          <coneGeometry args={[0.35, 0.25, 6]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
      </group>
    </Float>
  )
}

function MiniQuiche() {
  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.3, 0.15, 12]} />
          <meshStandardMaterial color="#92400e" />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.1, 12]} />
          <meshStandardMaterial color="#fef3c7" />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>
      </group>
    </Float>
  )
}

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">H&H Catering</div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => smoothScrollTo("servicios")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => smoothScrollTo("productos")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Productos
            </button>
            <button
              onClick={() => smoothScrollTo("nosotros")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => smoothScrollTo("testimonios")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Testimonios
            </button>
            <button
              onClick={() => smoothScrollTo("contacto")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>
          <Button
            onClick={() => smoothScrollTo("contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Cotizar Evento
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/50 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <Environment preset="sunset" />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -5]} intensity={0.4} color="#06b6d4" />

            <group position={[-4, 2, 0]}>
              <CocktailGlass />
            </group>
            <group position={[4, -1, 0]}>
              <Canape />
            </group>
            <group position={[-2, -2, -2]}>
              <Empanada />
            </group>
            <group position={[3, 2, -2]}>
              <MiniQuiche />
            </group>
            <group position={[0, -3, -1]}>
              <CocktailGlass />
            </group>
            <group position={[-3, 0, -3]}>
              <Canape />
            </group>

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground animate-pulse shadow-lg">
                  Especialistas en Coctelería y Catering
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Cócteles y Catering para
                  <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}
                    Momentos Especiales
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Transformamos tus eventos y matrimonios en experiencias inolvidables con nuestro servicio de
                  coctelería premium, canapés gourmet, pizzetas artesanales, empanadas de cóctel y mini quiches.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => smoothScrollTo("contacto")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar Evento
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => smoothScrollTo("servicios")}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  Ver Nuestro Menú
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center transform hover:scale-110 transition-transform duration-200">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Eventos Realizados</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-200">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">5.0 Estrellas</div>
                </div>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                <img
                  src="/elegant-catering-spread-with-canapes-and-cocktails.jpg"
                  alt="Servicio de catering y coctelería H&H Catering con canapés gourmet y cócteles elegantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Wine className="h-8 w-8 text-primary animate-bounce" />
                  <div>
                    <div className="font-semibold text-card-foreground">Catering Premium</div>
                    <div className="text-sm text-muted-foreground">Canapés y cócteles de primera calidad</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary/10 backdrop-blur-sm rounded-full p-4 shadow-xl">
                <ChefHat className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-balance">Todo lo que Necesitas para tu Evento Perfecto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ofrecemos servicios integrales de coctelería y catering para hacer de tu celebración una experiencia única
              e inolvidable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <Wine className="h-12 w-12 text-primary mb-4 group-hover:animate-bounce" />
                <CardTitle className="text-card-foreground">Barra de Cócteles</CardTitle>
                <CardDescription>
                  Servicio completo de coctelería con bartenders profesionales y equipos premium
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cócteles clásicos y autorales</li>
                  <li>• Bartenders certificados</li>
                  <li>• Equipos y cristalería premium</li>
                  <li>• Decoración temática de barra</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4 group-hover:animate-bounce" />
                <CardTitle className="text-card-foreground">Canapés y Catering</CardTitle>
                <CardDescription>
                  Canapés gourmet, menús personalizados y servicio completo para eventos de cualquier tamaño
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Canapés gourmet y aperitivos</li>
                  <li>• Menús personalizados</li>
                  <li>• Servicio de meseros</li>
                  <li>• Montaje y decoración</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4 group-hover:animate-bounce" />
                <CardTitle className="text-card-foreground">Eventos Especiales</CardTitle>
                <CardDescription>
                  Planificación integral para matrimonios, cumpleaños y eventos corporativos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Matrimonios y celebraciones</li>
                  <li>• Eventos corporativos</li>
                  <li>• Fiestas privadas</li>
                  <li>• Asesoría en planificación</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-background">
                Nuestra Historia
              </Badge>
              <h2 className="text-4xl font-bold text-balance">Pasión por la Excelencia en Cada Detalle</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Con más de 15 años de experiencia en el mundo de la coctelería y catering gastronómico, H&H Catering
                nació de la pasión por crear experiencias culinarias únicas que marquen la diferencia en cada
                celebración.
              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Nuestro equipo de bartenders certificados y chefs especializados trabajan con ingredientes premium para
                garantizar que cada cóctel, canapé y plato superen las expectativas de nuestros clientes.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Eventos Exitosos</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/professional-catering-team-preparing-gourmet-canapes.jpg"
                  alt="Equipo profesional de H&H Catering preparando canapés gourmet y productos de catering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonios
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-balance">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              La satisfacción de nuestros clientes es nuestro mayor logro. Aquí algunas de sus experiencias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "H&H Catering hizo de nuestra boda un evento mágico. Los cócteles fueron espectaculares, los canapés
                  deliciosos y el servicio impecable. ¡Altamente recomendados!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">María Rodríguez</div>
                    <div className="text-sm text-muted-foreground">Matrimonio 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "Profesionalismo y calidad excepcional. Los canapés y cócteles de nuestro evento corporativo fueron un
                  éxito total gracias a su servicio de primera clase."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">CG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Carlos González</div>
                    <div className="text-sm text-muted-foreground">Evento Corporativo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "Los canapés más deliciosos y los cócteles más creativos que he probado. La atención al detalle y la
                  presentación fueron perfectas para mi cumpleaños."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Ana López</div>
                    <div className="text-sm text-muted-foreground">Celebración Privada</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="productos" className="py-16 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 shadow-sm">
              Nuestro Catálogo Completo
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-balance">Productos Artesanales Premium</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubre nuestra amplia variedad de productos gourmet, elaborados con ingredientes premium y técnicas
              artesanales para hacer de tu evento una experiencia inolvidable.
            </p>
          </div>

          {/* Canapés Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Canapés Gourmet</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-canapes-variety-platter.jpg"
                    alt="Canapés finos con ingredientes premium"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Canapé Fino</CardTitle>
                  <CardDescription className="text-sm">Pan de molde con mayonesa o ricotta</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Camarón, salmón ahumado</li>
                    <li>• Huevo de codorniz, jamón serrano</li>
                    <li>• Alcachofa, champiñón con almendras</li>
                    <li>• Pavo palta, 3 quesos, pastrami</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-canapes-variety-platter.jpg"
                    alt="Canapés especiales con ingredientes gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Canapé Especial</CardTitle>
                  <CardDescription className="text-sm">Pan de molde con mayonesa o ricotta</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Espárragos, choclos, salame</li>
                    <li>• Pollo pimentón, choritos</li>
                    <li>• Queso fresco con almendras</li>
                    <li>• Kanikama, palmitos, pasta de salmón</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-canapes-variety-platter.jpg"
                    alt="Canapés nórdicos en baguette"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Canapé Nórdico</CardTitle>
                  <CardDescription className="text-sm">Baguette blanco o integral</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Salmón ahumado, palta, alcaparras</li>
                    <li>• Jamón serrano, champiñón</li>
                    <li>• Camarón, champiñón, almendras</li>
                    <li>• Choritos, salsa verde</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-canapes-variety-platter.jpg"
                    alt="Canapés diet bajos en carbohidratos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Canapé Diet</CardTitle>
                  <CardDescription className="text-sm">Base de verduras con ricotta</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Zapallo italiano, palta, tomate</li>
                    <li>• Pepino, champiñón</li>
                    <li>• Salmón ahumado, palmitos</li>
                    <li>• Camarón, queso fresco, pavo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tapaditos Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Tapaditos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-tapaditos-elegant-presentation.jpg"
                    alt="Tapaditos cóctel en pan frica"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Tapadito Cóctel</CardTitle>
                  <CardDescription className="text-sm">Pan frica con semillas</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Ave mayo, ave pimiento</li>
                    <li>• Salame con queso fresco</li>
                    <li>• Jamón queso, pavo con palta</li>
                    <li>• Roast beef con tomate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-tapaditos-elegant-presentation.jpg"
                    alt="Mini sandwiches gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Mini Sandwich</CardTitle>
                  <CardDescription className="text-sm">Pan frica, hoja o molde miga</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Ave mayo, salame con queso</li>
                    <li>• Jamón queso, pavo con vegetales</li>
                    <li>• Roast beef con tomate</li>
                    <li>• Pollo asado con lechuga</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-tapaditos-elegant-presentation.jpg"
                    alt="Mini sandwiches gourmet con panes especiales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Mini Sandwich Gourmet</CardTitle>
                  <CardDescription className="text-sm">Pan zapallo, espinacas, betarraga</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Salmón ahumado, queso crema</li>
                    <li>• Roast beef, tomate, palta</li>
                    <li>• Queso de cabra, pesto, tomate</li>
                    <li>• Hojas verdes frescas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/gourmet-tapaditos-elegant-presentation.jpg"
                    alt="Mini hamburguesas gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Mini Hamburguesa</CardTitle>
                  <CardDescription className="text-sm">Pan frica con sésamo</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Hamburguesa casera de carne</li>
                    <li>• Queso cheddar, pepinillo</li>
                    <li>• Cebolla caramelizada</li>
                    <li>• Opción vegana disponible</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Brochetas & Empanadas Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Brochetas & Empanadas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Brochetas Gourmet
                  </CardTitle>
                  <CardDescription>Brochetas frescas con ingredientes premium</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Camarón:</strong> 3 unidades ecuatorianas con cebollín
                    </li>
                    <li>
                      • <strong>Vacuno:</strong> Lomo liso con pimentón y cebolla
                    </li>
                    <li>
                      • <strong>Pollo:</strong> Pechuga con pimentón y cebolla
                    </li>
                    <li>
                      • <strong>Teriyaki:</strong> Pollo con salsa agridulce japonesa
                    </li>
                    <li>
                      • <strong>Verduras:</strong> Brócoli, choclo, champiñón, tomate cherry
                    </li>
                    <li>
                      • <strong>Caprese:</strong> Tomate cherry, queso de cabra, albahaca
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/cocktail-empanadas-golden-baked.jpg"
                    alt="Empanadas de cóctel doradas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Empanadas de Cóctel</CardTitle>
                  <CardDescription className="text-sm">Masa artesanal crocante</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>
                      • <strong>Finas:</strong> Camarón queso, ostión queso
                    </li>
                    <li>
                      • <strong>Especiales:</strong> Pino tradicional, queso
                    </li>
                    <li>• Jamón queso, champiñón queso</li>
                    <li>• Ciboulette con ricotta, pollo pimentón</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-primary" />
                    Chaparritas & Rollitos
                  </CardTitle>
                  <CardDescription>Productos artesanales únicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Chaparrita Vienesa:</strong> Vienesa con queso
                    </li>
                    <li>
                      • <strong>Chaparrita Choricillo:</strong> Choricillo con queso
                    </li>
                    <li>
                      • <strong>Rollitos de Jamón:</strong> Con ricotta y ciboulette
                    </li>
                    <li>
                      • <strong>Rollitos de Jamón:</strong> Con queso crema
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pizzetas & Especialidades Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Pizzetas & Especialidades</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/artisanal-pizzetas-selection.jpg"
                    alt="Pizzetas artesanales variadas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Pizzetas Artesanales</CardTitle>
                  <CardDescription className="text-sm">4.5 cm diámetro, base queso crema</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Champiñón, salame, choricillo</li>
                    <li>• Pollo, roast beef, jamón</li>
                    <li>• Base de queso crema y tomate</li>
                    <li>• Masa artesanal crocante</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wine className="h-5 w-5 text-primary" />
                    Petit Bouché & Vol au Vent
                  </CardTitle>
                  <CardDescription>Tacitas y rollitos de masa delgada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Salame queso, jamón queso</li>
                    <li>• Carne queso, champiñón queso</li>
                    <li>• Verduras queso</li>
                    <li>• Frutos del mar queso</li>
                    <li>• Masa de hoja premium</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Ceviche & Tabla de Quesos
                  </CardTitle>
                  <CardDescription>Especialidades gourmet premium</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Ceviche:</strong> Corvina, reineta o salmón
                    </li>
                    <li>• Con pimentones, cebolla morada, ciboulette</li>
                    <li>
                      • <strong>Tabla Especial:</strong> Quesos nacionales, roquefort
                    </li>
                    <li>
                      • <strong>Tabla Extra:</strong> Quesos finos, cabra, oveja
                    </li>
                    <li>• Acompañados de frutos secos y tostaditas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pastelería Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Pastelería Gourmet</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/mini-quiches-assorted-flavors.jpg"
                    alt="Mini quiches surtidos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Miniquiches</CardTitle>
                  <CardDescription className="text-sm">Masa de tarta salada, huevo, crema y parmesano</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Lorraine:</strong> Jamón con tocino
                    </li>
                    <li>
                      • <strong>Champiñón:</strong> Champiñones frescos
                    </li>
                    <li>
                      • <strong>Salmón ahumado:</strong> Con eneldo
                    </li>
                    <li>
                      • <strong>Vegetales:</strong> Mix de verduras frescas
                    </li>
                    <li>
                      • <strong>Pollo:</strong> Pechuga desmenuzada
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Minipasteles
                  </CardTitle>
                  <CardDescription>Dulces artesanales para el final perfecto</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Panqueque naranja, chocolate, manjar</li>
                    <li>• Panqueque frambuesa</li>
                    <li>• Pie de limón, tartaleta de frutas</li>
                    <li>• Alfajor de hoja con chocolate</li>
                    <li>• Semifrío cheesecake de frambuesa</li>
                    <li>• Kuchen de damasco</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cócteles Premium Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Cócteles Premium</h3>
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src="/premium-cocktail-selection.jpg"
                    alt="Selección premium de cócteles artesanales"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Wine className="h-6 w-6 text-primary" />
                      Barra de Cócteles Completa
                    </CardTitle>
                    <CardDescription className="text-base">
                      Servicio profesional de coctelería con bartenders certificados y equipos premium
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cócteles Clásicos:</h4>
                        <ul className="space-y-1">
                          <li>• Pisco Sour tradicional</li>
                          <li>• Mojito con hierbas frescas</li>
                          <li>• Negroni con gin premium</li>
                          <li>• Old Fashioned</li>
                          <li>• Margarita clásica</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cócteles Autorales:</h4>
                        <ul className="space-y-1">
                          <li>• Creaciones exclusivas</li>
                          <li>• Cócteles temáticos</li>
                          <li>• Adaptados al evento</li>
                          <li>• Ingredientes premium</li>
                          <li>• Presentación espectacular</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="bg-background mb-4">
                  Contacto
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-balance">Hagamos Realidad tu Evento Soñado</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Estamos listos para crear una experiencia única para tu próximo evento. Contáctanos para una
                  cotización personalizada.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+56 9 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">contacto@hhcatering.cl</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Santiago, Chile</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-foreground font-medium">Síguenos:</span>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Solicita tu Cotización</CardTitle>
                <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre</label>
                    <Input placeholder="Tu nombre" className="bg-input border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <Input placeholder="Tu teléfono" className="bg-input border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="tu@email.com" className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tipo de Evento</label>
                  <Input placeholder="Matrimonio, cumpleaños, corporativo..." className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Fecha del Evento</label>
                  <Input type="date" className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Número de Invitados</label>
                  <Input placeholder="Aproximadamente..." className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea
                    placeholder="Cuéntanos más detalles sobre tu evento..."
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Solicitud
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-sidebar-primary">H&H Catering</div>
              <p className="text-sidebar-foreground text-pretty">
                Creando experiencias gastronómicas únicas para tus momentos más especiales.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sidebar-foreground">Servicios</h3>
              <ul className="space-y-2 text-sm text-sidebar-foreground/80">
                <li>Barra de Cócteles</li>
                <li>Canapés Gourmet</li>
                <li>Catering Completo</li>
                <li>Eventos Especiales</li>
                <li>Matrimonios</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sidebar-foreground">Contacto</h3>
              <ul className="space-y-2 text-sm text-sidebar-foreground/80">
                <li>+56 9 1234 5678</li>
                <li>contacto@hhcatering.cl</li>
                <li>Santiago, Chile</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sidebar-foreground">Síguenos</h3>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
            <p className="text-sm text-sidebar-foreground/60">© 2024 H&H Catering. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
