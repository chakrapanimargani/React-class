import React, { Component } from 'react';

export default class SelectBox extends React.Component {
  constructor(props) {
      super(props);
      /* set the initial checkboxState to true */
      this.state = {
        checkboxState: true
      }
    }

  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
    console.log("status:",this.state.checkboxState);
  }
  render() {
    const checkedOrNot = [];
    checkedOrNot.push(
      <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
    );
    const checkbox = (
      <span>
        <input 
        type="checkbox"
        onClick={this.toggle.bind(this)}
        />
        <label>Playing</label>
      </span>
    );

    return (
      <div>
        <form>
          {checkbox}          
        </form>
        {checkedOrNot}
      </div>
    );
  }
}