import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./Particles"; // Adjust the import path

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [colors, setColors] = useState(["#ffffff"]); // Default to white

  useEffect(() => {
    setColors(theme === "dark" ? ["#000000", "#ff0000", "#00ff00"] : ["#ffffff", "#0000ff", "#ff00ff"]); // Example color arrays for light and dark themes
  }, [theme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
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
