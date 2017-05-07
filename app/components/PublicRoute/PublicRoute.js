import React from 'react';
import { Route, Redirect } from 'react-router-dom';

require('./PublicRoute.scss');

const PublicRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => user ? <Redirect to="/" /> : <Component user={user} {...props} />}
    />
  );
};

PublicRoute.defaultProps = {
};

PublicRoute.propTypes = {
};

export default PublicRoute;
