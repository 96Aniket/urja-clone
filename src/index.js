import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from './component/home';
import { Form } from '../src/view/Career';
import { Network } from  '../src/view/Presence';
import Card from '../src/component/Products/Products';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      
    },
    {
      path:'/Career',
      element:<Form/>,
    },
    {
      path:'/Presence',
      element:<Network/>
    },
    {
      path:'/Card',
      element:<Card/>
    }
    
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

