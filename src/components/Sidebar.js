import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <header id="header">
          <div class="inner">
            <a href="/" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
            <h1><strong>Caleb Siu</strong><br />
              <strong>calebs11@berkeley.edu</strong><br /></h1>
              <br />
              Welcome to my website!  <br />
              Keep in mind that it is work in progress :) <br />
              I appreciate feedback!
              
          </div>
          <br /> 
          <br />
          <div class="inner">
          <ul class="icons">
            <li><a href="http://github.com/calebs97/" class="icon fa-github"><span class="label">Github</span></a></li>
            <li><a href="https://www.linkedin.com/in/calebsiu/" class="icon fa-linkedin"><span class="label">Linkedin</span></a></li>
            <li><a href="mailto:calebs11@berkeley.edu" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
          </ul>
        </div>
      </header>
      
    );
  }
}

export default Sidebar;