//Chapter - 25
//This file will explain how and why to use React Fragments.

import React from "react";

function ToExplainReactFragments() {
  //In the below return() function if we don't enclose the <h1> and <p> tag with in an enclosing <div> tag, then we will get
  //an error "JSX expressions must have one parent element." But this will add the enclosing <div> tag to the DOM as a node.
  //If we want to avoid this, then we can use <React.Fragment> tag in place of this <div> tag. In this way we won't get the
  //error and the <React.Fragment> tag won't be added as a node to the DOM as well.

  //There is one more better use case of React Fragments. For that we will create a table component and a column component.
  //Then we will return a table from the JSX of the table component. In this case, if we don't use <React.Fragment> tag
  //in the column component, then we will observe a console warning message. For the code, check Table component.
  return (
    <React.Fragment>
      <h1>React Fragments</h1>
      <p>This describes the React Fragment component</p>
    </React.Fragment>
  );
}

export default ToExplainReactFragments;
