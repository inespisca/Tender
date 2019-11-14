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
      thumbnail: 'https://i.imgur.com/EkLnHof.jpg',
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
      thumbnail: 'https://i.imgur.com/v7zP5R8.jpg',
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
      thumbnail: 'https://i.imgur.com/p9fIRKM.jpg',
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
      thumbnail: 'https://i.imgur.com/t4iBPv7.jpg',
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

        // this is for the female and male preference on settings
        female: true,
        male: true

      },
      chuckNorrisQuote: '',
    };
  }

  componentDidMount() {
    this.getUser();
    this.getUsers();
  }

  getGenderSelection = () => {
    if (this.state.settings.female === true && this.state.settings.male === false) {
      return '&gender=female'
    } else if (this.state.settings.female === false && this.state.settings.male === true) {
      return '&gender=male'
    } else {
      return ''
    }
  }

  getUser = () => {
    //get quote at the same time as a new user
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          chuckNorrisQuote: data.value,

        })
      })

    const url = `https://randomuser.me/api/?inc=gender,name,dob,picture${this.getGenderSelection()}`;
    fetch(url)
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

  // Thanks to this part below, the user clicks in the settings toggle and the toggle turns true or false depending on the times they click.
  // The handleChangeSetting below is connected to the Settings component thanks to the line {this.handleChangeSetting in the Router in the App}

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
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home randomUser={this.state.randomUser} newUser={this.getUser} chuckNorrisQuote={this.state.chuckNorrisQuote} settings={this.state.settings} />} />
          <Route exact path="/settings" render={() => <Settings settings={this.state.settings} onChange={this.handleChangeSetting} />} />
          <Route exact path="/messages" render={() => <Messages randomUsers={this.state.randomUsers} />} />
          <Route exact path="/chat" render={() => <Chat randomUsers={this.state.randomUsers} />} />
        </Switch>

      </BrowserRouter>
    );
  }
}
  // "settings={this.state.settings}" is being passed in both "Home" and "Settings" paths. In the "Settings" path, it's connected to make the settings
  // component and to link it to the radio toggles so the toggles control what's going on. In the "Home" path, it's meant to pass the props to the Homepage
  // and, therefore, to the "Description" component, so the sentence controlled by the settings appears in the description.

export default App;
