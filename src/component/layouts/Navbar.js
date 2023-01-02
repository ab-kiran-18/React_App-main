import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <a className="navbar-brand m-3 mt-0 mb-0" href="#">
                    <b>SHIELD</b>
                </a>
                <button className="navbar-toggler "
                    type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
            <Link className="btn btn-outline-light col-2 m-4 mt-0 mb-0" to="/users/add">Add Avenger</Link>
        </nav>

    )
};


export default Navbar;