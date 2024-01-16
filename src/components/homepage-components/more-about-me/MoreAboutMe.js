import React from 'react';
import './MoreAboutMe.css';
import ScrollForMoreButton from './ScrollForMoreButton';
import Background from './Background';

const MoreAboutMe = () => {
  return (
    <div>
        <ScrollForMoreButton />
        <br /><br />
        <div className='more-about-wrapper'>
            <Background />
        </div>
    </div>
  );
}

export default MoreAboutMe;