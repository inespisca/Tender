import React, { Component } from 'react';
import { MDBNavbar, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, NavbarBrand }
  from 'mdbreact';
import './NavBar.css';

class NavBar extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
      <div>
        <MDBNavbar className="navBarCustom" color="light-blue lighten-3" light fixed="top">
          <NavbarBrand className="logo-tender" href="#home">
            <img className="logo-tender" src={"https://i.imgur.com/LN19krz.png"} style={{ width: 50 }} />
            Tender</NavbarBrand>
          <MDBNavbarToggler className="navbar-icon" onClick={this.toggleCollapse('navbarCollapse1')} />

          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem>
                <MDBNavLink className="link-menu" onClick={this.toggleCollapse('navbarCollapse1')} exact to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="link-menu" onClick={this.toggleCollapse('navbarCollapse1')} exact to="/settings">Settings</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="link-menu" onClick={this.toggleCollapse('navbarCollapse1')} exact to="/messages">Messages</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="link-menu" onClick={this.toggleCollapse('navbarCollapse1')} exact to="/chat">Chat</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>

        </MDBNavbar>
      </div>

    );
  }
}





export default NavBar; 
