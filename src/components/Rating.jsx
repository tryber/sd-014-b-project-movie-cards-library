import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <strong className="strong">Rating</strong>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
