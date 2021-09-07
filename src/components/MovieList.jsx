import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>{ movies }</main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
