import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import BrandToggle from '@/components/BrandToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OldGuy',
  description: "OldGuy Token",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrandToggle />
        {children}
      </body>
    </html>
  )
}
