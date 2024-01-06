//Lecture - 16
//PRO TIP: Always stick to the 3rd or 4th approach to conditionally render UI.
import React, { Component } from "react";

class ToExplainConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    //Approach (1): Using if/else block:
    //Point to note, we can't use the if/else statement inside the JSX. Because, JSX is only the syntactic suger for function calls
    //and object construction. So, we have to use the if/else statement outside the JSX and the entire return() statement containing
    //the JSX should be placed inside the if or else block.

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Jana</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //Approach (2): Using element variables:

    //     let message;
    //     if (this.state.isLoggedIn) {
    //       message = <div>Welcome Jana</div>;
    //     } else {
    //       message = <div>Welcome Guest</div>;
    //     }
    //     return <div>{message}</div>;

    //Approach (3): Ternary conditional operator:

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Jana</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Approach (4): Short circuit operator: This approach is a special case of the Ternary conditional operator approach.
    //When you want to render something or nothing based on a condition, then you use the short circuit operator.
    //In the below line we have used the short circuit operator i.e "&&". So, it will evaluate this.state.isLoggedIn and if it
    //is true, then only it will evaluate and return the JSX <div>Welcome Jana</div>, otherwise it won't return anything so
    //nothing will be rendered on the UI.
    return this.state.isLoggedIn && <div>Welcome Jana</div>

  }
}

export default ToExplainConditionalRendering;
