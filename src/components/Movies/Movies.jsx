import React, { useEffect } from "react";
import MovieItem from "./MovieItem/MovieItem.jsx";
import { getMoviesApiUrl } from '../../redux/URL/URL.js';
import classes from './Movies.module.css';

const Movies = (props) => {

    const {
        movies,
        setMovies,
        onMainPage,
        backToMain
    } = props;

    useEffect(() => {
        onMainPage && setMovies(getMoviesApiUrl);
    }, [setMovies, onMainPage]);

    let moviesItems = movies.map(m => <MovieItem key={m.filmId} {...m} />);

    return <div className={classes.mainMovieContainer}>
        {moviesItems}
        {!onMainPage &&
        <button className={classes.backButton} onClick={() => backToMain()}>Назад</button>}
    </div>
}

export default Movies;