// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <rating className="rating">
          {rating}
        </rating>
      </div>
    );
  }
}
Rating.defaultProps = {
  rating: null,
};
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
