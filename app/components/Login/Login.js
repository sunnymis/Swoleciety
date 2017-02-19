import React from 'react';
import Input from '../Input/Input';

require('./Login.scss');

const Login = () => {
  return (
    <div className="login">
      <div className="image-container">
        <img src="../../img/Swoleciety-Logo-1x-White.png" />
      </div>
      <div className="form">
        <i className="material-icons person">person</i>
        <Input value="user" />
        <i className="material-icons">lock</i>
        <Input value="user" type="password" />
        <button type="button" className="signin">Sign In</button>
      </div>
      <p className="signup">Don&#39;t have an account?<span>Sign up!</span></p>
    </div>
  );
};

Login.defaultProps = {
};

Login.propTypes = {
};

export default Login;
