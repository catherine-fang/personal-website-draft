import React from 'react';
import './Homepage.css';
import Intro from '../components/homepage-components/intro/Intro';
import MoreAboutMe from '../components/homepage-components/more-about-me/MoreAboutMe';

const Homepage = () => {
  return (
    <div className='homepage'>
      <br /><br />
      <Intro />
      <br />
      <MoreAboutMe />
    </div>
  );
}

export default Homepage;