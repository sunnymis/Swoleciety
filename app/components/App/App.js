import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import WeekViewContainer from '../WeekViewContainer/WeekViewContainer';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
require('./App.scss');

export default class App extends Component {

  constructor() {
    super();
    this.state = { user: undefined };
  }

  componentDidMount() {
    AuthService.getCurrentlySignedInUser((user) => {
      this.setState({
        user: user
      });
    });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <Router>
        <div>
          <NavBar />
          <Link to="/login">Login</Link>
          <Link to="/exercises">exercises</Link>

          <Route path="/login" component={Login} />
          <Route path="/exercises" render={() => (
            user ? <WeekViewContainer /> : <Redirect to="/login" />
          )} />



        </div>
      </Router>
    );
  }
}
/*



<Route exact path="/login" render={() => (
            user ? <WeekViewContainer /> : <Login />
          )} />
          <Route path="/" render={() => (
            user ? <WeekViewContainer /> : <Redirect to="/login" />
          )} />

          

          <Route path="/exercises" render={() => (
            user !== null ? <WeekViewContainer /> :
              <Redirect to="/login" />
          )} />
*/
