import React from 'react';

require('./Input.scss');

const Input = (props) => {
  return (
    <input
      className="input"
      type="text"
      value={props.value}
    />
  );
};

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default Input;
