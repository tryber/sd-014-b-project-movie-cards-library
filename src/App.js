import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movie={ movies } />
    </main>
  );
}

export default App;
