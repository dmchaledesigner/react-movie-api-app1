import React from 'react';

const MovieList = ({ allMovies, favouriteComponent, handleFavouritesClick }) => {

    const FavouriteComponent = favouriteComponent;

    return (
        <>
            {allMovies.map((movie) => (
                <div
                    className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>

    )
}

export default MovieList;
