import React from 'react';
import { Fragment } from 'react';
import meals from '../../assets/meals.jpg';

import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='A table full of delicious food!'/>
            </div>
        </Fragment>
    );
};

export default Header;