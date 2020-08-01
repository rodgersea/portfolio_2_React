import React from 'react';
import AboutMe from './Home/AboutMe';
import Contact from './Home/Contact';
import Experience from './Home/Experience';
import Education from './Home/Education';

function Home() {
  return (
    <div>
      <AboutMe />
      <Contact />
      <Education />
      <Experience />
    </div>
  )
}

export default Home;