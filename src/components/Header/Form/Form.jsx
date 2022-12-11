import React from 'react';
import { useForm } from 'react-hook-form';
import { getKeywordApiUrl } from '../../../redux/URL/URL.js';
import classes from './Form.module.css';

const Form = (props) => {

    const { searchMovie } = props;

    const { register, handleSubmit, reset } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = ({ search }) => {
        const url = `${getKeywordApiUrl}${search}`;
        searchMovie(url);
        reset();
    };

    return <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <input
            className={classes.searchInput}
            type="text"
            placeholder='Искать фильм'
            {...register("search")}
        />
        <button className={classes.searchButton} type="submit">Найти</button>
    </form>
}

export default Form;