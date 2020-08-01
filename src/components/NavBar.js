import React from 'react';

function NavBar(props) {
  return (
    <header className='sticky row'>
      <div className='col-sm col-md-10 col-md-offset-1'>
        <a 
          role='button'
          href='#profile'
          onClick={() => props.handlePageChange('Profile')}
          >Home
        </a>
        <a 
          role='button'
          href='#interests'
          onClick={() => props.handlePageChange('Interests')}
          >Interests
        </a>
        <a 
          role='button'
          href='#javascript'
          onClick={() => props.handlePageChange('Javascript')}
          >Javascript
        </a>
        <a 
          role='button'
          href='#schoolwork'
          onClick={() => props.handlePageChange('SchoolWork')}
          >School Work
        </a>
        <a 
          role='button'
          href='#python'
          onClick={() => props.handlePageChange('Python')}
          >Python
        </a>
      </div>
      
    </header>
  )
}

export default NavBar;