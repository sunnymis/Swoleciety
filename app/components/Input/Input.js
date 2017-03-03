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
        name={this.props.name}
        placeholder={this.props.placeholder}
        defaultValue={this.props.value}
        onChange={(e) => { this.props.onChange(e); }}
        ref={(inp) => { this.input = inp; }}
      />
    );
  }
}

Input.defaultProps = {
  value: '',
  type: 'text',
  name: '',
  placeholder: '',
  onChange: () => {},
};

Input.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default Input;
