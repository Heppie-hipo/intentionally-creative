import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Intentionally Creative - Liquor Store Marketing Experts',
  description: 'Transform your liquor store into a customer magnet. We redesign your website, marketing strategy, and business presence in under 3 weeks, then send 6,000+ local customers to your store in 6 months.',
  keywords: 'liquor store marketing, City Hive platform, retail marketing, SEO, Google Ads, geofencing',
  authors: [{ name: 'Intentionally Creative' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
