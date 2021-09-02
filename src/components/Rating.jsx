import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">
          {rating}
        </p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;

export default Rating;

// Consultei o repositório do aluno Ivanielson Cabral para a correção da escrita da checagem de tipos.
// Link: https://github.com/tryber/sd-014-b-project-movie-cards-library/pull/11/files
