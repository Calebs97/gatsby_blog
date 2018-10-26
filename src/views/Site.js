import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Site extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="This Site" />
            <section id="one">
              <header class="major">
                <h2>About this Site </h2>
              </header>
              <p>I want to document my journey in creating this website and give credit to many of the resources/examples I utilized.
                This is my first frontend project ever, so there were a lot of traps I fell into as I went about creating this website. 
              <br/>
              <br/>

              <h3> Bibliography (aka credit section)</h3>
              <ul>
                <li>Facebook's <a href="https://github.com/facebook/create-react-app"> create-react-app</a> for providing me a starting point</li>
                <li><a href="http://html5up.net">HTML5</a> for the sweet theme</li>
                <li><a href="https://mldangelo.com/">Michael D'Angelo's website</a> for inspiration and help</li>
                <li>My roommate Josh Cho for making the favicon</li>
                <li>Many articles and google searches</li>
              </ul>

              <h3> To-do List</h3>
              <ul>
                <li>Make it possible to click anywhere else on the screen to hide menu</li>
                <li>Slide left to open menu, slide right to close (mobile/touch screen)</li>
                <li>Make sidebar go to below the page when on smaller devices instead of above</li>
                <li>Clean CSS Code</li>
                <li>Flesh out the "Food" section of the website</li>
              </ul>

              <h3>Development Journey</h3>
                Hard stuff man. Jk I just don't frontend enough.
              </p>
            </section>
        </Main>
      )
   }
}