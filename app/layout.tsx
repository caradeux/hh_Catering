import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "H&H Catering - Coctelería Premium para Eventos y Matrimonios",
  description:
    "Servicio profesional de coctelería y catering para eventos especiales, matrimonios y celebraciones. Más de 15 años de experiencia creando momentos únicos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
