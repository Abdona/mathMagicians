import React from 'react';

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return <button type="button">{this.state}</button>;
  }
}
