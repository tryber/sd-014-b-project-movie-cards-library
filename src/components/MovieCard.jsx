// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>
          { title }
        </h4>
        <h5>
          { subtitle }
        </h5>
        <p>{storyline}</p>
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.oneOfType([PropTypes.object]).isRequired };
