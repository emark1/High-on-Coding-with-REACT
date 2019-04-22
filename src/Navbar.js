import React, { Component } from 'react';

export class Navbar extends Component {

    render() {
      return (
        <div className="banner">
            <h1 className="titlefont">HighOnCoding</h1>
            <a href="index.html" class="linkfontbold">Home</a>
            <a href="categories.html" class="linkfontthin">Categories</a>
        </div>
      )
    }
  
  }