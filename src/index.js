// import ReactDOM from "react-dom"
// import App from "./App"
// import './Index.css'

// ReactDOM.render(<App/>, document.querySelector('#root'))


import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

