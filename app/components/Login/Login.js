import React from 'react';
import Input from '../Input/Input';
import AuthService from '../../services/auth.service';
import { browserHistory } from 'react-router';

require('./Login.scss');

export default class Login extends React.Component {



  constructor() {
    super();
    this.onSignIn = this.onSignIn.bind(this);
    this.handleOnUsernameChange = this.handleOnUsernameChange.bind(this);
    this.handleOnPasswordChange = this.handleOnPasswordChange.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }






  onSignIn() {
    AuthService.signin(this.state.username, this.state.password).then((auth) => {
      if (auth.success) {
        this.context.router.push('/');
      } 
      if (auth.error) {
        console.log('ERROR:', auth.error);
      }
    })
  }

  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        <div className="image-container">
          <img src="../../img/Swoleciety-Logo-1x-White.png" alt="logo" />
        </div>
        <div className="form">
          <i className="material-icons person">person</i>
          <Input onChange={this.handleOnUsernameChange} />
          <i className="material-icons">lock</i>
          <Input 
            type="password"
            onChange={this.handleOnPasswordChange}
          />
          <button 
            type="button" 
            className="signin"
            onClick={this.onSignIn}>
            Sign In
          </button>
        </div>
        <p className="signup">Don&#39;t have an account?<span>Sign up!</span></p>
      </div>
    );  
  }
};

Login.defaultProps = {
};

Login.propTypes = {
};

Login.contextTypes = {
  router: React.PropTypes.object,
};

