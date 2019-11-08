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
      settings: {
        smoker: false,
        vegetarian: false,
        single: false,
        // Settings' default boolean values. This part is connected directly to the Settings component (more info in the Settings.js file). The other parts
        // related to settings are only connected after passing by Setting.js. So, long story short, it goes the following way:
        // App.js (this.state) [default in page] -> Settings.js [where the functionality to change first the radio toggle appears] -> App (router) [it connects
        // the functionalities present in Settings.js back to App.js and where it takes these settings to their final function: where we'll make user
        // interaction possible, thanks to the use of handleChangeSetting] -> App.js (handleChangeSetting) [the final stage of the settings, where we make
        // the radio toggle switch whenever the user clicks in it]
      },
      chuckNorrisQuote: 'hello',
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
      }
    )
  }

  getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          // isLoaded : true,
          randomUsers: [...ourselves, ...data.results],
        })
      }
    )
  }

  // thanks to this part below, the user clicks in the settings toggle and the toggle turns true or false depending on the times they click.
  //The handleChangeSetting below is connected to the Settings component thanks to the line {this.handleChangeSetting in the Router in the App}
  handleChangeSetting = (settingName) => {
    this.setState((state) => {
      return {
        ...state,
        settings: {
          ...state.settings, 
          [settingName]: !state.settings[settingName],
        }
      }
    })
  };

  render() {
        return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser={this.getUser} chuckNorrisQuote={this.state.chuckNorrisQuote}/>} />
          <Route exact path="/settings" render={() => <Settings settings={this.state.settings} onChange={this.handleChangeSetting} />} />
          <Route exact path="/messages" render={() => <Messages randomUsers={this.state.randomUsers} />} />
          <Route exact path="/chat" render={() => <Chat randomUsers={this.state.randomUsers} />} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
