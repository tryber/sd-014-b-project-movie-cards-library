import React from 'react';
import './App.css';
import Header from './components/Header';
import Movielist from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist />
    </div>
  );
}

export default App;
