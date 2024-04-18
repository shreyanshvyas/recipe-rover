import React, { useEffect, useState } from "react";

function Dining() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
        const image = document.getElementById('plate'); 
        if (!image) return;

        const imageRect = image.getBoundingClientRect();
        const mouseX = e.clientX - imageRect.left;
        const mouseY = e.clientY - imageRect.top;

        const deltaX = mouseX - imageRect.width / 2;
        const deltaY = mouseY - imageRect.height / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180/ Math.PI);
            setRotate(angle+90);
            })
        })
   
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full flex flex-col justify-center items-center bg-cover bg-center bg-[url('./src/assets/dining2.jpg')]">
      {["ready", "to cook", "delicious food ?"].map((item, index) => (
      <h1 className="uppercase text-[12vw] leading-[10vw] tracking-loose font-semibold font-['Founders_Grotesk_X_Condensed_bold'] text-[#F8FAE5]" key={index}>
          {item}
        </h1>
      ))}
      <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100 ">
            <div id="plate" style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-full">
          <img src="./src/assets/plate.png"  alt=""  className="absolute"/>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Dining;

