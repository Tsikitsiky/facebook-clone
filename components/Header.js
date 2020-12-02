import React, { useContext, useReducer } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../Context';

function Header() {
    const {state, dispatch} = useContext(Context)
    return (
        <header>
            <Link to="/">OnjaBook</Link>
            <Link to="/">Feed</Link>
            <Link to="/add-post">Add a post</Link>
            <Link to="/option"> {state.currentUser.userName} <img className="profile" src={state.currentUser.profilePic} /> </Link>
        </header>
    )
}

export default Header
