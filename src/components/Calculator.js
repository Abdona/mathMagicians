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
  const [total, setTotal] = useState();
  const [next, setNext] = useState();
  const [operator, setOperator] = useState();
  const state = {total, next, operator };
  const calchandler = (e) => {
    if (e.target.innerText === 'AC') {
      num = '';
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: 0, total, next, operation,
      });
    } else if (e.target.id === 'eqoperation') {
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: total, total, next, operation,
      });
      num = total;
    } else if (e.target.innerText === '+/-') {
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: next || total, total, next, operation,
      });
      num = next || total;
    } else {
      num += e.target.innerText;
      this.setState({ screen: num, ...calculate(this.state, e.target.innerText) });
    }
  };

  return (
    <div className="grid-continer">
      <input className="resultscreen" readOnly placeholder={this.state.screen} />
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
