import React from 'react';
import './header.css';
import '../../../App.css';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';


const Header = () => {
  return (
    <div className="header container">
      <MobileMenu />
      <div className="logo">
        <h1><span className="logo-u">U</span>ruru</h1>
        <h2>Pet'spower</h2>
      </div>

      <Navbar />

    </div>
  )
}

export default Header
