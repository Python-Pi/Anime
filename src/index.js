import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';
import "../src/style.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/Anime'>
      <App />
    </Router>
  </React.StrictMode>
);
