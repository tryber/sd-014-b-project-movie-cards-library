// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.defaultProps;

export default Rating;
