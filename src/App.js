import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

function Login(props)
{
return(
           <button onClick = {props.clickInfo}> Login </button>
       );
//this.setState({
//this.isLoggedIn: true;
//});
}

function Logout(props)
{
return(
           <button onClick = {props.clickInfo}> Logout </button>
       );
}

function Message(props)
{
if (props.isLoggedIn)
{
return(<h1>WELCOME BACK!</h1>);
}
else
{
return(<h1> PLEASE LOGIN FIRST </h1>);
}
}

class App extends React.Component {
constructor(props)
{
super(props);
this.state= {
isLoggedIn: false
};
this.handleLogin = this.handleLogin.bind(this);
this.handleLogout = this.handleLogout.bind(this);
}

handleLogin()
{
this.setState({
isLoggedIn: true
});
}

handleLogout()
{
this.setState({
isLoggedIn: false
});
}

render(){
  return (
  <div>
    <h1>LOgin LOgOut Example</h1>
    <Message isLoggedIn = {this.state.isLoggedIn}/>
    {
    (this.state.isLoggedIn)?
    (<Logout  clickInfo = {this.handleLogout}/>) :
    (<Login clickInfo = {this.handleLogin}/>)
}
</div>
  );}
}

export default App;
