import React, { Component } from 'react';
import './style/Header__MenuStyle.css';

export class Header__Menu extends Component {
    render() {
        return (
            <nav className="header__menu">
                <a>About</a>
                <a>Business</a>
                <a>Blog</a>
                <button className="menu__button">
                    Log in
                </button>
                <button>
                    Sign Up
                </button>
            </nav>
        )
    }
}

export default Header__Menu;
