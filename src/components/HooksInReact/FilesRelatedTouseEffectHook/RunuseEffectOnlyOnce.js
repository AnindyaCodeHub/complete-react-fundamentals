//Chapter - 52
//This file explains how we can run the useEffect() function only once in a component lifecycle.

//Below code line from 7 to 35 is written using class components. Here we are using componentDidMount() lifecycle method to run the
//side effect i.e adding the 'mousemove' event listener only once.

// import React, { Component } from "react";

// class RunSideEffectOnlyOnce extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       x: 0,
//       y: 0,
//     };
//   }

//   logMousePosition = (e) => {
//     this.setState({ x: e.clientX, y: e.clientY });
//   };
//   componentDidMount() {
//     window.addEventListener("mousemove", this.logMousePosition);
//   }

//   render() {
//     return (
//       <div>
//         X: {this.state.x} Y: {this.state.y}
//       </div>
//     );
//   }
// }

// export default RunSideEffectOnlyOnce;

//Below code line from 40 to 68 is written using functional components. Here we are using useEffect hook and passing an empty
//dependency array so that the useEffect hook get's called only once in the component lifecycle.

import React from "react";
import { useState, useEffect } from "react";

function RunuseEffectOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X: {x} Y: {y}
    </div>
  );
}

export default RunuseEffectOnlyOnce;
