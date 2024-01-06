//Chapter - 51
//This file explains how to conditionally run the useEffect hook.

//Requirement: We need to update the document title to show the current counter value. We also need to have a input field where
//user will enter some text input.

//Below code lines from 11 to 50 are written using class components. Here we are using two different lifecycle methods
//(componentDidMount() and componentDidUpdate()) to achieve our requirement, and conditionally executing the code inside
//componentDidUpdate() method.

// import React, { Component } from "react";

// class ConditionallyRunSideEffects extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       name: "",
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log("Updating document title");
//       document.title = `Clicked ${this.state.count} times`;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={(e) => this.setState({ name: e.target.value })}
//         />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default ConditionallyRunSideEffects;

//Below code lines from 56 to 79 are written using functional components. Here we are using the useEffect hook which is doing the same
//thing that we were doing using the componentDidMount() and componentDidUpdate() methods in class component. Here also we are
//conditionally applying the effect. Only when the "count" is going to change then only the effect will be applied.

import React from "react";
import { useState, useEffect } from "react";

function ConditionallyRunuseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ConditionallyRunuseEffect;
