
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideMenu from "./SideMenu";
import { useEffect, useState  } from "react";
import '../layout/tabs.css'
import '../layout/scramble.css'

import React
 from "react";



  const History = () => {

    return (
      <>
      <h2>History</h2>

      <p>Lorem ipsum</p>
      </>
    )
  }

  const VisionMission = () => {

    return (
      <>
      <h2>Vision & Mission</h2>

      <p>Lorem ipsum</p>
      </>
    )
  }

  const TheBoardOfDirectors = () => {

    return (
      <>
      <h2>The Board of Directors</h2>

      <p>Lorem ipsum</p>
      </>
    )
  }

  const OurBeneficiaries = () => {

    return (
      <>
      <h2>Our Beneficiaries</h2>

      <p>Lorem ipsum</p>
      </>
    )
  }

  const Tabs = ({config}) => {
    const [activeTab, setActiveTab] = React.useState(0)

    return (
      <div className="tab">
        <div className="tab-headers">
          {

            config.map((entry, index) => (
              <div
                className={`tab-header ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {entry.header}
              </div>

            ))
          }
        </div>
        <div className="tab-body">

          {config[activeTab].component} 

        </div>
      </div>
    )
  }


  
const About = () => {

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
    <title>REFI | About </title>
    <Navbar/>
    
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.ctfassets.net/970q4hu1vjn7/r2SLOJB49LmLai34iry10/193cbf2cac1ea30b3e1612f6d76f597b/corporate-vs-academic-research.webp?w=1600&fm=jpg&fl=progressive)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    
    <h1>
<div className="flex flex-row gap-4">
<span>About</span>
    <span>Us</span>
</div>
    </h1>
  

      {/* <p className="mb-5">CHAMPIONING THOMASIAN EXCELLENCE AND INNOVATION. EMPOWER A THOMASIAN ADVOCACY.</p>
      <button className="btn btn-primary text-lg font-semibold">Explore</button> */}
    </div>
  </div>
</div>

<div className={`bg-base-200 py-10 ${isSm ? 'min-h-60' : 'min-h-screen'}`}>
  <div className="hero">
    <div className="max-w-[1000px] ">


      <Tabs
       config={[
        {header:'History', component:<History/>},
        {header:'Vision & Mission', component:<VisionMission/>},
        {header:'The Board of Directors', component:<TheBoardOfDirectors/>},
        {header:'Our Beneficiaries', component:<OurBeneficiaries/>},
      ]}
      />

      {/* <h1 className={`font-bold ${isSm ? 'text-2xl' : 'text-5xl'}`}>
      An Accredited Organization by the Philippine Council for NGO Certification
      </h1> */}
    </div>
  </div>
</div>

    <Footer/>
    </>
  )
}

export default About