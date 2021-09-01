import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
