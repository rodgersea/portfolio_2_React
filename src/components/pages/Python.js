import React from 'react';
import List from './Python/python.json'
import PythonCard from './Python/PythonCard';

const projects = List.projects;

function Python() {
  return (
    <div>
      {projects.map(unit => (
        <PythonCard
          key={unit.key}
          code={unit.code}
          link={unit.link}
        />
      ))}
    </div>
  )
}

export default Python;