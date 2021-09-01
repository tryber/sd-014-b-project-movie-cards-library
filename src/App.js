import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <main className="body">
      <Header />
      <MovieList movies={ data } />
    </main>
  );
}

export default App;
