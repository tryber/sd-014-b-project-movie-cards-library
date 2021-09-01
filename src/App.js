import React from 'react';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
