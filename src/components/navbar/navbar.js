import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">My Profile </a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="#">Resume</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar