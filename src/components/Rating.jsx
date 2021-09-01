import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ movie }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.shape(
    { rating: PropTypes.number },
  ).isRequired,
};

export default Rating;
