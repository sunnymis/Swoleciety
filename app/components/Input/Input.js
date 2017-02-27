import React from 'react';

require('./Input.scss');

class Input extends React.Component {
  focus() {
    this.input.focus();
  }

  render() {
    return (
      <input
        className="input"
        type={this.props.type}
        value={this.props.value}
        ref={(inp) => { this.input = inp; }}
      />
    );
  }
}

Input.defaultProps = {
  value: '',
  type: 'text',
};

Input.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  type: React.PropTypes.string,
};

export default Input;
