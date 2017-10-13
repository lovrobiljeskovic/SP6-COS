import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super();
    this.state = {joke: "aa"}
  }
  jokeUpdater = (data) =>{
    this.setState({joke: data});
}
/*
  componentDidMount(){
    const facade = this.props.facade;
    //Strategy1 facade.getJokeViaCallback(this.jokeUpdater)
  facade.setObserver(this.jokeUpdater);
  facade.getJokeAndNotify()
*/
  async componentDidMount(){
    const facade = this.props.facade;
    const joke =  await facade.fetchAsync();
    this.setState({joke});
}

  
  render() {
    return (
      <div className="App">
        {this.state.joke}
      </div>
    );
  }
}
export default App;

