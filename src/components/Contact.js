import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { TbPhoneCall } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbMapPinFilled } from "react-icons/tb";

export default function Contact() {
  return (
    <>
    <Navbar2/>
    <title>REFI | Directory of Grants</title>
    <div className="hero min-h-screen">
  <div className="hero-content">

    <div className="flex flex-col">
    <h2>Contact Us</h2>
    <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <div class="h-[500px] w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.807233558685!2d120.9867547757736!3d14.610054376843864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fe311ece61%3A0xfff13cf2f4387bc9!2sUniversity%20of%20Santo%20Tomas%20(UST)!5e0!3m2!1sen!2sph!4v1709511543846!5m2!1sen!2sph" width="450" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
              </iframe>
          </div>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <TbPhoneCall size={30}/>

                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">
                  Office Nos:
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  (+632) 8749-9730
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  8786-1611 loc. 8430
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <TbMapPinFilled size={30}/>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">
                    Location
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  1/F Main Building,
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  University of Santo Tomas
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  España Blvd., Sampaloc, Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <TbMail size={30}/>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">Email Address</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  grants@ust.edu.ph
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  </div>
  </div>
    <Footer/>
    </>
  )
}