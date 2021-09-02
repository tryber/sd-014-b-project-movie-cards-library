import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movie = this.props;
    return (
      <div>
        {movie.map((filme) => <MovieCard key={ filme.title } movies={ filme } />)}
      </div>
    );
  }
}

export default movieList;
