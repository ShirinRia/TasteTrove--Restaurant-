import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {

  RouterProvider
} from "react-router-dom";
import Routes from './Routes/Routes';
import Provider from './Provider/Provider';

// import Provider from './Provider/Provider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={Routes} />
    </div>
    </Provider>
    </HelmetProvider>

  </React.StrictMode>,
)
