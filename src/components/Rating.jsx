// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { avaliation } = this.props;
    return <p>{avaliation}</p>;
  }
}

Rating.propTypes = {
  avaliation: PropTypes.number.isRequired,
};
export default Rating;
