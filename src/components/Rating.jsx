import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { movie: rating } = this.props;
    return (
      <div>{ rating }</div>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default Rating;
