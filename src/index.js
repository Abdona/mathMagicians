import React from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css';
import MyCalculator from './components/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <MyCalculator />
  </React.StrictMode>,
  document.getElementById('root'),
);
