import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <body>
      <div class="color-panel">
        <h1>Mixér barev</h1>
        <div class="sliders">
          <label for="red">Červená</label>
          <input
            type="range"
            class="slider slider--red"
            id="redSlider"
            min="0"
            max="255"
            value="0"
          />

          <label for="green">Zelená</label>
          <input
            type="range"
            class="slider slider--green"
            id="greenSlider"
            min="0"
            max="255"
            value="0"
          />

          <label for="blue">Modrá</label>
          <input
            type="range"
            class="slider slider--blue"
            id="blueSlider"
            min="0"
            max="255"
            value="0"
          />
        </div>
        <div class="color-box" id="color-box"></div>
      </div>
    </body>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
