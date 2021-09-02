import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <footer className="movie-card-rating">
        <h4 className="rating">{ rating }</h4>
      </footer>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
