import Banner from '@/components/banner'
import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Logo from '@/components/homeLogo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cindy Kandie',
  description: 'My Portolio: Get a feel of my skills',
}

export default function Layout({ children }) {
  return (
      <div lang="en">
        <Head>
          <link rel="icon" type="image/svg" href="assets/icons/logo.png" />
        </Head>
        <Logo />
        <Banner />
        <Navbar />
          {children}
        <Footer />
      </div >
  )
}
