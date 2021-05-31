import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output.css';
import reportWebVitals from './reportWebVitals';

//components
import Nav from './components/Nav'
import Landing from './components/Landing'
import Works from './components/Works'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Landing />
    <Works />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

