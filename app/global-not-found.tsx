// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import BackLink from '../components/ui/back-link'
import HomeLink from '../components/ui/home-link'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-auto px-4 py-16 text-center h-screen content-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">This page does not exist.</p>
        <div className="flex items-center justify-center gap-2">
          <BackLink />
          <span>   |   </span>  
          <HomeLink />
        </div>
      </body>
    </html>
  )
}