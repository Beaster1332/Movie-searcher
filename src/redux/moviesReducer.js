const SET_MOVIES = 'movies/SET_MOVIES';

let initialState = {
    movies: []
};

let moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
            }
        default:
            return state
    }
};

export const setMoviesAC = (movies) => ({ type: SET_MOVIES, movies });

export const getMoviesTC = (url) => {
    return async dispatch => {
        await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "1d58e09f-8fc7-4bc1-a023-2c51a6172a11"
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch(setMoviesAC(json.films));
            })
    }
}

export default moviesReducer;