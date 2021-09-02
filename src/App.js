import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default App;
