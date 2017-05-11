import React from 'react';
import Input from '../Input/Input';
import AddButton from '../AddButton/AddButton';
import PropTypes from 'prop-types';

require('./AddEditExerciseForm.scss');

class AddEditExerciseForm extends React.Component {

  static defaultProps = {
    exerciseDetails: {},
    onOutsideClick: () => { },
    onSave: () => { },
    onCancel: () => { },
    onDataChange: () => { },
    onNewEntryChange: () => { },
  };


  static propTypes = {
    exerciseDetails: PropTypes.object,
    onOutsideClick: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onDataChange: PropTypes.func,
    onNewEntryChange: PropTypes.func,
  }

  componentDidMount() {
    this.InputComponent.focus();
    this.renderDetails = this.renderDetails.bind(this);
  }

  renderDetails() {
    const exercise = this.props.exerciseDetails;

    function capitalizeWord(word) {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    }

    return Object.keys(exercise.details).map((detail) => {
      return (
        <div>
          {detail !== 'name' && detail !== 'key' ?
            <div className="details-row">
              <h2>{capitalizeWord(detail)}</h2>
              <Input
                name={detail}
                value={exercise.details[detail]}
                onChange={(e) => { this.props.onDataChange(e); }}
              />
            </div>
            : null
          }
        </div>
      );
    });
  }

  renderEmptyDetailRow() {
    return (
      <div>
        <Input
          name="field"
          placeholder="e.g Set, Reps, Wt"
          onChange={(e) => { this.props.onNewEntryChange(e); }}
        />
        <Input
          name="value"
          placeholder="100"
          onChange={(e) => { this.props.onNewEntryChange(e); }}
        />
      </div>
    )
  }

  render() {
    const details = this.renderDetails();
    return (
      <div className="overlay">
        <div className="add-edit-form" onBlur={(this.props.onOutsideClick)}>
          <div className="name-container">
            <Input
              value={this.props.exerciseDetails.details.name}
              name="name"
              ref={(input) => { this.InputComponent = input; }}
              onChange={(e) => { this.props.onDataChange(e); }}
            />
          </div>

          {details}

          <div className="details-row new-entry">
            <Input
              name="field"
              placeholder="e.g Set, Reps, Wt"
              onChange={(e) => { this.props.onNewEntryChange(e); }}
            />
            <Input
              name="value"
              placeholder="100"
              onChange={(e) => { this.props.onNewEntryChange(e); }}
            />
            <div className="add-new">
              <AddButton size="small" />
            </div>
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
}




export default AddEditExerciseForm;
