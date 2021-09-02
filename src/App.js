import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Movie-List">
        <MovieList movies={ movies } />
      </section>
    </div>
  );
}

export default App;
// Consultei o repositório de Elithon Silva para entender essa parte https://github.com/tryber/sd-014-b-project-movie-cards-library/pull/19/files
