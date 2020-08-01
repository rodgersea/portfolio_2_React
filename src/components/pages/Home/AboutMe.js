import React from 'react';

function AboutMe() {
  return (
    <div className='container'>
      <div className='row cols-sm-12 cols-md-10'>
        <div className='col-md-offset-1'>
          <h3>ABOUT ME</h3>
          <p>I'M ELLIOTT RODGERS, A RALEIGH, NC BASED WEB DEVELOPER.</p>
          <p>
            <strong>2011-2017</strong>
          </p>
          <p>
            I graduated from Appalachian State University in 2017 with a double major in Geology and Spanish, 
            as well as a minor in Mathematics. My new found passion for rock climbing in college led me to an interest in 
            geology. Including years in high school, more than <span className="heavy">a decade of spanish prepared me well for 
            the language component</span> present in learning to code. I had no idea what I wanted to do after school so for 
            the next few years I worked in several positions related to what I'd studied in college.
          </p>
          <p>
            <strong>2019-present</strong>
          </p>
          <p>
            I had a few friends complete coding bootcamps after college. The work they described to me once 
            they were working as web developers sounded to me like the <span className="heavy">perfect combination of design and 
            problem solving.</span> I spent much of 2019 researching what it means to be a web developer/designer and realized 
            that <span className="heavy">this was my calling.</span> I quit my job in Chattanooga, TN and moved back home to enroll 
            in the Full-Stack Web Development course offered by UNC-Chapel Hill.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;