// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
