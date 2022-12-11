import { connect } from "react-redux";
import { getMoviesTC } from "../../redux/moviesReducer.js";
import Movies from './Movies.jsx';

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (url) => dispatch(getMoviesTC(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);