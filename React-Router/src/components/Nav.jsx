import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: "flex", gap: "8px" }}>
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/green">Green</Link>
            <Link to="/yellow">Yellow</Link>
        </nav>
    );
}

export default Navbar;