import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="mainDiv">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
