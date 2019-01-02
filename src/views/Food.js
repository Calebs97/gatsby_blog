import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Food extends Component { 
  constructor() {
    super();
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
  }
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Food" />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">First Name</label>
            <input id="first-name" name="first-name" type="text" />

            <label htmlFor="email">Last Name</label>
            <input id="last-name" name="last-name" type="text" />

            <label htmlFor="birthdate">Phone Number</label>
            <input id="phone-num" name="phone-num" type="text" />

            <button>Send data!</button>
          </form>
        </Main>
      )
   }
}