import {useState, useEffect} from "react";
///import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Variable with your API Key
  const apiKey = "e691e573";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data); 
    } catch (error) {
    console.error(error)  
    }
    // Make fetch request and store the response
    
  };
  const randomMovie = useEffect(()=>{
    getMovie('superman')
  },[])
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {movie?<MovieDisplay movie={movie} />: <h1>No Movie to Display</h1>}
    </div>
  );
}


