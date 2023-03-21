import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider';

const App = () => {

  const [redValue, setRedValue] = useState('55');
  const [greenValue, setGreenValue] = useState('184');
  const [blueValue, setBlueValue] = useState('195');


  return (
    <body>
      <div class="color-panel">
        <h1>Mixér barev</h1>
        <div class="sliders">
          <ColorSlider baseColor="red" colorName="Červená" />
          <ColorSlider baseColor="green" colorName="Zelená" />
          <ColorSlider baseColor="blue" colorName="Modrá" />
        </div>
        <div class="color-box"
          id="color-box"
          style={{backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`}}>
        </div>
      </div>
    </body>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
