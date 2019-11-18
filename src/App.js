import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import Messages from './Messages';
import NavBar from './NavBar';
import Chat from './Chat';
import Profile from './Profile';
import { withRouter } from "react-router-dom";
import faker from 'faker';


const ourselves = [
  {
    name: {
      first: 'Alexandra',
      last: 'Santos',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/EkLnHof.jpg',
      large: 'https://i.imgur.com/fKVgPRR.jpg',
    },
    message: 'Hey handsome! How are you?',
    date: '5 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/alexandrapatriciosantos/',
      GitHub: 'https://github.com/alexandrapatriciosantos',
    },
    description: "I like long walks on the beach, MDN web docs, and proper indentation.Dislikes : infinite loops, \"failed to render\"messages, and coding in the master branch. I am currently studying at Wild Code School, learning all about JavaScript, React, and SQL. I'm really busy right now, but I'd love to meet for a drink after school some time. If you're up for it email me at alexandraps17@gmail.com. Speaks: Portuguese, Japanese, HTML, CSS, JS, and JSX. My favourite movie is Mean Girls. I can make a great Carbonara.",
    dob: {
      age: 25
    }
  },
  {
    name: {
      first: 'Angélina',
      last: 'Riet',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/t4iBPv7.jpg',
      large: 'https://i.imgur.com/knxzOV6.jpg',
    },
    message: 'Voulez-vous coucher avec moi ce soir? ;)',
    date: '31 oct.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/angelinariet/',
      GitHub: 'https://github.com/AngelinaRIET',
    },
    description: 'blablabla',
    dob: {
      age: 28
    }
  },
  {
    name: {
      first: 'Inês',
      last: 'Oliveira',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/v7zP5R8.jpg',
      large: 'https://i.imgur.com/Brhn4Tn.jpg',
    },
    message: "You make my booleans come true!!",
    date: '4 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/inesfpoliveira/',
      GitHub: 'https://github.com/inespisca',
    },
    description: 'blablabla',
    dob: {
      age: 26
    }
  },
  {
    name: {
      first: 'Elena',
      last: 'Ortega',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/p9fIRKM.jpg',
      large: 'https://i.imgur.com/wuUXt6P.jpg',
    },
    message: 'Holà que tal',
    date: '3 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/elenaortegabaura/',
      GitHub: 'https://github.com/eobwebdevelop',
    },
    description: 'blablabla',
    dob: {
      age: 28
    }
  },

]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {
        picture: {},
        name: {},
        dob: {},
        description: ''

      },
      randomUsers: [],
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
      .then(chuckAPI => {
        const url = `https://randomuser.me/api/?inc=gender,name,dob,picture${this.getGenderSelection()}`;
        fetch(url)
          .then(res => res.json())
          .then(randomUserAPI => {
            this.setState({
              selectedUser: { ...randomUserAPI.results[0], description: chuckAPI.value },
            })
          })
      })
  }

  getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        const usersWithMessages = data.results.map((item) => {
          const fakerMessage = faker.lorem.sentences();
          const fakerDescription = faker.lorem.sentences();
          return { ...item, message: fakerMessage, description: fakerDescription };
        })
        this.setState({
          randomUsers: [...ourselves, ...usersWithMessages],
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


  handleSelectUser = (clickedUser, nextRoute) => {
    this.setState({ selectedUser: clickedUser }, () => {
      if (nextRoute) {
        this.props.history.push(nextRoute);
      }
    });
  }


  render() {
    return (
      <>
        <NavBar newUser={this.getUser} />
        <Switch>
          <Route exact path="/" render={() =>
            <Home
              randomUser={this.state.selectedUser}
              user={this.state.selectedUser}
              onSelectUser={this.handleSelectUser}
              newUser={this.getUser}
              settings={this.state.settings} />}
          />
          <Route exact path="/settings" render={() =>
            <Settings
              settings={this.state.settings}
              onChange={this.handleChangeSetting} />}
          />
          <Route exact path="/messages" render={() =>
            <Messages
              randomUsers={this.state.randomUsers}
              onSelectUser={this.handleSelectUser} />}
          />
          <Route exact path="/chat" render={() =>
            <Chat
              randomUsers={this.state.randomUsers}
              user={this.state.selectedUser}
              onSelectUser={this.handleSelectUser} />}
          />
          <Route exact path="/profile" render={() =>
            <Profile
              user={this.state.selectedUser}
              settings={this.state.settings} />}
          />
        </Switch>
      </>
    );
  }
}
// "settings={this.state.settings}" is being passed in both "Home" and "Settings" paths. In the "Settings" path, it's connected to make the settings
// component and to link it to the radio toggles so the toggles control what's going on. In the "Home" path, it's meant to pass the props to the Homepage
// and, therefore, to the "Description" component, so the sentence controlled by the settings appears in the description.

export default withRouter(App);
