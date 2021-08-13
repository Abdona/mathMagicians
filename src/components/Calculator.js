/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: 0, operation: '' };
  }

  render() {
    return (
      <div className="grid-continer">
        <input className="resultscreen" readOnly placeholder={this.state.total} />
        <button onClick={this.calchandler}>AC</button>
        <button onClick={this.calchandler}>+/-</button>
        <button onClick={this.calchandler}>%</button>
        <button onClick={this.calchandler} className="buttoperation">/</button>
        <button onClick={this.calchandler}>7</button>
        <button onClick={this.calchandler}>8</button>
        <button onClick={this.calchandler}>9</button>
        <button onClick={this.calchandler} className="buttoperation">x</button>
        <button onClick={this.calchandler}>4</button>
        <button onClick={this.calchandler}>5</button>
        <button onClick={this.calchandler}>6</button>
        <button onClick={this.calchandler} className="buttoperation">-</button>
        <button onClick={this.calchandler}>1</button>
        <button onClick={this.calchandler}>2</button>
        <button onClick={this.calchandler}>3</button>
        <button onClick={this.calchandler} className="buttoperation">+</button>
        <button onClick={this.calchandler} className="zeroitem">0</button>
        <button onClick={this.calchandler}>.</button>
        <button onClick={this.calchandler} className="buttoperation">=</button>
      </div>
    );
  }
}
