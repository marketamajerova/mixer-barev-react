import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider';

const App = () => {

  const [redValue, setRedValue] = useState('0');
  const [greenValue, setGreenValue] = useState('0');
  const [blueValue, setBlueValue] = useState('0');

  return (
    <body>
      <div className="color-panel">
        <h1>Mixér barev</h1>
        <div className="sliders">
          <ColorSlider baseColor="red" colorName="Červená" onValueChange={setRedValue}/>
          <ColorSlider baseColor="green" colorName="Zelená" onValueChange={setGreenValue}/>
          <ColorSlider baseColor="blue" colorName="Modrá" onValueChange={setBlueValue}/>
        </div>
        <div className="color-box"
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
