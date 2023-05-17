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
          <title>Cindy Kandie</title>
          <meta name="description" content="Welcome to my portfolio, where creativity meets functionality! As a skilled and experienced frontend web developer, I specialize in crafting visually stunning and user-friendly websites. With a keen eye for design and a passion for delivering seamless user experiences, I bring ideas to life through clean and efficient code.Through my expertise in HTML, CSS, and JavaScript, I transform static designs into dynamic and responsive websites that captivate visitors and drive engagement. I am well-versed in modern frontend frameworks and libraries such as React, Angular, and Vue.js, enabling me to build interactive and scalable web applications.My portfolio showcases a diverse range of projects, ranging from stylish corporate websites to engaging e-commerce platforms. I prioritize performance optimization and ensure that my websites are optimized for speed, accessibility, and search engine visibility.Collaboration and communication are integral parts of my workflow. I work closely with clients and cross-functional teams to understand their unique requirements and deliver tailored solutions that exceed expectations. Whether it's revamping an existing website or starting from scratch, I thrive on challenges and am committed to delivering high-quality work within deadlines. I am constantly honing my skills and staying up to date with the latest trends and technologies in the frontend development landscape. This ensures that my clients receive modern, future-proof solutions that keep them ahead in the digital world.Take a moment to explore my portfolio and see firsthand how my expertise and passion for frontend development can elevate your online presence. If you're ready to take your project to the next level, let's connect and discuss how we can work together to achieve your goals."></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" type="image/svg" href="assets/icons/logo.png" />
        </Head>
        <Navbar />
          {children}
        <Footer />
      </>
  )
}
