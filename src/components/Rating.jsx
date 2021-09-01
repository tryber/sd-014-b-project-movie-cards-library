// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="bg-success w-25 text-white text-center rounded rating">
        { rating }
      </p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
