import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const ColorSlider = ({baseColor, colorName, onValueChange}) => {
    return (
        <>
            <label htmlFor={baseColor}>{colorName}</label>
                <input
                    type="range"
                    className={`slider slider--${baseColor}`}
                    id={`${baseColor}Slider`}
                    min="0"
                    max="255"
                    defaultValue="0"
                    onChange = {(e) => onValueChange(e.target.value)}
                />
        </>
    )
}

export default ColorSlider;