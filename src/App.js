import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import Data from './data';

function App() {
  return (
    <div className="App">
      <MovieCard movie={ Data } />
    </div>
  );
}

export default App;
