import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <p>Rating renderizado</p>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  )).isRequired,
};

export default Rating;
