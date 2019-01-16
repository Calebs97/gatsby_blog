import React, { Component } from 'react';
import Hamburger from "./Menu"
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="tab">
        <h1><Link to='/'>Cleb's Life</Link></h1> 
      <nav class="links">
        <ul>
          <li><Link to='/about'>About </Link></li>
          <li><Link to='/work'>Things I've Done </Link></li>
          <li><Link to='/food'>Food </Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/site'>This Site</Link></li>
        </ul>
      </nav>
      <Hamburger />
    </header>
    );
  }
}

export default Header;