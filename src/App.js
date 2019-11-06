import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import Messages from './Messages';
import NavBar from './NavBar';
import Chat from './Chat';

const ourselves = [
  {
    name: {
      first: 'Alexandra',
      last: 'Santos',
    },
    picture: {
      thumbnail: 'alex-tn.jpg',
    },
    message: 'Hey handsome! How are you?',
    date: '5 nov.'
  },
  {
    name: {
      first: 'Inês',
      last: 'Oliveira',
    },
    picture: {
      thumbnail: 'ines-tn.jpg',
    },
    message: "You make my booleans come true!! I would love have a date with you tonight but I am studying Web development at Wild Code School and I have to study hard these next few days to do well in my group's project. Would next week be a good time for our date?",
    date: '4 nov.'
  },
  {
    name: {
      first: 'Elena',
      last: 'Ortega',
    },
    picture: {
      thumbnail: 'elena-tn.jpg',
    },
    message: 'Holà que tal',
    date: '3 nov.'
  },

  {
    name: {
      first: 'Angélina',
      last: 'Riet',
    },
    picture: {
      thumbnail: '/angelina-tn.jpg',
    },
    message: 'Voulez-vous coucher avec moi ce soir? ;)',
    date: '31 oct.'
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

  getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          // isLoaded : true,
          randomUsers: [...ourselves, ...data.results],
        })
      })

  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser={this.getUser} />} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/messages" render={() => <Messages randomUsers={this.state.randomUsers} />} />
          <Route exact path="/chat" render={() => <Chat randomUsers={this.state.randomUsers} />}  />
        </Switch>

      </BrowserRouter> 
    );
  }
}

export default App;