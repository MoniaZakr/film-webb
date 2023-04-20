import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import SearchIcon from "./components/search.svg";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e32129d4';
const movie1 = {
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
}


function App() {
  const [movies, setMovies] = useState([])

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman")
  }, [])


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          type="text"
          placeholder='Search for movies'
          value="superman"
          onChange={() => {}}
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onChange={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>

      )
    }
      
    </div>
  );
}

export default App;
