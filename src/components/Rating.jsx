import React from 'react';
import movies from '../data';
// import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span>{ rating }</span>
    );
  }
}

export default Rating;