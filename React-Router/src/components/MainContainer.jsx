import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Green from './Green';
import Yellow from './Yellow';

const MainContainer = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/green" element={<Green />} />
                <Route path="/yellow" element={<Yellow />} />
            </Routes>
        </div>
    );
}

export default MainContainer;