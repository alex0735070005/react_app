import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <header>
            <ul className="container">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;