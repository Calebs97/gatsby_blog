import React, { Component } from 'react';
import '../assets/css/main.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Header/>
        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
