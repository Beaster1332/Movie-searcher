import React from "react";
import classes from './MovieItem.module.css';

const MovieItem = (props) => {

    const { nameRu, countries, genres, posterUrlPreview } = props;

    const genresItems = genres.map(g => `${g.genre} `);
    const countriesItems = countries.map(c => `${c.country} `)

    return <div className={classes.movieItem}>
        <div className={classes.imgHolder}>
            <img className={classes.img} src={posterUrlPreview} alt={nameRu} />
        </div>
        <div className={classes.infoHolder}>
            <div>
                <h3>
                    {nameRu}
                </h3>
            </div>
            <div>
                <p className={classes.genres}>
                    {genresItems}
                </p>
            </div>
            <div>
                <p className={classes.countries}>
                    {countriesItems}
                </p>
            </div>
        </div>
    </div>
}

export default MovieItem;