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

      <div className="navBarCustom">
        <MDBNavbar color="light-blue lighten-4" light>

          <NavbarBrand href="#home">Tender</NavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem>
                <MDBNavLink exact to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink exact to="/settings">Settings</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink exact to="/messages">Messages</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink exact to="/chat">Chat</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>

        </MDBNavbar>
      </div>

    );
  }
}





export default NavBar; 
