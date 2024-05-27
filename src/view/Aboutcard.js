 import React from 'react';
import ReactDOM from 'react-dom/client';
import img2 from '../image/solar.jpg';
import img from '../image/windmil.png';

import About from '../Components/About/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <About img1={img2} img2={img}/>
  
);


