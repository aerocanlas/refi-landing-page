import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function Download() {
  return (
    <>
    <title>REFI | Download</title>
    <Navbar/>
    <div className="hero h-screen">
      


    <Card className="max-w-lg" imgSrc="./images/report_cover.jpg" vertical>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Report of the Foundation


      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Fiscal Years 2017-2019      </p>

      <Button><a href="report.pdf" download="Report of the Foundation.pdf">Download</a></Button>
    </Card>


    </div>
    <Footer/>
    </>
  )
}