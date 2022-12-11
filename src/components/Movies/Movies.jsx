import React, { useEffect } from "react";
import MovieItem from "./MovieItem/MovieItem.jsx";
import { getMoviesApiUrl } from '../../redux/URL/URL.js';
import classes from './Movies.module.css';

const Movies = (props) => {

    const { movies, setMovies } = props;

    useEffect(() => {
        setMovies(getMoviesApiUrl);
    }, [setMovies]);

    let moviesItems = movies.map(m => <MovieItem key={m.filmId} {...m} />);

    return <div className={classes.mainMovieContainer}>
        {moviesItems}
    </div>
}

export default Movies;