import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Contact extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Contact" />
          <section id="one">
            <header class="major">
              <h2>Contact </h2>
            </header>
            <p>Feel free to email me at <a href="mailto:calebs11@berkeley.edu">calebs11@berkeley.edu</a><br/>
            I reply I swear. Hit me up about food, capitalism, tech, book recommendations, whatever!!



            </p>
          </section>
        </Main>
      )
   }
}