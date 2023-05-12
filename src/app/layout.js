import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cindy Kandie',
  description: 'My Portolio: Get a feel of my skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg" href="assets/icons/mail.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
