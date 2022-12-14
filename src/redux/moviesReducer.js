import { getMoviesApiUrl } from "./URL/URL";

const SET_MOVIES = 'movies/SET_MOVIES';
const SET_KEYWORD_MOVIES = 'movies/SET_KEYWORD_MOVIES';
const BACK_TO_MAIN_PAGE = 'movies/BACK_TO_MAIN_PAGE';

const OPEN_DIALOG = 'movies/OPEN_DIALOG';
const CLOSE_DIALOG = 'movies/CLOSE_DIALOG';

let initialState = {
    movies: [],
    onMainPage: true,
    movieOnDialog: {
        open: false,
    },
};

let moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
            }
        case SET_KEYWORD_MOVIES:
            return {
                ...state,
                movies: [...action.movies],
                onMainPage: false
            }
        case BACK_TO_MAIN_PAGE:
            return {
                ...state,
                movies: [],
                onMainPage: true
            }
        case OPEN_DIALOG:
            return {
                ...state,
                movieOnDialog: {
                    ...state.movieOnDialog,
                    open: true,
                    filmId: action.filmId
                }
            }
        case CLOSE_DIALOG:
            return {
                ...state,
                movieOnDialog: { open: false },
            }
        default:
            return state
    }
};

export const setMoviesAC = (movies) => ({ type: SET_MOVIES, movies });
export const setKeywordMoviesAC = (movies) => ({ type: SET_KEYWORD_MOVIES, movies });
export const backToMainPageAC = () => ({ type: BACK_TO_MAIN_PAGE });

export const openDialogAC = (filmId) => ({ type: OPEN_DIALOG, filmId });
export const closeDialogAC = () => ({ type: CLOSE_DIALOG });

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
                if (url === getMoviesApiUrl) {
                    dispatch(setMoviesAC(json.films));
                } else {
                    dispatch(setKeywordMoviesAC(json.films));
                }
            })
    }
}

export default moviesReducer;