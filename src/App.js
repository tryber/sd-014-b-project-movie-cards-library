import React from 'react';
import movies from './data';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
