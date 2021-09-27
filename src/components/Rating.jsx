/* Por algum motivo, meu Rating não estava funcionando, então peguei o componente do Tiago Ponce, no github dele. https://github.com/tryber/sd-014-b-project-movie-cards-library/pull/111/files
 */
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
