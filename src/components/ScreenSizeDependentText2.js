import React, { useState, useEffect } from 'react';

const ScreenSizeDependentText = ({ text }) => {

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

  const [isSm, setIsSm] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = () => setIsSm(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return <div className={`xl:text-2xl lg:text-sm w-[300px] font-bold ${scrolled ? 'text-black' : 'text-gray-900'} ${isSm ? 'items-center' : null} ${isSm ? 'tracking-wider' : 'tracking-wide'} ${isSm ? 'mt-0' : 'mt-4'} ${isSm ? 'text-[22px]' : 'text-lg'}`}>{isSm ? text.replace('UST RESEARCH AND ENDOWMENT FOUNDATION INC.', 'REFI') : text}</div>;
};

export default ScreenSizeDependentText;