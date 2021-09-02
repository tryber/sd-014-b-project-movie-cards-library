import React from 'react';
import Data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <App />
      <Header />
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
// Consultei o repositório de Elithon Silva para entender essa parte https://github.com/tryber/sd-014-b-project-movie-cards-library/pull/19/files
