import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import './navbar.css'
export default function NavBar() {
  const [toggleNavBar, settoggleNavBar] = useState(true)
  function openAndCloseNav() {
    return (settoggleNavBar(!toggleNavBar));
  }

  // const
  return (
      <div className='navbar-container'>
          <div className='logo-container'>
              <img src='./Sundown logo.svg' alt='logo' className='logo' />
          </div>

      <div className={toggleNavBar ? 'main-overlay-container' : 'main-overlay-container_active'}>
      <div className='close-nav-btn' onClick={openAndCloseNav}>=</div>
        <div className='overlay-container'>

          <ul>
              <li>work</li>
              <li>studio</li>
              <li>contact</li>
        </ul>
        </div>
        </div>
      
      <div className='open-nav-btn' onClick={openAndCloseNav}>=</div>
    </div>
  )
}
