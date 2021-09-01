// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (<h1 className="rating">{ rating }</h1>);
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
