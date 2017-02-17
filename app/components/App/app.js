import React, { PropTypes } from 'react';

require('./app.scss');


export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>{this.props.title}</h1>
        <img src={this.props.src} alt="logo" />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
};