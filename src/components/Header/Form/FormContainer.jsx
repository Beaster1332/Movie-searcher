import { connect } from "react-redux"
import { getMoviesTC } from "../../../redux/moviesReducer.js";
import Form from "./Form.jsx";

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovie: (url) => dispatch(getMoviesTC(url)),
    }
}

export default connect(null, mapDispatchToProps)(Form);