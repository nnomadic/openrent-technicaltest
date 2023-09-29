import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import Footer from "@/ui/footer/footer";
import Nav from "@/ui/nav/nav";

const openSans = Open_Sans({ subsets: ['latin'] })
const montSerrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${montSerrat.className}`}>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  )
}
