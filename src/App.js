import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <MovieList movies={ data } />
      </main>
    );
  }
}

export default App;
