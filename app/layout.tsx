import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "H&H Catering - Catering Gourmet para Eventos y Matrimonios en Chile",
  description:
    "Servicio profesional de catering gourmet para eventos, matrimonios y celebraciones. Canapés, pizzetas, empanadas de cóctel, mini quiches y tapaditos artesanales. Más de 500 eventos realizados con ingredientes premium.",
  keywords: [
    "catering gourmet",
    "catering matrimonios",
    "catering eventos",
    "canapés gourmet",
    "pizzetas artesanales",
    "empanadas cóctel",
    "mini quiches",
    "tapaditos",
    "catering Chile",
    "servicio catering premium",
    "H&H Catering",
  ],
  authors: [{ name: "H&H Catering" }],
  creator: "H&H Catering",
  publisher: "H&H Catering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://hhcatering.cl",
    siteName: "H&H Catering",
    title: "H&H Catering - Catering Gourmet para Eventos y Matrimonios",
    description:
      "Servicio profesional de catering gourmet para eventos, matrimonios y celebraciones. Canapés, pizzetas, empanadas de cóctel y productos artesanales premium.",
    images: [
      {
        url: "/professional-catering-display-elegant.jpg",
        width: 1200,
        height: 630,
        alt: "H&H Catering - Productos Gourmet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H&H Catering - Catering Gourmet para Eventos",
    description: "Servicio profesional de catering gourmet para eventos y matrimonios. Productos artesanales premium.",
    images: ["/professional-catering-display-elegant.jpg"],
  },
  alternates: {
    canonical: "https://hhcatering.cl",
  },
  category: "food",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "H&H Catering",
              description: "Servicio profesional de catering gourmet para eventos, matrimonios y celebraciones",
              url: "https://hhcatering.cl",
              telephone: "+56-9-XXXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CL",
                addressLocality: "Chile",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-33.4489",
                longitude: "-70.6693",
              },
              openingHours: "Mo-Su 08:00-20:00",
              priceRange: "$$",
              servesCuisine: "Gourmet",
              serviceType: "Catering Service",
              areaServed: "Chile",
              hasMenu: {
                "@type": "Menu",
                hasMenuSection: [
                  {
                    "@type": "MenuSection",
                    name: "Canapés Gourmet",
                    description: "Canapés finos, especiales, nórdicos y diet",
                  },
                  {
                    "@type": "MenuSection",
                    name: "Tapaditos Artesanales",
                    description: "Mini sandwiches, hamburguesas y tapaditos cóctel",
                  },
                  {
                    "@type": "MenuSection",
                    name: "Brochetas y Empanadas",
                    description: "Brochetas gourmet y empanadas de cóctel",
                  },
                  {
                    "@type": "MenuSection",
                    name: "Pastelería Gourmet",
                    description: "Mini quiches y mini pasteles",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
