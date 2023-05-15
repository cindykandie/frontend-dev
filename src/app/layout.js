import Banner from '@/components/banner'
import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Logo from '@/components/homeLogo'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
      <>
        <Head>
          <link rel="icon" type="image/svg" href="assets/icons/logo.png" />
        </Head>
        <Logo />
        <Banner />
        <Navbar />
          {children}
        <Footer />
      </>
  )
}
