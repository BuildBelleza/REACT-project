import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
// import  ApiCall  from './components/job.jsx';


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// store.dispatch(('ApiCall'));


root.render(
  <StrictMode>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
   
  </StrictMode>
);