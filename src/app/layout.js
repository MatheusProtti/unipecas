import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Whats from '@/Components/WhatsApp'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
        <Whats />
        </body>
    </html>
  )
}
