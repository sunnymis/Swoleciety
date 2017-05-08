import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';

require('./NavBar.scss');


export default class NavBar extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  onSignIn = () => {
    AuthService.signin(this.state.username, this.state.password).then((auth) => {
      if (auth.success) {
        this.setState({
          loggedIn: true
        });
      }
      if (auth.error) {
        console.error('ERROR:', auth.error);
      }
    })
  }

  onSignOut = () => {
    AuthService.signout();
  }

  render() {
    return (
      <nav className="nav-bar">
        <Hamburger />
        <Link to="/"><h1 id="swoleciety-title">Swoleciety</h1></Link>
        <button onClick={this.onSignIn}>Sign In</button>
        <button onClick={this.onSignOut}>Sign Out</button>
      </nav>
    );
  }
};

