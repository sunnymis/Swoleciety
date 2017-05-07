import React from 'react';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

require('./ExerciseCard.scss');

class ExerciseCard extends React.Component {

  constructor(props) {
    super(props);
    this.renderDetails = this.renderDetails.bind(this);
  }

  renderDetails() {
    return Object.keys(this.props.details).map((detail) => {
      console.log(detail);
      if (detail !== 'name' && detail !== 'key') {
        return (
          <ExerciseDetail
            type={detail}
            value={this.props.details[detail]}
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

ExerciseCard.defaultProps = {
  details: {},
  onEdit: () => { },
  onDelete: () => { },
};

ExerciseCard.propTypes = {
  details: React.PropTypes.object,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func,
};

export default ExerciseCard;
