import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <header id="header">
          <div class="inner">
            <a href="/" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
            <h1>Hello world! <strong>I'm Caleb</strong>, <br />
              welcome to my website!<br /></h1>
          </div>
      </header>
    );
  }
}

export default Sidebar;