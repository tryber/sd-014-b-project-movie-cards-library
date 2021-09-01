import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <p className="rating">{ rating }</p>;
  }
}

Rating.propTypes = {
  movie: PropTypes.shape(
    { rating: PropTypes.number },
  ),
};

export default Rating;
