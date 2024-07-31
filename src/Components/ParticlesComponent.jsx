import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./Particles"; // Adjust the import path
import Typed from "typed.js";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [colors, setColors] = useState(["#ffffff"]); // Default to white
  const typedElement = useRef(null); // Ref for Typed.js

  useEffect(() => {
    // Update colors based on the theme
    setColors(theme === "dark" ? ["#000000", "#ff0000", "#00ff00"] : ["#ffffff", "#0000ff", "#ff00ff"]); // Example color arrays for light and dark themes
  }, [theme]);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(typedElement.current, {
      strings: ["AI.", "SAAS.", "TECH."],
      typeSpeed: 100,
      backSpeed: 50, // Speed at which it types backwards
      backDelay: 1000, // Delay before typing backward
      startDelay: 100, // Delay before starting typing
      loop: true, // Infinite loop
    });

    // Cleanup Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b mt-36 md:mt-36 lg:mt-28 xl:mt-52 from-black to-gray-300/80 bg-clip-text text-center text-5xl sm:text-6xl lg:text-6xl xl:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        ZESTY <span ref={typedElement}></span>
      </h1>
      <p className="pointer-events-none w-[90%] sm:w-[70%] md:w-[55%] mt-7 whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-300/80 bg-clip-text text-center text-lg sm:text-xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-900/10">ZESTY drives the future of AI with innovative solutions that simplify complex challenges. Our cutting-edge technology empowers businesses to unlock the full potential of artificial intelligence and fuel growth.</p>
      <Particles
        className="absolute inset-0 h-full"
        quantity={700}
        ease={80}
        colors={colors} // Pass colors array
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
