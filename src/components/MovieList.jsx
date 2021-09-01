import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
  const { movies } = this.props;
  
    return (
      <main>teste de retorno
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </main>
    );
  };
};

MovieList.propTypes = {

};

export default MovieList;
