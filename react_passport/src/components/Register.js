import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Register extends Component {

  state = {
    name:'',
    email: '',
    password: '',
    password_confirmation:'',
    message: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    axios.post('/register',data)
    .then((response) => {
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to={'/profile'} />
  }
    return (
      <div className="container col-4 card mt-4 p-3 shadow-lg">
        <Form onSubmit={this.formSubmit}>
            <span><h1 className="pb-3">Registration Form</h1></span>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="Name" name="name" placeholder="Enter Name" onChange={(e) => {
              this.setState({name:e.target.value})}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name ="email" placeholder="Enter email" onChange={(e) => {
              this.setState({email:e.target.value})}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => {
              this.setState({password:e.target.value})}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password_confirmation" placeholder="Confirm Password" onChange={(e) => {
              this.setState({password_confirmation:e.target.value})}} />
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
