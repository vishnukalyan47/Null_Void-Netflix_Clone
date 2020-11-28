import React from 'react'
import "./Nav.css";
import nav_logo from './nav_logo.ico';
function Nav() {
    return (
        <div className="nav">
            <img className="nav__logo"
            src={nav_logo}
            alt="NullVoid Logo"
            
            />
            <button className="nav__avatar">
                Request Movie
            </button>
            
        </div>
    )
}

export default Nav
