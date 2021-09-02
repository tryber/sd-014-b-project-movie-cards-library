import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <span className="rating">{ rating }</span>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
