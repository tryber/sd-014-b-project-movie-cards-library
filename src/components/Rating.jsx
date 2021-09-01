import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>{ rating }</div>
    );
  }
}

Rating.propTypes = PropTypes.number;

export default Rating;
