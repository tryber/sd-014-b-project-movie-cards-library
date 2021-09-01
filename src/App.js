import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList movies={ data } />
    </section>
  );
}

export default App;
