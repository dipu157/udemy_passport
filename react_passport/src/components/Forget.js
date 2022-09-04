import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Forget extends Component {
  render() {
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form>
            <span><h1 className="pb-3">Forget Password</h1></span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </div>
    )
  }
}
