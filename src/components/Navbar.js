import React, { useState, useEffect, useRef, } from 'react'
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import ScreenSizeDependentText from './ScreenSizeDependentText';

const Navbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    if (width <= 640) {
      setHide(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const [isSm, setIsSm] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = () => setIsSm(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
//     <div class="mt-10 px-40 navbar bg-base-100">
//   <div class="navbar-start">
//     <div class="dropdown">
//       <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//       <li><NavLink to='/Home'>Home</NavLink></li>
//       <li><NavLink to='/About'>About</NavLink></li>
//       <li><a>Programs</a></li>
//       <li><a>Download</a></li>
//       <li><a>Directory of Grants</a></li>
//       <li><a>Contact</a></li>
//       </ul>
//     </div>
//     <img src="logo-refi.png" alt="Logo" width="100" height="100" />
//     <div className="flex flex-col text-left ml-4">
//       <a class="text-xl font-bold">
//       Research & Endowment 
//       </a>
//       <a class="text-lg">
//       Foundation Incorporated
//       </a>
// </div>
//   </div>
  // <div class="navbar-center hidden lg:flex">
  //   <ul class="menu menu-horizontal px-1">
  //   <li><NavLink to='/Home'>Home</NavLink></li>
  //   <li><NavLink to='/About'>About</NavLink></li>
  //   <li><NavLink to='/Contact'>Contact</NavLink></li>
  //   <li><NavLink to='/Programs'>Programs</NavLink></li>
  //   <li><NavLink to='/Download'>Download</NavLink></li>
  //   </ul>
  // </div>
//   <div class="navbar-end">

// <NavLink to='/Donate'>
// <a className="btn bg-blue-700 text-white">  <FaHeart size={10}/> Donate Now </a>

//     </NavLink>  </div>
// </div>

<div className={`fixed navbar bg-base-100 py-6 z-10 ${isSm ? 'px-10' : 'px-40'} transition duration-500 ease-in-out ${scrolled ? 'bg-opacity-60' : ''}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/Home'>Home</NavLink></li>
        <li>
          <a>About</a>
          <ul className="p-2">
            <li><a>Directory of Grants</a></li>
            <li><a>Professional Chair</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
        <li>
          <a>Programs</a>
          <ul className="p-2">
            <li><a>Research Grant</a></li>
            <li><a>Scholarship Grant</a></li>
            <li><a>Thesis / Dissertation Grant</a></li>
            <li><a>Travel / Study / Training Grant</a></li>
            <li><a>Community Development / Outreach Grant</a></li>
          </ul>
        </li>
        <li><a>Download</a></li>
      </ul>
    </div>
    <div className='flex flex-row gap-6'>
    {hide ? null : <img id="logo-image" src="logo-refi.png" alt="Logo" width="100" height="100" />} 
    <ScreenSizeDependentText text="Research & Endowment Foundation Incorporated"/> 
    {/* <a className='sm:[10px] md:[25px] xl:text-xl font-bold'>Research & Endowment Foundation Incorporated</a> */}
    </div>    
    </div>

  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 font-bold gap-6 mx-6">
    <li><NavLink to='/Home'>Home</NavLink></li>
      <li>
      <div className="dropdown dropdown-hover">
          <div tabIndex={0}><NavLink to='/About'>About</NavLink></div>
            <div className='mt-4 -ml-[140px]'>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow items-center rounded-box w-52 mt-2 bg-gray-600">
                <li className='text-gray-900 hover:text-white'><a>Directory of Grants</a></li>
                <li className='text-gray-900 hover:text-white'><a>Professional Chair</a></li>
              </ul>
          </div>
      </div>
      </li>
      <li><NavLink to='/Contact'>Contact</NavLink></li>
      <li>
      <div className="dropdown dropdown-hover">
          <div tabIndex={0}><NavLink to='/Programs'>Programs</NavLink></div>
            <div className='mt-4 -ml-[185px]'>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow items-center rounded-box w-72 mt-2 bg-gray-600">
                <li className='text-gray-900 hover:text-white'><a>Research Grant</a></li>
                <li className='text-gray-900 hover:text-white'><a>Scholarship Grant</a></li>
                <li className='text-gray-900 hover:text-white'><a>Thesis / Dissertation Grant</a></li>
                <li className='text-gray-900 hover:text-white'><a>Travel / Study / Training Grant</a></li>
                <li className='text-gray-900 hover:text-white'><a>Community Dev't / Outreach Grant</a></li>
              </ul>
          </div>
      </div>
      </li>
      <li><NavLink to='/Download'>Download</NavLink></li>
    </ul>
  </div>
  <NavLink to='/Donate'>
      <a className="btn bg-blue-700 text-white">  <FaHeart size={10}/> Donate Now </a>
  </NavLink> 
  </div>
</div>

  )
}

export default Navbar