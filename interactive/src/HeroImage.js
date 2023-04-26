import React, { useState, useEffect } from 'react';
import logo1 from './img/technologist.svg'
import logo2 from './img/webpositive.svg'


const ImageGallery = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  useEffect(() => {
    // This function will be called every 3 seconds (3000 milliseconds)
    const interval = setInterval(() => {
      setIsImage1Visible(!isImage1Visible);
    }, 3000);

    // Cleanup the interval when the component unmounts or when the isImage1Visible value changes
    return () => {
      clearInterval(interval);
    };
  }, [isImage1Visible]);

  return (
    <div>
      {isImage1Visible ? (
        <img src={logo1} alt="logo1" height='500px'  width='400px'/>
      ) : (
        <img src={logo2} alt="logo2" height='500px'  width='400px'/>
      )}
    </div>
  );
};

export default ImageGallery;
