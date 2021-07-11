import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';



function App() {


  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([])


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=283540c6`;

    const response = await fetch(url);
    const resJSON = await response.json();
    const data = resJSON.Search;


    if (data) { // if there is data then s
      setMovies(data); // setMoveis to display the data from the api
    }

    if (searchValue === '' || null) { // if the earch field is empty
      setSearchValue('star wars') // set the searchValue to a default movie
    }
  }



  // add to favourites function



  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]); // dislay data when the serchValue changes state


  const addFavouriteMovie = (movie) => {
    setFavourites([
      ...favourites, movie
    ])
  }


  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading />

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

      </div>
      <div className='row'>
        <MovieList
          allMovies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>



      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Favourites' />
      </div>
      <div className='row'>
        <MovieList
          allMovies={favourites}
          favouriteComponent={AddFavourites}
        />
      </div>
    </div>
  );
}

export default App;
