//This file explains how state object is being used in class components //Chapter - 10

//To explain state, the usecase is -> Let's say we have a message "Welcome Jana" on UI, now with the click of a subscribe button
//the message should be changed to "Thank you for subscribing"
//In this use case, if we pass down the message "Welcome Jana" as a prop to this "ExplainState" child component then this message
//will be immutable as props are immutable. So here to achieve this gole we have to use state object of component.

import React from "react";

class ExplainState extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Jana",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default ExplainState;
