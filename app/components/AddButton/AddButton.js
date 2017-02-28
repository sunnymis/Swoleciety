import React from 'react';

require('./AddButton.scss');

const AddButton = (props) => {
  return (
    <div className="add-button" onClick={() => {props.onClick({})}}>
      <i className="material-icons">add</i>
    </div>
  );
};

AddButton.defaultProps = {
  onClick: () => {},
};

AddButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default AddButton;
