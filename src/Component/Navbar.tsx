import {NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import {MovieContext} from "../Context/ContextList";

export default function Navbar() {
    // @ts-ignore
    const [movieList, setMovieList] = useContext(MovieContext)
    const count = movieList.length;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link bi me-2" to="/">Movie List ({count})</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link bi me-2" to="/add-movie">Add Movie</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}