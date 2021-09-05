import React from 'react';
import PropTypes from 'prop-types';
// feito analisando o código do Levi https://github.com/tryber/sd-014-b-project-movie-cards-library/tree/levi-manoel-movie-cards-library-project
class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{ rating }</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
