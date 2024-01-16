import React from 'react';
import './ScrollForMoreButton.css';
import DownArrows from './Down-Arrows.png';

const ScrollForMoreButton = () => {
  return (
    <div className='scroll-down-button'>
        <p>More About Me</p>
        <img src={DownArrows} alt='Down Arrows' className='down-icon' />
    </div>
  );
}

export default ScrollForMoreButton;