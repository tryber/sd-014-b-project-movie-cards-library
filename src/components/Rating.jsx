import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <div className="rating">{ rating }</div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
}.isRequired;

export default Rating;
