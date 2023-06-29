import React, { useEffect, useState } from 'react';

const TextAnimation = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const textToType = texts[currentIndex];
    let typingTimeout;

    const typeText = () => {
      if (currentText.length === textToType.length) {
        clearTimeout(typingTimeout);
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      } else {
        setCurrentText((prevText) => textToType.slice(0, prevText.length + 1));
        typingTimeout = setTimeout(typeText, 150);
      }
    };

    typingTimeout = setTimeout(typeText, 150);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [currentIndex, currentText, texts]);

  return <div className="text-container">{currentText}</div>;
};

export default TextAnimation;

