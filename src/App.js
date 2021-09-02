import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="app">
      <Header />
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
