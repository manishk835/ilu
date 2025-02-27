import React from 'react';
import headerLogo from './construction-img/logo.png';
import '../App.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
        <div className="logo">
          <img src={headerLogo} alt="Build Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li>About</li>
            <li>Service</li>
            <li>Project</li>
            <li>Testimonial</li>
            <li>Team</li>
            <li>Blog</li>
            <li><Link to={'/contact'}>Conatct</Link></li>
            {/* <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/service'}>Service</Link></li>
            <li><Link to={'/project'}>Project</Link></li>
            <li><Link to={'/testimonial'}>Testimonial</Link></li>
            <li><Link to={'/team'}>Team</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Conatct</Link></li> */}
          </ul>
        </nav>
        <div className="menu-bar">
          <img src={require('./construction-img/menu.png')} alt="menu" />
        </div>
    </header>
  );
}

export default Header;
