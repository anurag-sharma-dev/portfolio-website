import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

export default function GlobeBackground({ children }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: false,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.8,
      color: 0xff3030,         // Globe color (blue)
      backgroundColor: 0x0d0d0d, // Background (dark gray)
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
   <div 
  ref={vantaRef} 
  className="h-screen sm:h-screen md:h-[100vh] w-full relative"
>
  <div className="relative z-10">{children}</div>
</div>

  );
}
