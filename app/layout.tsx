import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from "@/app/footer"
import './globals.css'

//import '@fortawesome/fontawesome-svg-core/styles.css'

import Navbar from '@/app/navbar'
const poppins = Poppins({weight: ['100', '200', '400', '600', '800'],  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brotherstone | Katy Tx Mobile Detailing',
  description: 'Professional mobile detailing services in Katy, Texas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}