import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/clippr-home">Home</Link></li>
                <li><Link to="/clippr-about">About</Link></li>
                <li><Link to="/clippr-favourites">Favourites</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;