import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StyleGlobal} from './styles/global';


const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <StyleGlobal />
    <App />
  </React.StrictMode>
);
