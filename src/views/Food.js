import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';
import {Redirect} from 'react-router-dom'

export default class Food extends Component { 
  constructor() {
    super();
    this.state = { redirect: false }  
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const json_data = {'first-name': data.get('first-name'),
                       'last-name': data.get('last-name'),
                       'phone-num': data.get('phone-num')}

    fetch('https://mighty-badlands-71550.herokuapp.com/signup', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
      },
      method: 'POST',
      body: JSON.stringify(json_data),
    });
    this.setState({ redirect: true });
  }
  
  render () {    
      if (this.state.redirect) return <Redirect to='/success' />;                               
      else return (
        <Main>
          <Helmet title="Food" />
          <section id="one">
            <header class="major">
              <h2>Food party!!! (Beta)</h2>
            </header>
            <p>
              If you know me, you know that I love cooking much more than eating. This leads to an interesting kind of problem...
               too much food. Sign up here to receive text alerts whenever I make food for the masses!! <br /> This technology is currently in devleopment 
               so sign up at your own risk. I may or may not sell your data.
            </p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">First Name</label>
              <input id="first-name" name="first-name" type="text" placeholder="cleb" required />

              <label htmlFor="email">Last Name</label>
              <input id="last-name" name="last-name" type="text" placeholder="bleb" required/>

              <label htmlFor="birthdate">Phone Number</label>
              <input id="phone-num" name="phone-num" type="text" placeholder="123456789" required/>

              <div style={{marginTop: "2em"}}>
                <button class="button">Submit</button>
              </div>
            </form>
          </section>
        </Main>
      )
   }
}