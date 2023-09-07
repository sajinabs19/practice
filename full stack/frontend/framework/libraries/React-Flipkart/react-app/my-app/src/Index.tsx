import reportWebVitals from './reportWebVitals';
 import { App } from './App';
 import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
 //const root = ReactDOM.createRoot(
   //document.getElementById('root') as HTMLElement
   const element = document.getElementById('root');
   const root = createRoot(element!);
  

 root.render(
   <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
   </React.StrictMode>
 );
 