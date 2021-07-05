import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                        <img src={movie.Poster} alt={movies.Title}></img>
                        <div className='overlay d-flex align-items-center justify-content-center'>
                            <p>content</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default MovieList

