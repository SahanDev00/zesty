import React from "react";
import confetti from "canvas-confetti";

const ConfettiFireworks = () => {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="relative">
        <div onClick={handleClick} className='h-[70px] mt-5 bg-white rounded-b-xl flex justify-center items-center'>
            <button className='w-full h-full flex items-center justify-center font-semibold text-xl '>BUY NOW</button>
        </div>
    </div>
  );
};

export default ConfettiFireworks;
