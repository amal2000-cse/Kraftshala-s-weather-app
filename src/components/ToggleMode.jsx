// src/components/ToggleMode.jsx
import React from 'react';

const ToggleMode = ({ onToggle }) => {
    return (
        <button onClick={onToggle}>Toggle Dark Mode</button>
    );
};

export default ToggleMode;
