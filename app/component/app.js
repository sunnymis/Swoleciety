import React, {PropTypes} from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>{this.props.title}</h1>
        <img src={this.props.src} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};