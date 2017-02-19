import React from 'react';

require('./Input.scss');

const Input = (props) => {
  return (
    <input
      className="input"
      type={props.type}
      value={props.value}
    />
  );
};

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
