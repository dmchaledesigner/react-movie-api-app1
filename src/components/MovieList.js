import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map((movie, index) => (
                <div key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </>
    )
}

export default MovieList
