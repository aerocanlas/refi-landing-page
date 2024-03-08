import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import MyTabsPrograms from '../components/MyTabsPrograms'
export default function Programs() {
  return (
    <>
    <title>REFI | Programs </title>
    <Navbar2/>
    <div className="hero min-h-screen">
  <div className="hero-content">

    <div className="flex flex-col">
    <h3>Programs</h3>

    <MyTabsPrograms/>


    </div>
  </div>
  </div>
    <Footer/>
    </>
  )
}