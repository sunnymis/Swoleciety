import React from 'react';
import PropTypes from 'prop-types';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

require('./ExerciseCard.scss');

class ExerciseCard extends React.Component {

  static defaultProps = {
    details: {},
    onEdit: () => { },
    onDelete: () => { },
  };

  static propTypes = {
    details: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  };

  renderDetails = () => {
    return Object.keys(this.props.details).map((detail, index) => {
      if (detail !== 'name' && detail !== 'key') {
        return (
          <ExerciseDetail
            key={index}
            type={detail}
            value={+this.props.details[detail]}
          />
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className="exercise-card">
        <h1 className="name">{this.props.details.name}</h1>
        <div className="icons">
          <span onClick={() => { this.props.onEdit(this.props); }}>
            <i className="material-icons">mode_edit</i>
          </span>
          <span onClick={() => { this.props.onDelete(this.props); }}>
            <i className="material-icons">delete</i>
          </span>
        </div>
        <div className="details-container">
          {this.renderDetails()}
        </div>
      </div>
    );
  }
};

export default ExerciseCard;
