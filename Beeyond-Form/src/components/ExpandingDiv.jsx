import React, { useRef } from 'react';
import { gsap } from 'gsap';

const ExpandingDiv = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    gsap.to(divRef.current, {
      duration: 0.5,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999,
      ease: 'power2.inOut'
    });
  };

  return (
    <div 
      ref={divRef} 
      onClick={handleClick}
      className="bg-blue-500 text-white p-4 cursor-pointer"
      style={{ width: '200px', height: '100px' }}
    >
      Click to expand
    </div>
  );
};

export default ExpandingDiv;