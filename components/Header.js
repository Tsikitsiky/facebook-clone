import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../Context';

function Header() {
    const {currentUser} = useContext(Context)
    return (
        <header>
            <Link to="/">OnjaBook</Link>
            <Link to="/">Feed</Link>
            <Link to="/add-post">Add a post</Link>
            <Link to="/option"> {currentUser.userName} <img className="profile" src={currentUser.profilePic} /> </Link>
        </header>
    )
}

export default Header
