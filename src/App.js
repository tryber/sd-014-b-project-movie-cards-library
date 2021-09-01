import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
