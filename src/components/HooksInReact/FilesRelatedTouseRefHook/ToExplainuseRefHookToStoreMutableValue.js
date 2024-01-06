//Chapter - 72

//This file explains how we can use the useRef hook to create a container which will store a mutable value.

//In the below code, instead of using the useRef identifier "intervalRef", if we would have used a simple variable, then we would
//not have been able to access that variable at line number 28 inside the onClick handler of the button tag, as that variable
//would have been accessible within the useEffect block only, due to the scope limitation.

import React, { useEffect, useRef, useState } from "react";

function ToExplainuseRefHookToStoreMutableValue() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default ToExplainuseRefHookToStoreMutableValue;

//Just to compare, we are implementing the above code using Class Component.

// import React, { Component } from "react";

// export class ClassTimer extends Component {
//   interval;
//   constructor(props) {
//     super(props);

//     this.state = {
//       timer: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState((prevState) => ({ timer: prevState.timer + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Class Timer - {this.state.timer}
//         <button onClick={() => clearInterval(this.interval)}>
//           Clear Class Timer
//         </button>
//       </div>
//     );
//   }
// }

// export default ClassTimer;
