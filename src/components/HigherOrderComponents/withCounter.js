//Chapter - 34

import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  //Here we are passing two parameters to the withCounter function,
  //the first one is the originalComponent and the second one is the number by which I want to increment the value of count.
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} //This line is important, as by doing this we enable passing down of props to the wrapped component
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// import React, { useState } from "react";

// const withCounter = (WrappedComponent, incrementNumber) => {
//   // Here we define a functional component instead of a class component
//   const WithCounter = (props) => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//       setCount((prevCount) => prevCount + incrementNumber);
//     };

//     return (
//       <WrappedComponent
//         count={count}
//         incrementCount={incrementCount}
//         {...props} // This line is important, as by doing this we enable passing down of props to the wrapped component
//       />
//     );
//   };
//   return WithCounter;
// };

// export default withCounter;
