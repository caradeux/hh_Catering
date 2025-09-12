"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ArrowUp,
  MessageCircle,
  CheckCircle,
  Utensils,
  Calendar,
  Leaf,
  Sandwich,
  Beef,
  Cherry,
  Fish,
  Drumstick,
  Pizza,
  Cake,
  Check as Cheese,
} from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"

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

function Pizzeta() {
  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.4}>
      <group>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 16]} />
          <meshStandardMaterial color="#d97706" />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.03, 16]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.02, 16]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingFoodScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Canape />
      <group position={[3, -2, 0]}>
        <Empanada />
      </group>
      <group position={[-3, 1, 0]}>
        <MiniQuiche />
      </group>
      <group position={[2, 3, 0]}>
        <Pizzeta />
      </group>
      <group position={[-2, -3, 0]}>
        <Empanada />
      </group>
    </Canvas>
  )
}

export default function HHCateringLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fechaEvento: "",
    numeroPersonas: "",
    mensaje: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Scrolling to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      console.log("[v0] Element found, scrolling...")
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found:", sectionId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const openWhatsApp = () => {
    const message = `Hola! Me interesa el servicio de catering de H&H. Mi nombre es ${formData.nombre || "[Nombre]"} y necesito catering para ${formData.numeroPersonas || "[número]"} personas.`
    const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        {/* Base gradient con más profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40"></div>

        {/* Elementos radiales más sofisticados */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/10 via-secondary/4 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-emerald-200/20 to-transparent rounded-full blur-2xl animate-bounce"></div>
        </div>

        {/* Patrón geométrico sutil mejorado */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.3)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>

        {/* Elementos flotantes decorativos */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-emerald-300/20 rounded-full animate-bounce delay-1500"></div>
      </div>

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/60 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              H&H Catering
            </div>
            <div className="hidden md:flex space-x-8">
              {["inicio", "servicios", "productos", "nosotros", "testimonios", "contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white hidden md:flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section mejorado */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-cyan-50/60 to-emerald-50/40"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/8 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-secondary/10 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <FloatingFoodScene />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 animate-pulse shadow-lg"
                >
                  ✨ Especialistas en Catering Gourmet Premium
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                  Catering Gourmet Premium para
                  <span className="text-primary bg-gradient-to-r from-primary via-secondary to-emerald-500 bg-clip-text text-transparent animate-pulse">
                    {" "}
                    Eventos y Matrimonios
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-lg">
                  Transformamos tus eventos y matrimonios en experiencias gastronómicas inolvidables con nuestro
                  servicio de catering gourmet premium: canapés artesanales, pizzetas gourmet, empanadas de cóctel, mini
                  quiches y tapaditos especiales preparados con ingredientes de primera calidad en Chile.
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>+15 años experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>+500 eventos realizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ingredientes premium</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contacto")}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Solicitar Cotización Gratis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("productos")}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Utensils className="h-5 w-5 mr-2" />
                  Ver Catálogo Completo
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 transform hover:scale-105 transition-transform duration-500 shadow-2xl hover:shadow-3xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20Fino_Pan%20de%20molde%20con%20mayonesa%20o%20ricotta_%E2%80%A2%20Camar%C3%B3n%2C%20salm%C3%B3n%20ahumado_%E2%80%A2%20Huevo%20de%20codorniz%2C%20jam%C3%B3n%20serrano_%E2%80%A2%20Alcachofa%2C%20champi%C3%B1%C3%B3n%20con%20almendras_%E2%80%A2%20Pavo%20palta%2C%203%20quesos%2C%20pastrami.jpg-vWmTam1aoYPla8DmpEqEOu7J6iXoLe.jpeg"
                  alt="Servicio de catering H&H con canapés gourmet y productos especiales"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>Calidad Premium Garantizada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-white to-slate-50/90"></div>
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Nuestros Servicios Premium
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Servicios de Catering Gourmet Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ofrecemos servicios completos de catering gourmet con atención personalizada para matrimonios, eventos
              corporativos y celebraciones especiales, creando experiencias gastronómicas memorables y sofisticadas en
              toda Chile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-cyan-50/30 border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl"></div>
              <CardHeader className="relative">
                <ChefHat className="h-16 w-16 text-primary mb-6 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-2xl text-card-foreground">Catering Gourmet Premium</CardTitle>
                <CardDescription className="text-lg">
                  Productos artesanales de alta calidad para eventos y matrimonios exclusivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Canapés finos y especiales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tapaditos y mini sandwiches gourmet
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Empanadas de cóctel artesanales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pizzetas con ingredientes premium
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-3xl"></div>
              <CardHeader className="relative">
                <Users className="h-16 w-16 text-secondary mb-6 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-2xl text-card-foreground">Eventos Corporativos</CardTitle>
                <CardDescription className="text-lg">
                  Servicio profesional especializado para reuniones ejecutivas, lanzamientos y eventos empresariales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Desayunos ejecutivos premium
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Coffee breaks sofisticados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Almuerzos corporativos elegantes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Eventos de networking exclusivos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-rose-50/30 border-2 border-rose-300/30 hover:border-rose-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-300/20 to-transparent rounded-bl-3xl"></div>
              <CardHeader className="relative">
                <Award className="h-16 w-16 text-rose-500 mb-6 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-2xl text-card-foreground">Matrimonios & Celebraciones</CardTitle>
                <CardDescription className="text-lg">
                  Servicio especializado para bodas y celebraciones especiales con atención personalizada y productos
                  exclusivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Recepción con canapés de autor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Servicio durante ceremonia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Banquete personalizado exclusivo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Coordinación completa del evento
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Nuestro Proceso</h3>
              <p className="text-lg text-muted-foreground">
                Así trabajamos para garantizar la excelencia en cada evento
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: MessageCircle, title: "Consulta", desc: "Conversamos sobre tus necesidades" },
                { icon: Utensils, title: "Planificación", desc: "Diseñamos el menú perfecto" },
                { icon: ChefHat, title: "Preparación", desc: "Elaboramos todo con ingredientes premium" },
                { icon: Award, title: "Servicio", desc: "Entregamos una experiencia excepcional" },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section - manteniendo la estructura existente pero con mejoras visuales */}
      <section id="productos" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-25/20 to-white"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-transparent via-primary/3 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Catálogo Premium
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Catálogo de Productos Gourmet Artesanales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre nuestra amplia variedad de productos gastronómicos artesanales para catering, preparados con
              ingredientes frescos seleccionados y técnicas culinarias de vanguardia para eventos y matrimonios en Chile
            </p>
          </div>

          {/* Canapés Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Canapés Gourmet
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gradient-to-br from-white to-cyan-50/50 border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20Fino_Pan%20de%20molde%20con%20mayonesa%20o%20ricotta_%E2%80%A2%20Camar%C3%B3n%2C%20salm%C3%B3n%20ahumado_%E2%80%A2%20Huevo%20de%20codorniz%2C%20jam%C3%B3n%20serrano_%E2%80%A2%20Alcachofa%2C%20champi%C3%B1%C3%B1%C3%B3n%20con%20almendras_%E2%80%A2%20Pavo%20palta%2C%203%20quesos%2C%20pastrami.jpg-vWmTam1aoYPla8DmpEqEOu7J6iXoLe.jpeg"
                    alt="Canapé Fino H&H Catering - Pan de molde gourmet con camarón, salmón ahumado, huevo de codorniz y jamón serrano para eventos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    Canapé Fino
                  </CardTitle>
                  <CardDescription className="text-base">
                    Pan de molde blanco o integral con mayonesa o ricotta
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Camarón, salmón ahumado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Huevo de codorniz, jamón serrano
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Alcachofa, champiñón con almendras
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Pavo palta, 3 quesos, pastrami
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-emerald-50/50 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20Fino_Pan%20de%20molde%20con%20mayonesa%20o%20ricotta_%E2%80%A2%20Camar%C3%B3n%2C%20salm%C3%B3n%20ahumado_%E2%80%A2%20Huevo%20de%20codorniz%2C%20jam%C3%B3n%20serrano_%E2%80%A2%20Alcachofa%2C%20champi%C3%B1%C3%B3n%20con%20almendras_%E2%80%A2%20Pavo%20palta%2C%203%20quesos%2C%20pastrami%20%281%29.jpg-lmCs9irsHJ8vJcdtInXXXwU4YUAfl6.jpeg"
                    alt="Canapé Especial - Variedad gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    Canapé Especial
                  </CardTitle>
                  <CardDescription className="text-base">
                    Pan de molde blanco o integral con mayonesa o ricotta
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Espárragos, choclos, salame
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Pollo pimentón, choritos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Queso fresco con almendras, kanikama
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Palmitos, pasta de salmón, frutos secos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-orange-50/50 border-2 border-orange-300/30 hover:border-orange-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20N%C3%B3rdico_Baguette%20blanco%20o%20integral_%E2%80%A2%20Salm%C3%B3n%20ahumado%2C%20palta%2C%20alcaparras_%E2%80%A2%20Jam%C3%B3n%20serrano%2C%20champi%C3%B1%C3%B3n_%E2%80%A2%20Camar%C3%B3n%2C%20champi%C3%B1%C3%B3n%2C%20almendras_%E2%80%A2%20Choritos%2C%20salsa%20verde.jpg-ppxrmwLshqLxXW14fWI24t7789sMyB.jpeg"
                    alt="Canapé Nórdico - Baguette artesanal"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    Canapé Nórdico
                  </CardTitle>
                  <CardDescription className="text-base">
                    Baguette blanco o integral con mayonesa o ricotta
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Salmón ahumado, palta, alcaparras
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Jamón serrano, champiñón
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Camarón, champiñón, almendras
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Choritos, salsa verde
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-green-50/50 border-2 border-green-300/30 hover:border-green-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20Diet_Base%20de%20vegetales%2C%20sin%20pan_%E2%80%A2%20Base%20de%20pepino%20o%20apio_%E2%80%A2%20Queso%20fresco%2C%20salm%C3%B3n_%E2%80%A2%20Palta%2C%20tomate%20cherry_%E2%80%A2%20Opciones%20bajas%20en%20carbohidratos.jpg-drRN76QlzmlJ9Qg3OmGd897NEzWl0M.jpeg"
                    alt="Canapé Diet - Base de vegetales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    Canapé Diet
                  </CardTitle>
                  <CardDescription className="text-base">Base de vegetales (bajo en carbohidratos)</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Base: zapallo italiano, palta, tomate, pepino
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Salmón ahumado, palmitos, choclos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Espárragos, camarón, tomate cherry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Queso fresco, pavo, alcachofa
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tapaditos Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tapaditos Artesanales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-300/30 hover:border-blue-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/tapaditos-coctel-pan-frica.jpg"
                    alt="Tapadito Cóctel H&H Catering - Pan frica artesanal con ingredientes gourmet para eventos y matrimonios"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Sandwich className="h-5 w-5 text-blue-500" />
                    Tapadito Cóctel
                  </CardTitle>
                  <CardDescription>Pan frica con o sin semillas, decorado con pepinillo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ave mayo, ave pimiento</li>
                    <li>• Salame con queso fresco</li>
                    <li>• Jamón queso, pavo con palta</li>
                    <li>• Roast beef con tomate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-purple-50/50 border-2 border-purple-300/30 hover:border-purple-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/mini-sandwiches-clasicos.jpg"
                    alt="Mini Sandwich - Pan frica con ingredientes frescos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Sandwich className="h-5 w-5 text-purple-500" />
                    Mini Sandwich
                  </CardTitle>
                  <CardDescription>Pan frica, hoja o molde miga con pepinillo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ave mayo, salame con queso</li>
                    <li>• Jamón queso, pavo con vegetales</li>
                    <li>• Roast beef con tomate</li>
                    <li>• Pollo asado con lechuga</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-300/30 hover:border-amber-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/mini-sandwiches-gourmet-especiales.jpg"
                    alt="Mini Sandwich Gourmet - Pan especial con ingredientes premium"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500 fill-current" />
                    Mini Sandwich Gourmet
                  </CardTitle>
                  <CardDescription>Pan zapallo, espinacas, betarraga</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Salmón ahumado, queso crema</li>
                    <li>• Roast beef, tomate, palta</li>
                    <li>• Queso de cabra, pesto, tomate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-red-50/50 border-2 border-red-300/30 hover:border-red-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/mini-hamburguesas-gourmet.jpg"
                    alt="Mini Hamburguesa - Pan frica con hamburguesa casera"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Beef className="h-5 w-5 text-red-500" />
                    Mini Hamburguesa
                  </CardTitle>
                  <CardDescription>Pan frica con o sin sésamo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hamburguesa casera, queso cheddar</li>
                    <li>• Pepinillo, cebolla caramelizada</li>
                    <li>• Tomate, lechuga, mayonesa</li>
                    <li>• Opción vegana: hamburguesa de lentejas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Brochetas Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Brochetas Gourmet
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-green-50/50 border-2 border-green-300/30 hover:border-green-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/brochetas-variadas-gourmet.jpg"
                    alt="Brochetas Gourmet H&H Catering - Vegetales frescos asados y carnes premium para catering de eventos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    Brochetas de Verduras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Brócoli, choclo, champiñón y tomate cherry</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-red-50/50 border-2 border-red-300/30 hover:border-red-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Cherry className="h-5 w-5 text-red-500" />
                    Tomatito Cherry y Queso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Queso de cabra, tomate cherry y albahaca fresca</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-orange-50/50 border-2 border-orange-300/30 hover:border-orange-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-orange-500" />
                    Brocheta Teriyaki
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pechuga de pollo con salsa teriyaki agridulce japonesa
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-pink-50/50 border-2 border-pink-300/30 hover:border-pink-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Fish className="h-5 w-5 text-pink-500" />
                    Brocheta Camarón
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    3 camarones ecuatorianos (36/40) con cebollín, salteados en mantequilla y ajo
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-red-50/50 border-2 border-red-300/30 hover:border-red-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Beef className="h-5 w-5 text-red-500" />
                    Brocheta Vacuno
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lomo liso premium con pimentón y cebolla (tamaño medio y cóctel)
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-2 border-yellow-300/30 hover:border-yellow-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Drumstick className="h-5 w-5 text-yellow-600" />
                    Brocheta Pollo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pollo tierno con pimentón y cebolla (tamaño medio y cóctel)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Empanadas y Otros Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Empanadas y Especialidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-2 border-yellow-300/30 hover:border-yellow-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/empanadas-finas-coctel.jpg"
                    alt="Empanadita Fina Cóctel - Masa artesanal con rellenos gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    Empanadita Fina Cóctel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Masa de empanadas artesanal</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Camarón queso</li>
                    <li>• Ostión queso</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-orange-50/50 border-2 border-orange-300/30 hover:border-orange-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-orange-500" />
                    Empanadita Especial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Masa de empanadas tradicional</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Pino tradicional, queso</li>
                    <li>• Jamón queso, champiñón queso</li>
                    <li>• Ciboulette ricotta, pollo pimentón</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-purple-50/50 border-2 border-purple-300/30 hover:border-purple-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Sandwich className="h-5 w-5 text-purple-500" />
                    Rollitos de Jamón
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Jamón, ricotta y ciboulette</li>
                    <li>• Jamón y queso crema</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-red-50/50 border-2 border-red-300/30 hover:border-red-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/pizzetas-gourmet-artesanales.jpg"
                    alt="Pizzetas Gourmet - Masa artesanal con ingredientes premium"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Pizza className="h-5 w-5 text-red-500" />
                    Pizzetas Gourmet
                  </CardTitle>
                  <CardDescription>Masa de 4.5cm con queso crema y tomate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Masa de 4.5cm con queso crema y tomate</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Champiñón, salame, choricillo</li>
                    <li>• Pollo, roast beef, jamón</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pastelería Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pastelería Gourmet
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-300/30 hover:border-amber-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/miniquiches-gourmet-variados.jpg"
                    alt="Miniquiche - Masa de tarta con rellenos gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-amber-500" />
                    Miniquiche
                  </CardTitle>
                  <CardDescription>Masa de tarta salada, huevo, crema y queso parmesano</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lorraine (jamón con tocino)</li>
                    <li>• Champiñón, salmón ahumado</li>
                    <li>• Vegetales, pollo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-pink-50/50 border-2 border-pink-300/30 hover:border-pink-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/minipasteles-postres-gourmet.jpg"
                    alt="Minipasteles - Postres gourmet en miniatura"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Cake className="h-5 w-5 text-pink-500" />
                    Minipasteles
                  </CardTitle>
                  <CardDescription>Selección de postres gourmet en miniatura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Panqueque naranja, chocolate, manjar</li>
                    <li>• Pie de limón, tartaleta de frutas</li>
                    <li>• Alfajor de hoja, semifrío cheesecake</li>
                    <li>• Kuchen de damasco</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Especialidades Premium Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Especialidades Premium
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-300/30 hover:border-blue-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/ceviche-gourmet-fresco.jpg"
                    alt="Ceviche Gourmet - Pescado fresco con vegetales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Fish className="h-5 w-5 text-blue-500" />
                    Ceviche Gourmet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Corvina, reineta o salmón con pimentones, cebolla morada, ciboulette y tostadas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-2 border-yellow-300/30 hover:border-yellow-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/tabla-quesos-premium.jpg"
                    alt="Tabla de Quesos - Selección de quesos gourmet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Cheese className="h-5 w-5 text-yellow-600" />
                    Tabla de Quesos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Especial: Quesos nacionales, roquefort</li>
                    <li>• Varietal: Quesos especiados</li>
                    <li>• Extra: Quesos finos, cabra, oveja</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-green-50/50 border-2 border-green-300/30 hover:border-green-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-green-500" />
                    Vol au Vent & Petit Bouché
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Masa de hoja y tacitas delgadas con rellenos gourmet: salame, jamón, carne, champiñón, verduras y
                    frutos del mar
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section mejorado */}
      <section id="nosotros" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-25/40 via-white to-slate-50/80"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-secondary/6 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Nuestra Historia
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              H&H Catering - Pasión por la Excelencia Gastronómica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Conoce nuestra trayectoria creando experiencias culinarias memorables para eventos y matrimonios en Chile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canap%C3%A9%20Diet_Base%20de%20vegetales%2C%20sin%20pan_%E2%80%A2%20Base%20de%20pepino%20o%20apio_%E2%80%A2%20Queso%20fresco%2C%20salm%C3%B3n_%E2%80%A2%20Palta%2C%20tomate%20cherry_%E2%80%A2%20Opciones%20bajas%20en%20carbohidratos.jpg-drRN76QlzmlJ9Qg3OmGd897NEzWl0M.jpeg"
                  alt="Equipo de catering profesional H&H"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos una empresa familiar con más de 15 años de experiencia en el rubro del catering gourmet. Nos
                  especializamos en crear experiencias gastronómicas únicas que transforman cada evento en un momento
                  inolvidable.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestros Valores</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Calidad Premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Servicio Personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Ingredientes Frescos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Innovación Constante</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajamos con pasión y dedicación para que cada evento sea único e inolvidable, utilizando solo
                ingredientes de primera calidad y técnicas culinarias de vanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section mejorado */}
      <section id="testimonios" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-primary/3 to-cyan-50/50"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Testimonios
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Experiencias que Hablan por Nosotros
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              La satisfacción y confianza de nuestros clientes es nuestra mayor recompensa y motivación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María Rodríguez",
                event: "Matrimonio",
                rating: 5,
                text: "Excelente servicio, los canapés deliciosos y la presentación impecable. El equipo de H&H superó todas nuestras expectativas. ¡Altamente recomendados para eventos especiales!",
                initials: "MR",
              },
              {
                name: "Carlos González",
                event: "Evento Corporativo",
                rating: 5,
                text: "El catering para nuestro evento corporativo fue un éxito total. La calidad de los productos y el profesionalismo del equipo fueron excepcionales. ¡Gracias por su excelencia!",
                initials: "CG",
              },
              {
                name: "Ana López",
                event: "Celebración Privada",
                rating: 5,
                text: "Los mejores canapés que he probado. La atención al detalle, la calidad de los ingredientes y la presentación son excepcionales. Definitivamente los volveré a contratar.",
                initials: "AL",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-slate-50/50 border-2 border-slate-200/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <CardContent className="pt-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-card-foreground mb-6 text-pretty leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-bold text-card-foreground text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-white to-primary/8"></div>
          <div className="absolute inset-0 bg-gradient-radial from-emerald-50/30 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Contacto
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Hagamos Realidad tu Evento Soñado
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Estamos listos para crear una experiencia gastronómica inolvidable para tu evento especial
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto mejorada */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-cyan-50/50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Teléfono</div>
                      <div className="text-muted-foreground">+56 9 1234 5678</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-muted-foreground">contacto@hhcatering.cl</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ubicación</div>
                      <div className="text-muted-foreground">Santiago, Chile</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Horario</div>
                      <div className="text-muted-foreground">Lunes a Viernes de 9:00 a 18:00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Formulario mejorado */}
            <div>
              <Card className="bg-gradient-to-br from-white to-slate-50/50 border-2 border-slate-200/50 shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl">Solicita tu Cotización Gratuita</CardTitle>
                  <CardDescription className="text-lg">
                    Completa el formulario y te contactaremos en menos de 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-600 mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-muted-foreground">Te contactaremos pronto para coordinar tu evento.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Nombre Completo *</label>
                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
                          <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="+56 9 1234 5678"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Tipo de Evento *</label>
                          <select
                            name="tipoEvento"
                            value={formData.tipoEvento}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          >
                            <option value="">Selecciona el tipo</option>
                            <option value="matrimonio">Matrimonio</option>
                            <option value="corporativo">Evento Corporativo</option>
                            <option value="cumpleanos">Cumpleaños</option>
                            <option value="graduacion">Graduación</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Fecha del Evento</label>
                          <input
                            type="date"
                            name="fechaEvento"
                            value={formData.fechaEvento}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Número de Personas *
                          </label>
                          <input
                            type="number"
                            name="numeroPersonas"
                            value={formData.numeroPersonas}
                            onChange={handleInputChange}
                            required
                            min="1"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="Ej: 50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Mensaje Adicional</label>
                        <textarea
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="Cuéntanos más detalles sobre tu evento, preferencias de menú, horario, etc."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Solicitar Cotización Gratuita
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-12 text-center border-t border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-white to-slate-50/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              H&H Catering
            </div>
            <p className="text-muted-foreground">
              © 2024 H&H Catering. Todos los derechos reservados. | Catering Gourmet Premium
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={openWhatsApp}
                className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
