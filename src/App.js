import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import data from './data';
import MovieCard from './components/MovieCard'
import Rating from './components/Rating';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
