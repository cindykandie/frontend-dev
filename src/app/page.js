import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main";
import "./globals.css"
import Footer from "@/components/footer";
import Projects from "@/pages/projects";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Navbar />
      <Projects />
      <Footer /> 
    </main>
  )
}