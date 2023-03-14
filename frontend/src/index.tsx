// @ts-ignore 
import React from 'react';
// @ts-ignore 
import ReactDOM from 'react-dom/client';
// @ts-ignore 
import { BrowserRouter } from 'react-router-dom';

import './index.css';
// @ts-ignore 
import App from './App';
// @ts-ignore 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

