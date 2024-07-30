import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import ParticlesDemo from "./ParticlesComponent";
import blackHole from '../Models/blackhole.glb';
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate new opacity
      // Ensure opacity is between 0 and 1
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen relative">

      <Canvas 
        className="absolute inset-0 z-20 w-full" 
        style={{ height: '100vh', opacity, transition: 'opacity 0.0005s ease-in-out' }} // Adjust transition for smooth opacity change
      >
        <ambientLight intensity={0} />
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
          scale={[3.5, 3, 3.5]}  // Scale horizontally by half
          position={[0, -3, 0]}  // Adjust the Y position as needed
        />
      </Canvas>
    </div>
  );
};

export default Hero;
