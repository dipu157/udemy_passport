import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
  render() {

    let name; let email;
    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(! localStorage.getItem('token')){
      return <Redirect to='/login' />
    }

    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg bg-secondary">
        <h2 className='text-white'>User Profile</h2>
        <ListGroup>
      <ListGroup.Item>Name: {name}</ListGroup.Item>
      <ListGroup.Item>Email: {email}</ListGroup.Item>
    </ListGroup>
      </div>
    )
  }
}
