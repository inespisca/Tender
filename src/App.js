import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Settings from "./Settings"
import Messages from "./Messages"
import NavBar from './NavBar';

const ourselves = [
  {
    name: {
      first: 'Alexandra',
      last: 'Santos',
    },
    picture: {
      thumbnail: 'https://via.placeholder.com/50',
    },
    message: 'Hey handsome! How are you?',
  },
  {
    name: {
      first: 'Inês',
      last: 'Oliveira',
    },
    picture: {
      thumbnail: 'https://via.placeholder.com/50',
    },
    message: 'Heyyyyyyy ;)',
  },
  {
    name: {
      first: 'Elena',
      last: 'Ortega',
    },
    picture: {
      thumbnail: 'https://via.placeholder.com/50',
    },
    message: 'Holà que tal',
  },

  {
    name: {
      first: 'Angélina',
      last: 'Riet',
    },
    picture: {
      thumbnail: 'https://via.placeholder.com/50',
    },
    message: 'Salut! :)',
  },
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomUser: {
        picture: {},
        name: {},
        dob: {},
      },
      randomUsers: []
      // isLoaded: false,
    };
  }

  componentDidMount() {
    this.getUser();
    this.getUsers();
  }

  getUser = () => {
    fetch("https://randomuser.me/api/?inc=gender,name,dob,picture")
      .then(response => response.json())
      .then(data => {
        this.setState({
          // isLoaded : true,
          randomUser: data.results[0],
        })
      })
  }

<<<<<<< HEAD
  render () {
    return (
      <BrowserRouter>
      <NavBar/>
      <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser = {this.getUser}/> }/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/messages" component={Messages}/>
          <Route exact path="/chat" component={Chat} />
      </Switch>
=======
  getUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        this.setState({
          // isLoaded : true,
          randomUsers: [...ourselves, ...data.results],
        })
      })

  }

  render() {
    console.log(this.state.randomUsers)
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser={this.getUser} />} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/messages" render={() => <Messages randomUsers={this.state.randomUsers} />} />
        </Switch>
>>>>>>> 49e80fbb06c5eb3a7d2ce2b725bd1543884cb6b4
      </BrowserRouter>
    );
  }
}

export default App;