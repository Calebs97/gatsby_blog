import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Food extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Food" />
            <section id="one">
              <header class="major">
                <h2>Food </h2>
              </header>
              <p>Unfortunately I am quite bad at taking pictures, hence this page will need some major
                brainstorming as to what I should put here. More to come!!
              </p>
            </section>
        </Main>
      )
   }
}