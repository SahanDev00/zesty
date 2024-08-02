import React from 'react';
import gif from '../Images/Loading.gif'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
      <div className="text-white text-xl">Loading...</div>
      <img src={gif} alt="" />
    </div>
  );
};

export default LoadingScreen;
