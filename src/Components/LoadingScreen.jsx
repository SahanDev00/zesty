import React from 'react';
import gif from '../Images/Loading.gif'

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center bg-gray-800 z-50">
      <div className="text-white text-xl">
        <img src={gif} alt="" className='block inset-0'/>
      </div>
    </div>
  );
};

export default LoadingScreen;
