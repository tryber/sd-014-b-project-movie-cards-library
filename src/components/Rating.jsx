import React from 'react';
import Data from '../data';

export default () => {
  function getRating() {
    return Data
      .map((valor) => <p key={ indexOf(valor) } className="rating">{ valor.rating }</p>);
  }
  return (
    <div>
      {getRating()}
    </div>
  );
};
