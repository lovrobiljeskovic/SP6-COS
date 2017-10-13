import React, { Component } from 'react';
import './App.css';
import upperCase, {text1, text2} from "./dataStore1";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>REACT</h1>
        </header>
        <div className="App-intro">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{upperCase("please uppercase me")}</p>
        </div>
      </div>
    );
  }
}

export default App;
