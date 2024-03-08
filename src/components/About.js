
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../layout/flip.scss'
import { useEffect, useState  } from "react";
import '../layout/tabs.css'
import '../layout/scramble.css'
import MyTabs from './MyTabs'
import React
 from "react";



  const History = () => {

    return (
      <>
      <h2>History</h2>

      <p>The UST Research and Endowment Foundation, Inc. was established in 1991 to facilitate and manage the donations for the scholarship of both students and faculty of the University of Santo Tomas. Since then, it has received support from Thomasian alumni and industry partners. Over the years, maintaining its good standing with the Securities and Exchange Commission, the Bureau of Internal Revenue, and the Department of Social Welfare and Development has helped the Foundation in its efforts to aid students, faculty, and support staff of UST.

 

<br/>
<br/>In 2017, the Foundation received its certification from the Philippine Council for NGO Certification, as well as the Donee Institution Status from the Bureau of Internal Revenue.</p>
      </>
    )
  }

  const VisionMission = () => {

    return (
      <>
<h2 className="font-bold text-[23px] text-left">Vision & Mission</h2>

<div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Mission</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation, as a partner of the University of Santo Tomas, in pursuit of truth, guided by reason and illumined by faith, dedicates itself to support the generation, advancement, and transmission of knowledge and social involvement to form competent and compassionate professionals, committed to the service of the Church, the nation, and the global community.

                </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Vision</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation envisions to aid the University of Santo Tomas to maintain the University’s centuries-old tradition of excellence as a premier Catholic institution of learning in Asia, committed to the professional and moral formation of its stakeholders for social transformation.
                </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Goal</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The goal of the UST Research and Endowment Foundation, Inc. is to support the University of Santo Tomas community to successfully fulfil its mission “to form competent and compassionate professionals, committed to the service of the Church, the nation, and the global community.”                      </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Objectives</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation envisions to aid the University of Santo Tomas to maintain the University’s centuries-old tradition of excellence as a premier Catholic institution of learning in Asia, committed to the professional and moral formation of its stakeholders for social transformation.
                </dd>
            </div>

           
        </dl>
    </div>


      </>
    )
  }

  const TheBoardOfDirectors = () => {

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
      <h2>The Board of Directors</h2>
<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">

    <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-1 xl:grid-cols-4">
      <div class="mb-12">
        <img src="./images/president.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">VERY. REV. FR. RICHARD G. ANG, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">President and Chairman of the Board</p>
      </div>

      <div class="mb-12">
        <img src="./images/vp.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />

        <p class="mb-2 font-bold">REV. FR. ISAIAS D. TIONGCO, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Vice President</p>
      </div>

      <div class="mb-12">
        <img src="./images/treasurer.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">REV. FR. ROBERTO L. LUANZON, JR., OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Treasurer
        </p>
      </div>
      <div class="mb-12">
        <img src="./images/corporate secretary.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">REV. FR. LOUIE R. CORONEL, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Corporate Secretary</p>
      </div>

      <div class="mb-12">
        <img src="./images/director.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">REV. FR. MAXIMO P. GATELA, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">
          Director
        </p>
      </div>

      <div class="mb-12">
        <img src="./images/member 1.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">REV. FR. RODEL E. ALIGAN, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 2.jpg"
          class={`mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20`} alt=""  />
        <p class="mb-2 font-bold">REV. FR. RODEL S. CANSANCIO, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 3.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">PROF. CHERYL R. PERALTA</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 4.jpg"
          class={`mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 ${isSm ? 'w-52' : 'w-40'}`} alt=""  />
        <p class="mb-2 font-bold">PROF. MARIBEL G. NONATO</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Member
        </p>
      </div>

      <div class="mb-12">
        <img src="./images/member 5.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""  />
        <p class="mb-2 font-bold">MRS. CLOTILDE N. ARCANGEL</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Member
        </p>
      </div>

    </div>
  </section>
</div>
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
    const [isSm, setIsSm] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 640px)');
      const handleChange = () => setIsSm(mediaQuery.matches);
  
      mediaQuery.addListener(handleChange);
      handleChange();
  
      return () => mediaQuery.removeListener(handleChange);
    }, []);

    return (
      
      <div className={`tab`}>
        <div className={`tab-headers ${isSm ? 'mb-20' : 'mt-0'}`}>
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

        <div className={`tab-body`}>

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

<section className="flex items-start justify-center">
    <MyTabs/>
  </section>

<Footer/>

    </>
  )
}

export default About