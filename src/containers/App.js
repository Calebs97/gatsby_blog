import React, { Component } from 'react';
import '../assets/css/main.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Header from '../components/Header';
import Work from '../components/Work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Header/>
        <div id="main">
          <Main/>
          <Work/>
        </div>
      </div>
    );
  }
}

export default App;
