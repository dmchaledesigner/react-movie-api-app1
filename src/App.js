import { useState, useEffect } from 'react';

import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=283540c6';

    const response = await fetch(url);
    const resJson = await response.json();
    const data = resJson.Search;
    setMovies(data);
  }


  useEffect(() => {

    getMovieData()
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
      </div>
      <div className='row'>

      </div>
    </div>
  );
}

export default App;
