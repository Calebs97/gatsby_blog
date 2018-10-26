import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class About extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="About" />
            <section id="one">
              <header class="major">
                <h2>About me </h2>
              </header>
              <p>My name is Caleb. I'm currently finishing my last semester at UC Berkeley studying Computer Science and Economics.
                In May, I will begin working as a Full Stack Engineer at Samsara to help them deploy IoT devices in different industries. 
                I currently live in the Bay Area, but am open to new adventures elsewhere! <br /> <br />
                I am particularly interested in: financial technologies being developed by companies like Plaid, Blend and Stripe, the relationship between
                technology and social good, data visualization and education, as well as good 'ol machine learning :) <br /> <br />
              Some of things I like to do in my free time:
              <ul>
                <li>Cook new foods</li>
                <li>Bake unhealthy desserts</li>
                <li>Read (hackernews ofc but also fun books)</li>
                <li>Blog on wordpress (no medium for me)</li>
                <li>Watch NBA</li>
                <li>Become more SWE and do things like build this website</li>
                <li> PLAY!!!!!!!! </li>
              </ul>
              </p>
            </section>
        </Main>
      )
   }
}