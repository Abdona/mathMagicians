/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function MyCalculator() {
  let num = '';
  const [screen, setScreen] = useState(num);
  const [total, setTotal] = useState();
  const [next, setNext] = useState();
  const [operation, setOperation] = useState();
  const state = { total, next, operation };
  const calchandler = (e) => {
    if (e.target.innerText === 'AC') {
      num = '';
      const { total, next, operation } = calculate(state, e.target.innerText);
      setScreen(num);
      setTotal(total);
      setNext(next);
      setOperation(operation);
    } else if (e.target.id === 'eqoperation') {
      const { total, next, operation } = calculate(state, e.target.innerText);
      setScreen(total);
      setTotal(total);
      setNext(next);
      setOperation(operation);
      num = total;
    } else if (e.target.innerText === '+/-') {
      const { total, next, operation } = calculate(state, e.target.innerText);
      setScreen(next || total);
      setTotal(total);
      setNext(next);
      setOperation(operation);
      num = next || total;
    } else {
      setScreen((prevscreen) => setScreen(prevscreen + e.target.innerText));
      const { total, next, operation } = calculate(state, e.target.innerText);
      setTotal((prevTotal) => total || prevTotal);
      setNext(next);
      setOperation((prevOper) => operation || prevOper);
    }
  };

  return (
    <div className="grid-continer">
      <input className="resultscreen" readOnly placeholder={screen} />
      <button onClick={calchandler}>AC</button>
      <button onClick={calchandler}>+/-</button>
      <button onClick={calchandler}>%</button>
      <button onClick={calchandler} className="buttoperation">÷</button>
      <button onClick={calchandler}>7</button>
      <button onClick={calchandler}>8</button>
      <button onClick={calchandler}>9</button>
      <button onClick={calchandler} className="buttoperation">x</button>
      <button onClick={calchandler}>4</button>
      <button onClick={calchandler}>5</button>
      <button onClick={calchandler}>6</button>
      <button onClick={calchandler} className="buttoperation">-</button>
      <button onClick={calchandler}>1</button>
      <button onClick={calchandler}>2</button>
      <button onClick={calchandler}>3</button>
      <button onClick={calchandler} className="buttoperation">+</button>
      <button onClick={calchandler} className="zeroitem">0</button>
      <button onClick={calchandler}>.</button>
      <button onClick={calchandler} id="eqoperation" className="buttoperation">=</button>
    </div>
  );
}
