import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState  } from "react";
import { Carousel } from 'flowbite-react';

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
    <div className="hero">
  <div className="-mt-1.5 hero-overlay bg-opacity-60">
  <div className="carousel w-screen xl:h-screen">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="./images/slides/1.jpg" className="w-full object-cover object-center opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="./images/slides/2.jpg" className="w-full object-cover object-center  opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src="./images/slides/3.jpg" className="w-full object-cover object-center  opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src="./images/slides/4.jpg" className="w-full object-cover object-center opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img src="./images/slides/5.jpg" className="w-full object-cover object-center opacity-60 " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <img src="./images/slides/9.jpg" className="w-full object-cover object-center opacity-80 " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </div>
  {/* <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-medium tracking-widest text-black ">Give Now</h1>
      <p className="mb-5 text-black">CHAMPIONING THOMASIAN EXCELLENCE AND INNOVATION. EMPOWER A THOMASIAN ADVOCACY.</p>
      <button className="btn btn-primary text-lg font-semibold">Explore</button>
    </div>
  </div> */}
</div>

{/* Hero Text */}

<div className={`hero bg-base-200 ${isSm ? 'min-h-60' : 'min-h-96'}`}>
  <div className="hero-content text-center">
    <div className="max-w-[1000px] mx-10">
      <h1 className={`font-bold ${isSm ? 'text-2xl' : 'text-5xl'}`}>
      An Accredited Organization by the Philippine Council for NGO Certification
      </h1>
    </div>
  </div>
</div>
-
<div class="bg-gradient-to-blue from-blue-50 to-gray-50 flex items-center justify-center lg:h-[800px]">
      <div class="container mx-auto my-auto p-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-20">
         
          <div class="bg-white rounded-lg border p-4 ">
            <img src="./images/slides/7.jpg" alt="Groundbreaking Ceremonies" class="w-full h-72 rounded-md object-cover" />
            <div class="px-1 py-4">
              <div class="font-bold text-2xl mb-10">Groundbreaking Ceremonies</div>
              <p class="text-gray-700 text-base">
              On January 26, 2024, the University of Santo Tomas held the groundbreaking rites of the UST Santa Rosa – Dr. William T. Belo Interdisciplinary Research Institute (UST-WitBIRIn), adding the second edifice to the research and innovation-focused extension campus.              </p>
            </div>
            <div class="px-1 py-4">
              <a href="/News1" class="text-blue-500 hover:underline"><br/>Read More</a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4 ">
            <img src="./images/slides/8.jpg" alt="Lecture" class="w-full h-72 rounded-md object-cover" />
            <div class="px-1 py-4">
              <div class="font-bold text-2xl mb-10">Professorial Lecture</div>
              <p class="text-gray-700 text-base">
              Prof. Angeles Tan Alora, M.D., a former Dean and alumna of the University of Santo Tomas Faculty of Medicine and Surgery (FMS), was conferred the Doña Victoria Ty Tan Professorial Chair in a solemn investiture held at the Dr. George SK Ty Hall of the Bl. Buenaventura García Paredes, O.P. Building on November 14, 2023. The professorial chair is named after Doña Victoria Ty Tan, mother of Dr. George S.K. Ty, who founded Metrobank.              </p>
              </div>
            <div class="px-1 py-4">
              <a href="/News2" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}