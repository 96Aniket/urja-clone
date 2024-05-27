import React from 'react';
import ReactDOM from 'react-dom/client';
import img2 from '../image/solar.jpg';
import img from '../image/windmil.png';

import Catelogue from '../Components/Catalogue/Catelogue';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Catelogue img1={img2} img2={img}/>
  
);


