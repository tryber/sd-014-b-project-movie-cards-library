// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span>{ rating }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;

/*
Começo padrão, importar react e proptype
criar a classe de componente rating
renderizar pq só funciona dentro de função
pegar o rating que foi desestruturado e atribuir ao props
retornar um elemento pai <div>
não deixar o elemento solto, colcoar dentro do span o {rating}
fazer o proptype:
rating.proptpe recebe um obj {}
o que é o rating? é um number
fazer o default props:
caso não tenha rating no obj data
ele recebe 0 como padrão
*/
