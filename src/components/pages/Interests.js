import React from 'react';
import List from './Interests/Interests'
import InterestCard from './Interests/InterestCard';

const interests = List.interests;

function Interests() {
  return (
    <div className="container">
      <div className='row cols-sm-12 cols-md-10'>
        <div className='col-md-offset-1'>
          {interests.map(unit => (
            <InterestCard
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

export default Interests;