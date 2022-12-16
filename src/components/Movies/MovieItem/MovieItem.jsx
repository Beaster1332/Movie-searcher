import React from "react";
import { connect } from "react-redux";
import { openDialogAC } from "../../../redux/moviesReducer";
import MovieItemDialog from "./MovieItemDialog/MovieItemDialog";
import classes from './MovieItem.module.css';

const MovieItem = (props) => {

    const {
        nameRu,
        countries,
        genres,
        posterUrlPreview,
        filmId,
        movieOnDialog,
        openDialog
    } = props;

    const genresItems = genres.map(g => `${g.genre} `);
    const countriesItems = countries.map(c => `${c.country} `);

    return <div className={classes.movieItem}>
        <div onClick={() => openDialog(filmId)} className={classes.imgHolder}>
            <img className={classes.img} src={posterUrlPreview} alt={nameRu} />
        </div>
        <div onClick={() => openDialog(filmId)} className={classes.infoHolder}>
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
        {
            movieOnDialog.open && movieOnDialog.filmId === filmId ?
                <MovieItemDialog
                    name={nameRu}
                    image={posterUrlPreview}
                    genres={genresItems}
                /> :
                null
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
        movieOnDialog: state.moviesReducer.movieOnDialog,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openDialog: (filmId) => dispatch(openDialogAC(filmId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);