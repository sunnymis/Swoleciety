import React from 'react';
import PropTypes from 'prop-types';

require('./Input.scss');

class Input extends React.Component {

  static defaultProps = {
    value: '',
    type: 'text',
    name: '',
    placeholder: '',
    onChange: () => { },
  };

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  focus = () => {
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

export default Input;
