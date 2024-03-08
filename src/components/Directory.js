import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import MyTabsDirectory from '../components/MyTabsDirectory';

export default function DirectoryOfGrants() {
  return (
    <>
    <Navbar2/>
    <title>REFI | Directory of Grants</title>
    <div className="hero min-h-screen">
  <div className="hero-content">

    <div className="flex flex-col">
    <h2> Directory of Grants</h2>

    <MyTabsDirectory/>


    </div>
  </div>
  </div>
    <Footer/>
    </>
  )
}