import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';




function App() {


  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=283540c6`;

    const response = await fetch(url);
    const resJSON = await response.json();
    const data = resJSON.Search;


    if (data) { // if there is data then setMoveis to display the data
      setMovies(data);
    }

    if (searchValue === '' || null) { // if the earch field is empty
      setSearchValue('star wars') // set the searchValue to a default movie
    }
  }






  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);



  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <Heading />

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
