import React, { Component } from 'react';
import Main from "../containers/Main"
import Helmet from 'react-helmet';

export default class Books extends Component { 
  state = { 
  }

  divStyle = {
    height: "400px",
    width: "400px"
  };
  
  render () {                                   
      return (
        <Main>
          <Helmet title="Books" />
            <section id="two">
            <header class="major">
						  <h2>Currently Reading</h2>
            </header>
            <div class="row" style={this.divStyle}>
              <article class="col-6 col-12-xsmall work-item">
                <a href="https://www.goodreads.com/book/show/30231791-the-end-of-alchemy" class="image fit thumb"><img src="images/thumbs/book_alchemy.jpg" alt="test" /></a>
              </article>
              {/* <article class="col-6 col-12-xsmall work-item">
                <a href="https://blend.com" class="image fit thumb"><img src="images/thumbs/blend.png" alt="" /></a>
                <h3>Software Engineering Intern @ Blend</h3>
                <p>Worked on the intelligence team to speed up the process in closing out mortgages.</p>
              </article> */}
            </div>
			    </section>
          
        </Main>
      )
   }
}