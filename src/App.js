import React, { useState, useEffect } from 'react';


import MovieHeading from './components/MovieHeading';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';


function App() {


  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])




  const getMovieData = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=283540c6`;
    const response = await fetch(url);
    const resJson = await response.json();
    const data = resJson.Search;
    if (data) {
      setMovies(data)
    }

  }


  const addFavouriteMovie = (movie) => {
    setFavourites(favourites =>
      [...favourites, movie]
    )


  }


  useEffect(() => {
    getMovieData(searchValue)
  }, [searchValue]);





  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeading heading='Movies' />

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      </div>
      <div className='row'>
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          addFavMoviesHandle={addFavouriteMovie}
        />

      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeading heading='Favourites' />
      </div>
      <div className='row'>

        <MovieList
          movies={favourites}
          favouriteComponent={AddFavourite}
          addFavMoviesHandle={addFavouriteMovie}
        />

      </div>
    </div>
  );
}

export default App;
