import React from 'react';

require('./AddButton.scss');

const AddButton = (props) => {
  return (
    <div 
      className={`add-button ${props.size}`} 
      onClick={() => {props.onClick({})}}>
      <i className="material-icons">add</i>
    </div>
  );
};

AddButton.defaultProps = {
  onClick: () => {},
  size: 'small',
};

AddButton.propTypes = {
  onClick: React.PropTypes.func,
  size: React.PropTypes.string,
};

export default AddButton;
