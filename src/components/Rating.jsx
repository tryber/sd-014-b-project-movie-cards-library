import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p className="Rating">{ rating }</p>
      </section>
    );
  }
}

Rating.PropTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 70,
};

export default Rating;
