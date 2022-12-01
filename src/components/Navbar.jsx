import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar container">
                <div className="nav-Title">
                    <span className="title">Contact App</span>
                </div>
                <div className="nav-item-container">
                    <ul className="nav-main-menu">
                        <li className="nav-list-item">
                            <NavLink className="nav-item-list" to="/">Home</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-item-list" to="/Add">Add Contact</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-item-list" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
