import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar'
import {Mainarticle} from './Mainarticle'
import {Article} from './Article'
// import {CustomerList} from './CustomerList'

class App extends Component {

  constructor() {
    super() // calling the constructor of the Component class

    this.articles = [{title: "Hello Watchkit",body: "Last month Apple released the anticipated WatchKit Framework for developers in the form of....",nocomments: "45",nolikes: "77"},
    {title: "Introduction to Swift", body: "Swift is a modern programming language developed by Apple...",nocomments: "12",nolikes: "30"},
    {title: "Third article!",body: "The third article is the hardest to write",nocomments: "3",nolikes: "6"},
  {title: "Hey",body:"hohboy",nocomments:"88",nolikes:"99"}]

  }

  render() {
    return (
      <div>

      <Navbar />

      <Mainarticle />

      <Article articles = {this.articles} />

      {/* <Article title="Hello WatchKit" 
      nocomments="12"
      nolikes="124"
      body="Last month Apple released the anticipated WatchKit Framework for developers in the form of...." />
      <Article title="Introduction to Swift" 
      nocomments="15"
      nolikes="45"
      body="Swift is a modern programming language developed by Apple..."/> */}
      
      {/* <CustomerList users = {this.customers} /> */}

    </div>
    );
  }
}

export default App;
