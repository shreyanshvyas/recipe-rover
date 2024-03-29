import React from 'react'

function LandingPage() {
  return (
    <div className="w-full h-screen bg-[url('./src/assets/menu1.jpg')] brightness-90 bg-cover overflow-hidden">
        {/* <img src="./src/assets/layer2.png" alt="" className="w-full h-screen z-2 bg-contain "/> */}
        <div className="h-[50%] flex flex-col">
        <h1 className=" uppercase text-[26vw] flex items-end justify-center mt-52 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-[.6] -mb-[.6vw]"> recipe rover </h1>
        <div className="flex uppercase justify-end items-center px-40 gap-3 font-['Neue_Montreal'] font-bold">
        <p className="text-2xl text-black">More than just a </p>
        <p className="text-2xl text-[#F8FAE5]">Recipe App</p> </div>
        <div className="w-full flex item-center justify-center mx-32">
        <img src="./src/assets/logo.png" alt="logo"  className="bg-transparent object-scale-down w-52 py-3"/> </div>
        </div>
    </div>
  );
}

export default LandingPage