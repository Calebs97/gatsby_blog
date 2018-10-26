import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from "../containers/Main"

class Homepage extends Component {
  render() {
    return (
      <Main>
        <Helmet title="Caleb Siu" />
        <section id="one">
          <header class="major">
            <h2>I'm a software engineer in the Bay Area... </h2>
          </header>
          <p>with a passion for machine learning, blockchain, distributed systems, IoT, Fintech, etc.   <br/>
            (okok just a subset of those things)  <br/>
            also interested in capitalistic ideas like options trading, behavioral economics, and other fun stuff!!</p>
          <ul class="actions">
              <li><Link to="/about"><a href="/about" class="button">Learn More</a></Link></li>
          </ul>
        </section>
        <section id="two">
						<h2>Recent Work</h2>
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
						<ul class="actions">
							<li><Link to="/work"><a href="/work" class="button">Full Work History</a></Link></li>
						</ul>
			  </section>
      </Main>
    );
  }
}

export default Homepage;