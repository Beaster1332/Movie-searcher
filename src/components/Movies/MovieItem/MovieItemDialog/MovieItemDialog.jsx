import React from "react";
import { connect } from "react-redux";
import { closeDialogAC } from "../../../../redux/moviesReducer";
import classes from './MovieItemDialog.module.css';

const MovieItemDialog = (props) => {

    const { name, image, genres, closeDialog } = props;

    return <div onClick={() => closeDialog()} className={classes.dialogContainer}>
        <div className={classes.dialogContent} onClick={e => e.stopPropagation()}>
            <div className={classes.dialogMovieImgHolder}>
                <img className={classes.dialogFilmImg} src={image} alt={name} />
            </div>
            <div className={classes.dialogMovieText}>
                <div className={classes.nameHolder}>
                    {name}
                </div>
                <div className={classes.genreHolder}>
                    {genres}
                </div>
            </div>
            <button onClick={() => closeDialog()} className={classes.closeButton}>Закрыть</button>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDialog: () => dispatch(closeDialogAC()),
    }
}

export default connect(null, mapDispatchToProps)(MovieItemDialog);