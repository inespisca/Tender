import React, { Component } from 'react';
import { MDBNavbar, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, NavbarBrand }
  from 'mdbreact';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      collapseID: ''
    }
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  clickLogo = () => {
    this.props.newUser(); 
    this.setState({ collapseID: '' })
  }

  render() {
    return (
      <div>
        <main>
        <MDBNavbar className="navBarCustom" color="light-blue lighten-3" light fixed="top">
          <NavbarBrand className="logo-tender" href="/" onClick={this.clickLogo}>
            <img className="logo-tender" src={"https://i.imgur.com/LN19krz.png"} style={{ width: 50 }} alt = "Tender Logo"/>
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
        </main>
      </div>

    );
  }
}





export default NavBar; 
