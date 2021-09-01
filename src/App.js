import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MoviesList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList movies={ movies } />
    </div>
  );
}

export default App;
