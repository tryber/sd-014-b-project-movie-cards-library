import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList data={ data }/>
    </div>
  );
}

export default App;
