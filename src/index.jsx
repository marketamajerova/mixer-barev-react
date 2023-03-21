import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider';

const App = () => {

  const [redValue, setRedValue] = useState('');
  const [greenValue, setGreenValue] = useState('');
  const [blueValue, setBlueValue] = useState('');


  return (
    <body>
      <div class="color-panel">
        <h1>Mixér barev</h1>
        <div class="sliders">
          <ColorSlider baseColor="red" colorName="Červená"/>
          <ColorSlider baseColor="green" colorName="Zelená"/>
          <ColorSlider baseColor="blue" colorName="Modrá"/>

          {/* <label for="green">Zelená</label>
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
          /> */}
        </div>
        <div class="color-box" id="color-box" style={{backgroundColor: "blue"}}></div>
      </div>
    </body>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
