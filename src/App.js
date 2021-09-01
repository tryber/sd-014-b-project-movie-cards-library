import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

import data from './data';

function App() {
  return (
    <div className="App">
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
