import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Rating from './components/Rating';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ data.movies } />
        <Rating rating={ data.movies } />
      </div>
    );
  }
}

export default App;
