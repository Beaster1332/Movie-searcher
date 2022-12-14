import { connect } from "react-redux";
import { backToMainPageAC, getMoviesTC } from "../../redux/moviesReducer.js";
import Movies from './Movies.jsx';

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
        onMainPage: state.moviesReducer.onMainPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (url) => dispatch(getMoviesTC(url)),
        backToMain: () => dispatch(backToMainPageAC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);