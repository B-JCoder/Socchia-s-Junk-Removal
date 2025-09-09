import type React from "react"
// import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

// export const metadata: Metadata = {
//   title: "Falcon Auto Detailing | Paint Correction, Ceramic Coating & Interior Detailing",
//   description:
//     "Falcon Auto Detailing in Sun City West & Surprise, AZ. Specializing in paint correction, ceramic coating, interior & exterior detailing. Drive in style with Falcon.",
//   generator: "The Linkage Digital",
//   keywords: [
//     "Falcon Auto Detailing",
//     "auto detailing Surprise AZ",
//     "car detailing Sun City West",
//     "ceramic coating",
//     "paint correction",
//     "interior car cleaning",
//     "exterior car wash",
//   ],
//   openGraph: {
//     title: "Falcon Auto Detail | Premium Car Care in Maricopa County, AZ",
//     description:
//       "Falcon Auto Detail is a veteran-owned, family-operated business founded by an Air Force Gulf War veteran.",
//     url: "https://falconautodetailing.com",
//     siteName: "Falcon Auto Detailing",
//     images: [
//       {
//         url: "/og-image.jpg", // apna OG image daalna
//         width: 1200,
//         height: 630,
//         alt: "Falcon Auto Detailing Service",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Falcon Auto Detailing | Premium Car Care",
//     description:
//       "Serving Surprise & Sun City West, AZ with expert paint correction, ceramic coating, and full interior/exterior detailing.",
//     images: ["/og-image.jpg"],
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>{children}</body>
    </html>
  )
}
