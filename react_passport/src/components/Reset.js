import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Reset extends Component {

  state = {
    email: '',
    token: '',
    password: '',
    password_confirmation:'',
    message: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      token: this.state.token,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    axios.post('/resetpassword',data)
    .then((response) => {
      this.setState({message:response.data.message})
      document.getElementById("forgetForm").reset();
    })
    .catch((error) => {
      this.setState({message:error.response.data.message})
    });
  }

  render() {

    let error = "";
    if(this.state.message){
      error = (
        <div className='alert alert-danger' role='alert'>
          {this.state.message}
        </div>
      )
    }

    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form onSubmit={this.formSubmit}>
          {error}
            <span><h1 className="pb-3">Reset Form</h1></span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e) => {
              this.setState({email:e.target.value})}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" name='token' placeholder="PIN" required onChange={(e) => {
              this.setState({token:e.target.value})}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name='password' placeholder="New Password" required onChange={(e) => {
              this.setState({password:e.target.value})}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password_confirmation" placeholder="Confirm Password" onChange={(e) => {
              this.setState({password_confirmation:e.target.value})}} />
        </Form.Group>
        <Button variant="primary" type="submit">
            RESET
        </Button>
        </Form>
      </div>
    )
  }
}
