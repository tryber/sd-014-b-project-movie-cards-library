import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList />
    </main>
  );
}

export default App;
