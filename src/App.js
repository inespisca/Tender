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
    message: "You make my booleans come true!!",
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
      randomUsers: [],
      // isLoaded: false,
      chuckNorrisQuote: 'hello'

    };
  }

  componentDidMount() {
    this.getUser();
    this.getUsers();
  }

  getUser = () => {
    //get quote at the same time as a new user
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then( data => {
        this.setState({
            chuckNorrisQuote: data.value,

           })
       })

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
    console.log('we are in App.js: ' + this.state.chuckNorrisQuote)
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser={this.getUser} chuckNorrisQuote={this.state.chuckNorrisQuote}/>} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/messages" render={() => <Messages randomUsers={this.state.randomUsers} />} />
          <Route exact path="/chat" render={() => <Chat randomUsers={this.state.randomUsers} />} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;