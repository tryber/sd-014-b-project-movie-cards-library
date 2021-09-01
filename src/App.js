import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="App">
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
