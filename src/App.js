import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movie-list">
        <MovieList movies={ data } />
      </div>
    </div>
  );
}

export default App;
