//This file explains how to bind event handlers in class components //Chapter - 14

//Binding of event handlers is necessary because of the way how 'this' keyword behaves in JS. It's not a React feature.

import React from "react";

class ExplainEventBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Jana",
    };

    // this.changeMessage = this.changeMessage.bind(this)
  }

  //   changeMessage() {
  //     this.setState({
  //       message: "Thank you for clicking",
  //     });
  //   }

  changeMessage = () => {
    this.setState({
      message: "Thank you for clicking",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage.bind(this)}>Click Me</button> ----> (1) In this approach, we are using the bind keyword and binding the handler in the render() mehod */}
        {/* <button onClick={() => this.changeMessage()}>Click Me</button> ----> (2) In this approach, we are using the arrow function in the render() method to bind the event handler */}
        {/* <button onClick={this.changeMessage}>Click Me</button> ----> (3) In this approach, we are binding the event handler in the constructor and not in the render() method */}
        {/* <button onClick={this.changeMessage}>Click Me</button> ----> (4) In this approach, we are using arrow function as a class property */}
        {/* (3) and (4) are the best approaches. Use whatever you are confortable with */}

        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    );
  }
}

export default ExplainEventBinding;
