/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.num = '';
    this.value = 0;
    this.state = {
      screen: 0, total: 0, next: 0, operation: '',
    };
    this.calchandler = this.calchandler.bind(this);
  }

  calchandler(e) {
    // if (e.target.innerText === 'AC') {
    //   // this.value = 0;
    //   // this.num = '';
    //   const { total, next, operation } = calculate(this.state, e.target.innerText);
    //   // alert(total);
    //   this.setState({
    //     screen: 0, total, next, operation,
    //   });
    // } else {
    //   // this.num += e.target.innerText;
    //   const { total, next, operation } = calculate(this.state, e.target.innerText);
    //   alert(total);
    //   // this.value = total;
    //   // alert(this.value);
    //   this.setState({
    //     screen: this.num, total, next, operation,
    //   });
    // }
    if (e.target.innerText === 'AC') {
      this.num = '';
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: 0, total, next, operation,
      });
    } else if (e.target.id === 'eqoperation') {
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: total, total, next, operation,
      });
      this.num = total;
      // alert(this.state.total);
    } else {
      this.num += e.target.innerText;
      this.setState({ screen: this.num, ...calculate(this.state, e.target.innerText) });
      // alert(this.state.total);
    }
  }

  render() {
    return (
      <div className="grid-continer">
        <input className="resultscreen" readOnly placeholder={this.state.screen} />
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
        <button onClick={this.calchandler} id="eqoperation" className="buttoperation">=</button>
      </div>
    );
  }
}
