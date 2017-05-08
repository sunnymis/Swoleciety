import React from 'react';
import PropTypes from 'prop-types';

require('./AddButton.scss');


AddButton.defaultProps = {
  onClick: () => { },
  size: "large"
};


AddButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
};


function AddButton(props) {
  return (
    <div
      className={`add-button ${props.size}`}
      onClick={() => { props.onClick({}) }}>
      <i className="material-icons">add</i>
    </div>
  );
};

export default AddButton;
