import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';

class Rating extends React.Component {
  render() {
    return <div className="rating">{movies.rating}</div>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
