import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default class NavC extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>            
          </Nav>

          <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
