import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
    </div>
  );
}
export default App;
