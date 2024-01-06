//Chapter - 11
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //If we implement the increment function as below, then the updated count will not be reflected on the UI, as here we are directly
  //modifying the state object. So, this is not correct.
  // increment() {
  //   this.state.count = this.state.count + 1
  //   console.log(this.state.count)
  // }

  //If we implement the increment function as below, then the updated count will be reflected on the UI, as here we are using the
  //setState() method to modify the state object. So, this is correct.
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   }, ()=> {
  //     console.log("Inside the callback function of setState method: ", this.state.count)
  //   });
  //   //console.log(this.state.count) //This console statement will not log the correct value. It will be one value behind. Because,
  //   //call to the setState() method is asynchronous, so this log statement will be executed and later the setState() method may
  //   //get called. So, to avoid this problem, we can use the 2nd argument of the setState() method which is a callback function, and
  //   //whatever code has to be executed after the state object has been changed, we can place inside that callback (arrow) function.
  // }

  //Let's say we call the increment function 5 times in the below function. Now it should update the value of count by 5.
  //To do this we now have to change the implementation of increment function. Now we can't directly modify the state object
  //inside the setState() method, we have to pass an arrow functoin inside the setState() method to modify the state object.
  //Directly modifying the state object inside setState() method will not give approriate results when the setState() method is
  //getting called multiple times (as we are doing in this example inside incrementFive() method) because react may group
  //multiple setState() calls into a single update for better performance. So what happens in our example of incrementFive()
  //method is that, all the five setState() calls are done in one single go and the updated value does not carry over between
  //the different calls. So as a solution to this, whenever we have to update the state based on the previous state, we need to
  //pass a function as an argument to setState() method instead of passing in an object.

  increment() {
    this.setState((prevState) => ({
      //If we want to use some props then we can do that by passing the props as a second argument
      //to the arrow function, like (prevState, props), and then we can use the props down below,like
      count: prevState.count + 1, //prevState.count + props.valueToIncrementBy
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={() => this.incrementFive()}>Increment by five</button>
      </div>
    );
  }
}

export default Counter;
