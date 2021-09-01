import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}
