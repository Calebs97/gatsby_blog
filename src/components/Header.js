import React, { Component } from 'react';
import Hamburger from "./Menu"
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="tab">
      <h1><a href="/">Cleb's Life</a></h1>
      <nav class="links">
        <ul>
          <li><Link to='/about'>About </Link></li>
          <li><Link to='/'>Things I've Done </Link></li>
          <li><Link to='/'>Resume </Link></li>
          <li><Link to='/'>Food </Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Hamburger />
    </header>
    );
  }
}

export default Header;