import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

// Como não é isRequired precisa fazer default
Rating.defaultProps = {
  rating: 5,
};

export default Rating;
