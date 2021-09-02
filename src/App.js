import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import moviesData from './data';

function App() {
  return (
    <main className="body">
      <Header />
      <section className="movie-list">
        <MovieList movie={ moviesData } />
      </section>
    </main>
  );
}

export default App;
