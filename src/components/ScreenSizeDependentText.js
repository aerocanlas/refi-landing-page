import React, { useState, useEffect } from 'react';

const ScreenSizeDependentText = ({ text }) => {
  const [isSm, setIsSm] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = () => setIsSm(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return <div className={`xl:text-xl w-[300px] font-bold ${isSm ? 'items-center' : null} ${isSm ? 'tracking-wider' : 'tracking-wide'} ${isSm ? 'mt-0' : 'mt-4'} ${isSm ? 'text-[22px]' : 'text-xl'}`}>{isSm ? text.replace('Research & Endowment Foundation Incorporated', 'REFI') : text}</div>;
};

export default ScreenSizeDependentText;