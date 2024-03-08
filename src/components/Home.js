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
      <h1 className="mb-5 text-5xl font-medium tracking-widest">Give Now</h1>
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

<div class="bg-gradient-to-blue from-blue-50 to-gray-50 flex items-center justify-center lg:h-[800px]">
      <div class="container mx-auto my-auto p-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-20">
         
          <div class="bg-white rounded-lg border p-4 sm:lg:h-[750px] lg:h-[550px]">
            <img src="/news 1.png" alt="Groundbreaking Ceremonies" class="w-full h-72 rounded-md object-cover" />
            <div class="px-1 py-4">
              <div class="font-bold text-2xl mb-10">Groundbreaking Ceremonies</div>
              <p class="text-gray-700 text-base">
              Diorama of the Dr. Tony Tan Caktiong Innovation Center currently being built at the Sta. Rosa, Laguna campus of the University of Santo Tomas.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline"><br/>Read More</a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4 sm:lg:h-[750px] lg:h-[550px]">
            <img src="/news 2.png" alt="Lecture" class="w-full h-72 rounded-md object-cover" />
            <div class="px-1 py-4">
              <div class="font-bold text-2xl mb-10">Professional Lecture</div>
              <p class="text-gray-700 text-base">
              The conference, held in commemoration of the 475th Death Anniversary of Saint Thomas Aquinas, was the first conference organized bythe Faculty of Philosophy Students Forum (FPSF) on the topic.            
              </p>
              </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}