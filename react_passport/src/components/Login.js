import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form>
            <span><h1 className="pb-3">Login Form</h1></span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
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
