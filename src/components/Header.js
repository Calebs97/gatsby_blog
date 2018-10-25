import React, { Component } from 'react';
import Hamburger from "./Menu"
import About from "../pages/About"
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="tab">
      <h1><a href="/">Cleb's Life</a></h1>
      <nav class="links">
        <ul>
          <Link to='/about'>About </Link>
          <Link to='/'>Things I've Done </Link>
          <Link to='/'>Resume </Link>
          <Link to='/'>Food </Link>
          <Link to='/contact'>Contacts </Link>
        </ul>
      </nav>
      <Hamburger />
    </header>
    );
  }
}

export default Header;