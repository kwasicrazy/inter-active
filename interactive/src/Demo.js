import React from 'react';
import TextAnimation from './TextAnimation';

const Demo = () => {
  const texts = ['Demo is under development. . . .'];

  return (
    <div className='demo-page'>
      
      <TextAnimation texts={texts} />
    </div>
  );
};

export default Demo;

