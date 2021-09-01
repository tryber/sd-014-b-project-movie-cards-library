// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies}
      </section>
    );
  }
}

export default MovieCard;
