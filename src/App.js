import { useState, useEffect } from 'react';

import Heading from './components/Heading';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);


  const getMovieData = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=283540c6";

    const response = await fetch(url);
    const respJson = await response.json()
    const data = respJson.Search;
    setMovies(data);
  }






  useEffect(() => {
    getMovieData();
  }, [])




  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
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
