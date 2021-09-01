import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './../src/data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Movies} />
    </div>
  );
}

export default App;
