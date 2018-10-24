import React, { Component } from 'react';
import Menus from 'react-burger-menu';


const Menu = Menus.slide;

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */
  getButton() {
    return this.state.open ? (
      <li className="menu close-menu">
        <div onClick={this.handleClick} className="menu-hover">&#10005;</div>
      </li>
    ) : (
      <li className="menu open-menu">
        <div onClick={this.handleClick} className="menu-hover">&#9776;</div>
      </li>
    );
  }
  /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <div className="hamburger-container">
        <nav id="hambuger-nav">
          <ul>
            {this.getButton()}
          </ul>
        </nav>
        <Menu right isOpen={this.state.open}>
          <ul className="hamburger-ul">
          <li><a href="#"><h3>Cleb's Life</h3></a></li>
          <li><a href="About"><h3>About</h3></a></li>
          <li><a href="Things"><h3>Things I've Done</h3></a></li>
          <li><a href="Resume"><h3>Resume</h3></a></li>
          <li><a href="Food"><h3>Food</h3></a></li>
          <li><a href="Contact"><h3>Contact</h3></a></li>
          </ul>
        </Menu>
      </div>
    );
  }
}

export default Hamburger;