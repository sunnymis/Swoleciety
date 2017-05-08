import React from 'react';
import PropTypes from 'prop-types';


require('./AddButton.scss');

const AddButton = (props) => {
  return (
    <div
      className={`add-button ${props.size}`}
      onClick={() => { props.onClick({}) }}>
      <i className="material-icons">add</i>
    </div>
  );
};

AddButton.defaultProps = {
  onClick: () => { },
};


AddButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
};
export default AddButton;
