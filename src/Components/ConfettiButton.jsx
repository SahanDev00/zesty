import React from "react";
import confetti from "canvas-confetti";

const ConfettiButton = ({ options, children, ...props }) => {
  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    confetti({
      ...options,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
    });
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default ConfettiButton;
