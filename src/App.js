import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      {/* Passo 15 */}
      <Header />
      {/* Passo 16 */}
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
