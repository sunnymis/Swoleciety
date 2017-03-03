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
        placeholder={this.props.placeholder}
        defaultValue={this.props.value}
        onChange={this.props.onChange}
        ref={(inp) => { this.input = inp; }}
      />
    );
  }
}

Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  onChange: () => {},
};

Input.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default Input;
