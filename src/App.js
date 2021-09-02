import './App.css';
import Header from './header'
import MovieList from './movieList';
import movies from './data';

function App() {
  return (
    <div className="mainDiv">
   <Header />
   <MovieList  movies={movies}/>
    </div>
  );
}

export default App;