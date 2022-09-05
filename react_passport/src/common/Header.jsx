import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Forget from '../components/Forget'
import Profile from '../components/Profile'
import NavC from './NavC'

export default class Header extends Component {
  render() {
    return (        
        <Router>
            <div>
            <NavC />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forget" component={Forget} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
            </div>
        </Router>
    )
  }
}
