import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import Green from './components/Green';
import Yellow from './components/Yellow';
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="section red">
          <Link to="/red" className="logo">Red Logo</Link>
        </div>
        <div className="section blue">
          <Link to="/blue" className="logo">Blue Logo</Link>
        </div>
        <div className="section green">
          <Link to="/green" className="logo">Green Logo</Link>
        </div>
        <div className="section yellow">
          <Link to="/yellow" className="logo">Yellow Logo</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </>
  );
}

export default App;