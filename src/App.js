import { useEffect } from 'react';
import './App.css';
import MowieCard from './components/MowieCard';
import SearchIcon from "./components/search.svg";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e32129d4';


function App() {

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
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
    </div>
  );
}

export default App;
