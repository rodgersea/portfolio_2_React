import React from 'react';
import List from './Javascript/javascript'
import JavascriptCard from './Javascript/JavascriptCard';

const projects = List.projects;

function Javascript() {
  return (
    <div className="container">
      <div className='row cols-sm-12 cols-md-10'>
        <div className='col-md-offset-1'>
          {projects.map(unit => (
            <JavascriptCard
              key={unit.key}
              activity={unit.activity}
              content={unit.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Javascript;