import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Profile extends Component {
  render() {
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg bg-secondary">
        <h2 className='text-white'>User Profile</h2>
        <ListGroup>
      <ListGroup.Item>Name: Name</ListGroup.Item>
      <ListGroup.Item>Email: Email</ListGroup.Item>
    </ListGroup>
      </div>
    )
  }
}
