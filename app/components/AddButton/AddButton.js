import React from 'react';

require('./AddButton.scss');

const AddButton = () => {
  return (
    <div className="add-button">
      <i className="material-icons">add</i>
    </div>
  );
};

AddButton.defaultProps = {
};

AddButton.propTypes = {
};

export default AddButton;
