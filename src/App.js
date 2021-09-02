// Wallacy Francis - iniciando o projeto
import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <main>
      <Header />
      { movies.map((movie) => (
        <article key={ movie.title }>
          <MovieList movieInfo={ movie } />
        </article>
      )) }
    </main>
  );
}

export default App;
