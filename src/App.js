import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
