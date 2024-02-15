import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bottom-0 right-0 footer footer-center p-10 bg-yellow-300 text-primary-content">
  <aside>
  <img src="logo-refi.png" alt="Logo" width="100" height="100" />
      <p className="text-lg font-bold text-gray-600">
      Research & Endowment Foundation Incorporated
    </p> 
    <p className="italic font-bold text-gray-600">
        An Accredited Organization by the Philippine Council for NGO Certification
    </p> 
  </aside> 
  <nav>
  <p className="text-[16px] font-bold text-gray-600">
  Accredited by: 
    </p> 
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.pcnc.com.ph/'><img src="pcnc.png" alt="PCNC" width="100" height="100" /></a>
      <a href='https://www.dswd.gov.ph/'><img src="dswd.png" alt="DSWD" width="95" height="90" /></a>
    </div>
    <p className='text-gray-600'>Copyright © 2024 Research & Endowment Foundation Incorporated - All right reserved</p>
  </nav>
</footer>
  )
}

export default Footer