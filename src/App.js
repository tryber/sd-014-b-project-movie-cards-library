import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Header />
      <div className="movie-list">
        <MovieList movies={ movies } />
      </div>
    </div>
  );
}

export default App;
