import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'BrightSmiles Dental Clinic - Gentle, Professional Care',
  description: 'Book your dental appointment today at BrightSmiles. Offering general, cosmetic, and emergency dentistry services in your area. Trusted by 5,000+ local patients.',
  keywords: ['Dentist', 'Dental Clinic', 'Teeth Whitening', 'Root Canal', 'Emergency Dentist'],
  openGraph: {
    title: 'BrightSmiles Dental Clinic - Gentle, Professional Care',
    description: 'Book your dental appointment today at BrightSmiles. Offering general, cosmetic, and emergency dentistry services in your area.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightSmiles Dental',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightSmiles Dental Clinic',
    description: 'Gentle, professional dental care for the whole family.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "BrightSmiles Dental",
              "image": "https://brightsmiles.com/images/hero.png",
              "telephone": "555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Dental Street, Suite 100",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "priceRange": "$$"
            }),
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
