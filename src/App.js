import { useState, useEffect } from 'react';

import Heading from './components/Heading';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite'; // pass this as a component via MovieList Component

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);


  const getMovieData = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=283540c6`;

    const response = await fetch(url);
    const respJson = await response.json()
    const data = respJson.Search;

    // if there is data
    if (data) {
      setMovies(data);
    }
  }






  useEffect(() => {
    getMovieData(searchValue);
  }, [searchValue]);

  //update the favourites state, spread in existing plus current movie
  const favouritesClicked = (movie) => {
    setFavourites(favourites => [...favourites, movie]);
  }


  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='row'>
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={favouritesClicked}
        />
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Favourites' />
      </div>
      <div className='row'>
        {/* <MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/> */}
      </div>
    </div>
  );
}

export default App;
