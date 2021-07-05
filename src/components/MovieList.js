import React from 'react'

const MovieList = ({
    movies,
    favouriteComponent,
    handleFavouritesClick
}) => {
    //assign the prop component to a variable 
    const FavouriteComponent = favouriteComponent;

    return (
        <>
            {
                movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                        <img src={movie.Poster} alt={movies.Title}></img>
                        <div
                            onClick={() => handleFavouritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content-center'>
                            <FavouriteComponent />
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default MovieList

