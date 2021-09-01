import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <main>
        {`${data[1].title}`}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    movie: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  }),
};

export default MovieList;
