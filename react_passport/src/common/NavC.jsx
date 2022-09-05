import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default class NavC extends Component {

  state = {
    loggedOut:''
  }
  
  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  }

  render() {

    let log; let profile;
    if(localStorage.getItem('token')){
      log = <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>;
      profile = <Nav.Link href="/profile">Profile</Nav.Link>;
    }else{
      log = <Nav.Link href="/login">LogIn</Nav.Link>;
      profile = <Nav.Link href="/register">Register</Nav.Link>;
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {profile}            
          </Nav>

          <Nav>
          {log}
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
