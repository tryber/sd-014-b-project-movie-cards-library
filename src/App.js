import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
