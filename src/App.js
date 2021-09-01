import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;

/*
Primeira coisa apagamos o texto inicial;
importamos o header;
colocamos o componente dentro da div;
<<< MUITO IMPORTANTE >>>
importar data dos dados do objeto que contém a fonte de dados
importar o movie list
adicionar o movie list a div do app com a props movies conforme requisito
a props movies vai receber data que é todo o objeto de data.js
que é onde está nossa base de dados.

*/
