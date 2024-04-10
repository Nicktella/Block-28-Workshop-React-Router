// Red.js
import React from 'react';

const redStyle = {
    backgroundColor: 'red',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    color: 'white'
};

export default function Red() {
    return (
        <div style={redStyle}>
            <h1>RED</h1>
        </div>
    );
}