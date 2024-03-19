import React from "react";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(prevScrollPos <  currentScrollPos && currentScrollPos > 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <nav style={{ display: isHidden ? 'none' : 'block'  }}>
    <div  className="fixed z-[5] w-full px-12 flex justify-between items-center backdrop-blur-[2px]">
      <div className="logo flex gap-5">
       <img src="./src/assets/logo.png" alt="logo"  className="bg-transparent object-scale-down w-20 py-3"/>
       {/* <img src="./src/assets/recipe-rover.png" alt="logo" className="bg-transparent object-scale-down w-48" /> */}
      </div>
      <div className="links flex gap-10 py-10">
        {["Home", "Search recipes", "Personalized Recipes", "Recipe books", "Login / Signup"].map((item,index) => (
          <a key={index} className={`text-lg font-extralight text-[#F8FAE5] font-['Neue_Montreal'] ${index === 4 && "ml-24 -mt-2 border rounded-xl p-4 uppercase text-sm leading-[.6] bg-[#43766C] "}`}>{item}</a>
        ))}
      </div>
    </div>
    </nav>
  );
}


export default Navbar;
