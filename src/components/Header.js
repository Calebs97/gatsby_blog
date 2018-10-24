import React, { Component } from 'react';
import Hamburger from "./Menu"

class Header extends Component {
  render() {
    return (
      <header id="tab">
      <h1><a href="index.html">Cleb's Life</a></h1>
      <nav class="links">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Things I've Done</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <Hamburger />
    </header>
    );
  }
}

export default Header;