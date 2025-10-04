import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dandysworldcharacters.com'),
  title: {
    default: "Dandy's World Characters - Best Builds & Trinket Optimizer",
    template: "%s | Dandy's World",
  },
  description:
    "Complete Dandy's World characters guide with AI-powered trinket optimizer. Find the best builds for Sprout, Astro, Cosmo and all characters. Updated daily with winning strategies.",
  keywords: [
    "dandy's world",
    'dandys world characters',
    'sprout dandys world',
    'astro dandys world',
    'cosmo dandys world',
    'vee dandys world',
    'trinket builds',
    'character guide',
    'best builds',
    'twisted guide',
  ],
  authors: [{ name: "Dandy's World Tools" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dandysworldcharacters.com',
    title: "Dandy's World Characters - Best Builds & Trinket Optimizer",
    description: "AI-powered character and trinket optimizer for Dandy's World",
    siteName: "Dandy's World Characters",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dandy's World Characters Guide",
    description: 'Best character builds and trinket combinations',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
