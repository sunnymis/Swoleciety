import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import WeekViewContainer from '../WeekViewContainer/WeekViewContainer';
import ExerciseCardContainer from '../ExerciseCardContainer/ExerciseCardContainer';
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
      user === undefined ? <h1>Loading...</h1> :
        <Router>
          <div>
            <NavBar />
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/exercises">exercises</Link>

            <Route exact path="/login" render={() => (
              user ? <Redirect to="/exercises" /> : <Login />
            )} />

            <Route exact path="/" render={() => (
              user ? <WeekViewContainer user={user} /> : <Redirect to="/login" />
            )} />

            <Route exact path="/exercises" render={() => (
              user ? <WeekViewContainer user={user} /> : <Redirect to="/login" />
            )} />

            <Route path="/exercises/:day" component={ExerciseCardContainer} />

          </div>
        </Router>
    );
  }
}
/*


        
*/
