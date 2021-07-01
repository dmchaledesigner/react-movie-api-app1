import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie) => (
                    <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                        <img src={movie.Poster} alt='movie'></img>
                        <div className='overlay d-flex align-items-center justify-content-center'
                        >
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default MovieList
