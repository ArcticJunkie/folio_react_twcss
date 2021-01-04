import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import reportWebVitals from './reportWebVitals';

//components
import App from './components/App';
import Nav from './components/Nav'
import AdCopy from './components/AdCopy'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <AdCopy />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
