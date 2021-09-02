import React from 'react';
import { indexOf } from 'lodash';
import Rating from './Rating';
import Data from '../data';

export default () => {
  function getImages() {
    return Data
      .map((image) => (
        <>
          <h4>{ image.title }</h4>
          <h5>{ image.subtitle }</h5>
          <p>{ image.storyline }</p>
          <img key={ indexOf(image) } src={ image.imagePath } alt="" />
        </>
      ));
  }
  return (
    <div className="rating">
      {getImages()}
      <Rating />
    </div>
  );
};
