import React from 'react';
import './Movie.styles.css'
import data from '../../feed/sample.json'

class Movie extends React.Component{
    state={
        movies: data.entries
    }

    render(){
        return(
            this.state.movies.filter(movie => {
                return (movie.programType === 'movie') && (movie.releaseYear >= 2010)
            }).sort((a,b) => (
                (a.title > b.title) ? 1 : -1
            )).slice(0, 21).map(movie => (
                <div className='movie'>
                    <img  src={movie.images['Poster Art'].url} alt={movie.title}></img>
                    <p>{movie.title}</p>
                </div>
            ))
        )
    }
}

export default Movie