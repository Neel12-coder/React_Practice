import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super(); //super(props) if you want to use props in this cons.
    this.state = {
         msg : "WELCOME TO MY STATE"
      }
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this); //use arrow function to avoid this
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }
  handleUpdateEvent()
{
    this.setState({
    msg : "WELCOME TO SET STATE UPDATE"
    });
};

  forceUpdateState()
  {
  this.forceUpdate();
  };

//arrow function , no need for binding in const
  findDomNodeHandler = () => {
  var myDiv = document.getElementById('myDivOne');
  ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }

  render() {
    return (
      <div className="App">
    <h2>React Constructor Example</h2>
    <p>{this.state.msg}</p>
    <h3>Math = {Math.random()} </h3>
    <button onClick = {this.findDomNodeHandler}>FIND_DOM_NODE1</button>
    <h3 id = "myDivOne" >JTP-NODE1</h3>
        <button onClick={this.handleUpdateEvent}>State Change</button>
        <button onClick={this.forceUpdateState}>Force State Change</button>
      </div>
    );
  }
}
export default App;