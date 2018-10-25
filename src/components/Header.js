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
          <li><a href="/">Things I've Done</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/">Food</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <Hamburger />
    </header>
    );
  }
}

export default Header;