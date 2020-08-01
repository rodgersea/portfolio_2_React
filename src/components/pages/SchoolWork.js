import React from 'react';
import List from './SchoolWork/schoolwork';
import SchoolWorkCard from './SchoolWork/SchoolWorkCard';

const projects = List.projects;

function SchoolWork() {
  return (
    <div className="container">
      <div className='row cols-sm-12 cols-md-10'>
        <div className='col-md-offset-1'>
          {projects.map(unit => (
            <SchoolWorkCard
              key={unit.key}
              activity={unit.activity}
              content={unit.content}
              deployed={unit.deployed}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolWork;