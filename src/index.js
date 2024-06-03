import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import routes from './Routes';
import { RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={routes}/>
);

