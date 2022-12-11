import React from "react";
import FormContainer from "./Form/FormContainer.jsx";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.headerContainer}>
            <div className={classes.logoBlock}>
                <h1 className={classes.logo}>
                    MovieSearcher
                </h1>
            </div>
            <div className={classes.formContainer}>
                <FormContainer />
            </div>
        </div>
    </header>
}

export default Header;