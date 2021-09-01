import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Rating from './components/Rating';
import data from '../src/data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <MovieCard />
        <Rating />
      </div>
    );
  }
}

export default App;
