//Chapter - 54
//This file explains how important it is to define the correct dependency array for a useEffect.

//Below code lines from 7 to 33 are written using class components. Here we are using two lifecycle methods [componentDidMount()
//and componentWillUnmount()].
//
// import React, { Component } from "react";

// export class IntervalClassCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   tick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }

// export default IntervalClassCounter;

//Below code lines from 50 to 71 are written using functional components. To do the same work that we were doing in the above
//code (written with class component), here we are using the useEffect hook.

//NOTE: Please note that, here we need to carefully construct the dependency array of useEffect function. DON'T THINK THAT
//DEPENDENCY ARRAY IS A WAY TO SPECIFY WHEN TO RE-RUN THE EFFECT, INSTEAD THINK THAT, IT'S A WAY TO LET REACT KNOW ABOUT
//EVERYTHING THAT THE EFFECT MUST WATCH FOR. In this case, the effect should watch for changes in the value of count. So, we
//have to pass count as a dependency.

//If we don't pass 'count' as a dependency, still there is a way to make the functionlity work. In this scenario, we need to
//change the implementation of setCount() method inside the tick() method. Now, we need to pass a function inside the setCount()
//method, which will take the previous count value as an argument. Please see the implementation below:
// const tick = () => {
//   setCount((prevCount) => prevCount + 1);
// };

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function IntervaluseEffectCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log("inside tick");
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("inside useEffect");
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      {console.log("inside return")}
      <h1>{count}</h1>
    </>
  );
}

export default IntervaluseEffectCounter;
