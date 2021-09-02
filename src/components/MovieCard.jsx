import React from 'react';
import { indexOf } from 'lodash';
import Rating from './Rating';
import Data from '../data';

export default () => {
  function getImages() {
    return Data
      .map((image) => <img key={ indexOf(image) } src={ image.imagePath } alt="" />);
  }
  return (
    <div className="rating">
      <p>MovieCard</p>
      {getImages()}
      <Rating />
    </div>
  );
};
