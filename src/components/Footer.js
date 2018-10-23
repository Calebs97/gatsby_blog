import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="inner">
          <ul class="icons">
            <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
            <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;