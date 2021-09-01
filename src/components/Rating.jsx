import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">
          { rating }
        </span>
      </div>
    );
  }
}
Rating.propTypes = {
  rating: PropType.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
