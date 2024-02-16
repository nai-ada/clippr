import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={headerStyle}>
            <Logo />
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <NavLink to="/" style={anchorStyle}>Home</NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/about" style={anchorStyle}>About</NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/favourites" style={anchorStyle}>Favourites</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    ); 
}

const Logo = () => {
    return (
        <div style={logoStyle}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Clippr</h1>
            </a>
        </div>
    )
}

// Define inline styles
const headerStyle = {
    backgroundColor: '#333',
    padding: '10px',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center', 
};

const navStyle = {
    flex: '1', 
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end', 
};

const anchorStyle = {
    color: 'white',
    textDecoration: 'none', 
    margin: '0 10px', 
};

const liStyle = {
    margin: '0',
};

const logoStyle = {
    fontSize: '12px',
    textTransform: 'uppercase',
    padding: '0',
    margin: '0',
    textAlign: 'left',
};

export default Header;




