import React from 'react';


export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      console.log("I am the constructor component");
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
       // function(){this.tick()}.bind(this),
        this.props.sleepTime
       
      );
      console.log("I am the componentDidMount");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log("I am the componentWillMount");
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  shouldComponentUpdate() {
      return false;
      console.log("shouldComponentUpdate()");
  }
    render() {
        console.log("In Render")
      return (
        <div>
          <h1>{this.props.txt}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
      console.log("I am the render component");
    }
  }