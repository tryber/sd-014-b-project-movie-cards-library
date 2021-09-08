// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <h6 className="rating">{ rating }</h6>
      </div>
    );
  }
}

Rating.propTypes = PropTypes.number;

export default Rating;
