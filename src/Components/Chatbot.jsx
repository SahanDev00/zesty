import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.landbot.io/landbot-widget/landbot-widget-1.0.0.js";
    script.async = true;
    script.onload = () => {
      new window.LandbotFrameWidget({
        container: '#myLandbot',
        index: 'https://landbot.online/v3/H-2574218-RQPNRGWODIIKGFWG/index.html',
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-[90%] sm:w-[85%] md:w-[60%] lg:w-[70%] h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-[60vh] mx-auto mt-20 mb-20' id="myLandbot"></div>
  );
}

export default Chatbot;
