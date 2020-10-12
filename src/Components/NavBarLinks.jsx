import React from 'react';
import { Link } from 'react-router-dom';

function NavBarLinks() {
    return (
        <div className="App">
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/search">Search</Link>
        </div>
    );
}

export default NavBarLinks;


