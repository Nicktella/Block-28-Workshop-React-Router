import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/green">Green</Link>
            <Link to="/yellow">Yellow</Link>
        </div>
    );
}

export default Footer;