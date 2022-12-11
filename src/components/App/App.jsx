import React from "react";
import MoviesContainer from '../Movies/MoviesContainer.jsx';
import Header from '../Header/Header.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Header />
        <div className={classes.contentContainer}>
            <MoviesContainer />
        </div>
    </div>
}

export default App;
