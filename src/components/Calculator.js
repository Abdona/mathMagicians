/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React from 'react';
import calculate from '../logic/calculate';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.screenString = 0;
    this.state = { total: this.screenString, next: '', operation: '' };
    this.calchandler = this.calchandler.bind(this);
  }

  // buttonhandler(e) {
  //   this.screenString += e.target.innerText;
  //   this.setState({ total: this.screenString });
  // }

  calchandler(e) {
    this.setState(calculate(this.state, e.target.innerText));
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
