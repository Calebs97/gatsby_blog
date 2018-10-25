import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Work extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Things I've Done" />
            <section id="two">
            <header class="major">
						  <h2>Work Experience</h2>
            </header>
            <div class="row">
              <article class="col-6 col-12-xsmall work-item">
                <a href="http://www.ds100.org/fa18/" class="image fit thumb"><img src="images/thumbs/ds100.png" alt="" /></a>
                <h3>Data 100 Student Instructor</h3>
                <p>Developed course content and taught discussions for a class with 700+ students. </p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="https://blend.com" class="image fit thumb"><img src="images/thumbs/blend.png" alt="" /></a>
                <h3>Blend Software Engineering Intern</h3>
                <p>Worked on the intelligence team to speed up the process in closing out mortgages.</p>
              </article>
            </div>
			    </section>
        </Main>
      )
   }
}