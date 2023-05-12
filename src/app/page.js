import CustomHead from "@/components/CustomHead";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main";
import "./globals.css"

export default function Home() {
  return (
    <main className="">
      <CustomHead />
      <Banner />
      <Navbar />
      <MainPage /> 
    </main>
  )
}