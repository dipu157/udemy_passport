import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    message: ''
  }

  // Login Form Submit

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/login',data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form onSubmit={this.formSubmit}>
            <span><h1 className="pb-3">Login Form</h1></span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e) => {
              this.setState({email:e.target.value})}} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name='password' placeholder="Password" required onChange={(e) => {
              this.setState({password:e.target.value})}} />
        </Form.Group>
        <Button variant="primary" type="submit">
            LOGIN
        </Button>
        <h6 style={{ textAlign:'left' , marginTop: '10px' }}>Froget Password <Link to="/forget">Click Here</Link></h6>
        </Form>
      </div>
    )
  }
}
