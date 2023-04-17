import React from 'react'
import { Link } from 'react-router-dom'

// Style
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav">
      <div className='nav-wrapper'>
        <figure className='nav-logo'>
          <Link to="/">Aisu-Portfilio</Link>
        </figure>
        <ul className='nav-menu'>
          <li className='nav-menu-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-menu-link'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar