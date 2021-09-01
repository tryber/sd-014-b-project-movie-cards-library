import React from 'react';
import movies from '../data';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
