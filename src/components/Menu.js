import React, { Component } from 'react';
import Menus from 'react-burger-menu';
import { Link } from 'react-router-dom';


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
            <li><Link to='/'><h3>Cleb's Life</h3> </Link></li>
            <li><Link to='/about'><h3>About</h3></Link></li>
            <li><Link to='/work'><h3>Things I've Done</h3></Link></li>
            <li><Link to='/food'><h3>Food</h3></Link></li>
            <li><Link to='/books'><h3>Books</h3></Link></li>
            <li><Link to='/contact'><h3>Contact</h3></Link></li>
            <li><Link to='/site'><h3>This Site</h3></Link></li>
          </ul>
        </Menu>
      </div>
    );
  }
}

export default Hamburger;