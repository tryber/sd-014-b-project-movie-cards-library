// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath } } = this.props;
    return (
      <main className="MovieCard">
        <section>
          <img className="ImagesCard" src={ imagePath } alt={ title } />
        </section>
        <section>
          <h4 className="movieTitle">{ title }</h4>
          <h5 className="moviesubtitle">{ subtitle }</h5>
        </section>
      </main>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
