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
                <h3>Data 100 Student Instructor @ UC Berkeley</h3>
                <p>Developed course content and taught discussions for a class with 700+ students. </p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="https://blend.com" class="image fit thumb"><img src="images/thumbs/blend.png" alt="" /></a>
                <h3>Software Engineering Intern @ Blend</h3>
                <p>Worked on the intelligence team to speed up the process in closing out mortgages.</p>
              </article>
            </div>
            <div class="row">
              <article class="col-6 col-12-xsmall work-item">
                <a href="https://www.capolicylab.org/" class="image fit thumb"><img src="images/thumbs/cpl.png" alt="" /></a>
                <h3>Research Associate Intern @ UC Berkeley</h3>
                <p>Supported research staff in creating data-driven insights for projects related to social welfare and public policy.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="https://www.plateiq.com/" class="image fit thumb"><img src="images/thumbs/plateiq.png" alt="" /></a>
                <h3>Data Science Intern @ Plate IQ</h3>
                <p>Implemented a pipeline for cleaning messy food pricing data to estimate the price of recipes from restaurants.</p>
              </article>
            </div>
			    </section>
          
        </Main>
      )
   }
}