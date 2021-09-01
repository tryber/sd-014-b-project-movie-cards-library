import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList />
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </main>
  );
}

export default App;
