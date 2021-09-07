import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <body className="body">
        <div className="App">
          <Header />
          <MovieList movies={ movies } />
        </div>
      </body>
    );
  }
}
export default App;
