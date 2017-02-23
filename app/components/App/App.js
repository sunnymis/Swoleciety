import React from 'react';
import NavBar from '../NavBar/NavBar';

require('./App.scss');

const App = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

App.defaultProps = {
};

App.propTypes = {
};

export default App;
