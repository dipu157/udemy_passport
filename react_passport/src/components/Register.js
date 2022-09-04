import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form>
            <span><h1 className="pb-3">Registration Form</h1></span>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="Name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Register
        </Button>
        <h6 style={{ textAlign:'left' , marginTop: '10px' }}>Already Account ? <Link to="/login">Login Here</Link></h6>
        </Form>
      </div>
    )
  }
}
