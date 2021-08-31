// Passo 11 e 12
import React from 'react';
// Passo Final de testes
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

// Passo Final de testes

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
