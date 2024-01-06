//Chapter - 50
//This file explains how to use useEffect hook and by using this how can we avoid the problems that occurs due to the use of
//class component lifecycle methods.

//Requirement: We need to update the document title to show the current counter value.

//Below code line from 10 to 40 is done using class components. Here we are writing same code (document.title = `Clicked ${this.state.count} times`;)
//in two different lifecycle methods (componentDidMount() and componentDidUpdate()) to achieve our requirement.

// import React, { Component } from "react";

// class ToExplainsideEffects extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default ToExplainsideEffects;

//Below code line from 45 to 61 is done using functional components. Here we are using the useEffect hook which is doing the same
//thing that we were doing using the componentDidMount() and componentDidUpdate() methods in class component.

import React from "react";
import { useState, useEffect } from "react";

function ToExplainuseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ToExplainuseEffectHook;
