import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import blackHole from '../Models/blackhole.glb';
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 490px)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate new opacity
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen relative mb-10">
      <Canvas 
        className="absolute inset-0 z-20 w-full mb-10" 
        style={{ height: '100vh', opacity, transition: 'opacity 0.5s ease-in-out' }} // Adjust transition for smooth opacity change
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <OrbitControls 
          enableRotate={true} 
          enableZoom={false} 
          enablePan={true} 
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
          minPolarAngle={Math.PI / 2} // Restrict vertical rotation
          enableDamping={true} 
          dampingFactor={0.25}
        />
        <Model 
          url={blackHole}
          scale={
            isMobile 
              ? [1.5, 1.4, 1.5] 
              : isTabletOrMobile 
              ? [2.3, 2, 2.3] 
              : [3.5, 3, 3.5]
          }  
          position={[0, -3, 0]}  // Adjust the Y position as needed
        />
      </Canvas>
    </div>
  );
};

export default Hero;
