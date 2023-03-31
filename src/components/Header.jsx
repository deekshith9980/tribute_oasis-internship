import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='navbar'>
      <div className="navbar-title">
        Elon Musk
      </div>
      <div className='navbar-links'>
         <div className='navbar-links_container'>
           <p><a id='home' href="#page1">Home</a></p>
           <p><a id='about' href="#page2">About</a></p>
           <p><a id='future' href="#page3">Future Plans</a></p>
           <p><a id='companies' href="#page4">Companies</a></p>
          </div>
      </div>
    </div>
  );
}

export default Header;
