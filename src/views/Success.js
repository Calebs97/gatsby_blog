import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Success extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Thank you" />
              <header class="major">
                <h2>Thank you for submitting! </h2>
              </header>
        </Main>
      )
   }
}