import React from 'react';
import Input from '../Input/Input';

require('./AddEditExerciseForm.scss');

class AddEditExerciseForm extends React.Component {

  componentDidMount() {
    this.InputComponent.focus();
  }

  render() {
    return (
      <div className="overlay">
        <div className="add-edit-form" onBlur={(this.props.onOutsideClick)}>
          <div className="name-container">
            <Input 
              value={this.props.name}
              ref={(input) => { this.InputComponent = input; }}
            />
          </div>
          <div className="details-row">
            <h2>Set</h2>
            <Input
              value={this.props.set}
            />
          </div>
          <div className="details-row">
            <h2>Reps</h2>
            <Input value={this.props.reps} />
          </div>
          <div className="details-row">
            <h2>Weight</h2>
            <Input value={this.props.weight} />
          </div>
          <div className="buttons-row">
            <button
              className="save"
              onClick={this.props.onSave}
            >SAVE
            </button>
            <button className="cancel" onClick={this.props.onCancel}>CANCEL</button>
          </div>
        </div>
      </div>
    );
  }
  
};

AddEditExerciseForm.defaultProps = {
  name: '',
  set: 0,
  reps: 0,
  weight: 0,
  onOutsideClick: () => {},
  onSave: () => {},
  onCancel: () => {},
};

AddEditExerciseForm.propTypes = {
  name: React.PropTypes.string,
  set: React.PropTypes.number,
  reps: React.PropTypes.number,
  weight: React.PropTypes.number,
  onOutsideClick: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onCancel: React.PropTypes.func,
};

export default AddEditExerciseForm;
