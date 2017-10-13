import React, { Component } from 'react';
import './App.css';
import person from "./dataStore2";
const {firstName, email} = person;
class App2 extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>REACT</h1>
        </header>
        <div className="App-intro">
        <p>{firstName}</p>
        <p>{person.email}</p>
        </div>
      </div>
    );
  }
}

export default App2;
