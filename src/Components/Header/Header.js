import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand logo-name" href="#games">
            <img src={logo} alt="logo" class="d-inline-block align-text-top"  width="50" height="50"/>
          Indoor Games Components
          </a>
          <div class="nav-name">
        <a  href="home">Home</a>
        <a href="/games">Games</a>
        <a href="about">About</a>
      
      </div>
        </div>


      </nav>
    );
};

export default Header;