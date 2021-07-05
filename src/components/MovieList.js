import React from 'react'

const MovieList = ({ movies, favouriteComponent, addFavMoviesHandle }) => {
    const FavouriteComponent = favouriteComponent;
    return (
        <>
            {movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index}>
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => addFavMoviesHandle(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList
