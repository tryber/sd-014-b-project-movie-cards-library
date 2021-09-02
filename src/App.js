import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <MovieList movies={ movies } />
      </body>
    );
  }
}

export default App;
