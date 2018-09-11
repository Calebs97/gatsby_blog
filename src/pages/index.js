import React from "react"
import Link from "gatsby-link";

export default () => 
  <div style = {{color: 'blue' }}>Hello world!
    <h1> Hello Gatsby! </h1>

    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>


