import React from 'react';

require('./Input.scss');

const Input = (props) => {
  return (
    <input
      type="text"
      value={props.value}
    />
  );
};

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  value: React.PropTypes.string,
};

export default Input;
