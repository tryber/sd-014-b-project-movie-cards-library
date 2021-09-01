import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <main>
      <Header />
      <MovieList movies = {movies} />
    </main>
  );
}

export default App;
