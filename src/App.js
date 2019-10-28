import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'; 
import './App.css';
import Home from "./Home"
import Settings from "./Settings"
import Messages from "./Messages"
import Chat from "./Chat"
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      randomUser: [], 
      // isLoaded: false,
    };
  }

  componentDidMount() {
    this.getUser();
  }  

  getUser = () => {
    fetch("https://randomuser.me/api/?inc=gender,name,dob,picture")
      .then(response  => response.json())
      .then( data => {
        this.setState({
          // isLoaded : true,
          randomUser: data.results[0],
        })
      })
  }
  
  render () {
    return (
      <BrowserRouter>
      <NavBar/>
      <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser = {this.getUser}/> }/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/messages" component={Messages}/>
          <Route exact path="/chat" component={Chat}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// results.gender
//results.name.first
//results.name.last
//results.dob.age 
//results.picture
