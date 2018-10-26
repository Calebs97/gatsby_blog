import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class NotFound extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="About" />
            <section id="one">
              <header class="major">
                <h2>Sorry! This page doesn't exist heh. Press my picture to go back to the homepage!</h2>
              </header>
            </section>
        </Main>
      )
   }
}