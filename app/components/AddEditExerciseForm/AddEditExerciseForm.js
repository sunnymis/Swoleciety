import React from 'react';
import Input from '../Input/Input';

require('./AddEditExerciseForm.scss');

class AddEditExerciseForm extends React.Component {

  componentDidMount() {
    this.InputComponent.focus();
    this.renderDetails = this.renderDetails.bind(this);
  }

  renderDetails() {
    const exercise = this.props.exerciseDetails;

    function capitalizeWord(word) {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    }

    return Object.keys(exercise).map((detail) => {
      return (
        <div>
          { detail !== 'name' ?
            <div className="details-row">
              <h2>{capitalizeWord(detail)}</h2>
              <Input
                name={capitalizeWord(detail)}
                value={exercise.set}
                onChange={(e) => { this.props.onDataChange(e); }}
              />
            </div>
            : null
          }
        </div>
      );
    });
  }

  render() {
    const details = this.renderDetails();
    return (
      <div className="overlay">
        <div className="add-edit-form" onBlur={(this.props.onOutsideClick)}>
          <div className="name-container">
            <Input
              value={this.props.exerciseDetails.name}
              name='name'
              ref={(input) => { this.InputComponent = input; }}
              onChange={(e) => { this.props.onDataChange(e); }}
            />
          </div>

          {details}

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
}

AddEditExerciseForm.defaultProps = {
  exerciseDetails: {},
  onOutsideClick: () => {},
  onSave: () => {},
  onCancel: () => {},
  onDataChange: () => {},
};

AddEditExerciseForm.propTypes = {
  exerciseDetails: React.PropTypes.object,
  onOutsideClick: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onDataChange: React.PropTypes.func,
};

export default AddEditExerciseForm;
