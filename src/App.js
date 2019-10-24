import React from 'react';
import {Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'; 
import './App.css';
import Home from "./Home"
import Settings from "./Settings"
import Messages from "./Messages"
import Chat from "./Chat"
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/messages" component={Messages}/>
        <Route exact path="/chat" component={Chat}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
