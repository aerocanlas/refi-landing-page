import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState  } from "react";
export default function Home() {

  const [isSm, setIsSm] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = () => setIsSm(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <>
    <title>REFI | Home </title>
    <Navbar/>

    {/* Hero Image */}
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Give Now</h1>
      <p className="mb-5">CHAMPIONING THOMASIAN EXCELLENCE AND INNOVATION. EMPOWER A THOMASIAN ADVOCACY.</p>
      <button className="btn btn-primary text-lg font-semibold">Explore</button>
    </div>
  </div>
</div>

{/* Hero Text */}

<div className={`hero  bg-base-200 ${isSm ? 'min-h-60' : 'min-h-96'}`}>
  <div className="hero-content text-center">
    <div className="max-w-[1000px] mx-10">
      <h1 className={`font-bold ${isSm ? 'text-2xl' : 'text-5xl'}`}>
      An Accredited Organization by the Philippine Council for NGO Certification
      </h1>
    </div>
  </div>
</div>
    <Footer/>
    </>
  )
}