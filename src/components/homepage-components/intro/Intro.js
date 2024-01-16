import React from 'react';
import './Intro.css';
import Headshot from './Headshot.JPG';
import IntroParagraph from './IntroParagraph';

const Intro = () => {
  return (
    <div className='all-intro-wrapper'>
        <img src={Headshot} alt='Headshot' className='picture' />
        <IntroParagraph className='paragraph' />
    </div>
  );
}

export default Intro;