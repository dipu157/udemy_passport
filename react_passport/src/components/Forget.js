import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

export default class Forget extends Component {

  state = {
    email: '',
    message: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email
    }

    axios.post('/forgetpassword',data)
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
        <Form onSubmit={this.formSubmit} id="forgetForm"> 
        {error}
            <span><h1 className="pb-3">Forget Password</h1></span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e) => {
              this.setState({email:e.target.value})}} />
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
