import React, { PropTypes } from 'react';

require('./app.scss');


const App = (props) => {
  return (
    <div className="app-container">
      <h1>{props.title}</h1>
      <img src={props.src} alt="logo" />
    </div>
  );
};

App.defaultProps = {
  title: 'Swoleciety',
  src: '',
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
};


export default App;