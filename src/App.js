import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';

// Requisito 1 - Crie um componente <Header />
// Criar um componente que represente o cabeçalho da página.
// O que será verificado:
// Renderize o componente <Header />.

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
