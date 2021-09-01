import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { filmes } = this.props;
    return (
      <section>{ filmes }</section>
    );
  }
}
MovieList.propTypes = {

}.isRequired;

export default MovieList;
