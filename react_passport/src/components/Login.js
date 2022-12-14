import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

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
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
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

    if(localStorage.getItem('token')){
      return <Redirect to='/profile' />
    }

    if(this.state.loggedIn){
        return <Redirect to={'/profile'} />
    }

    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form onSubmit={this.formSubmit}>
          {error}
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
