//Chapter - 87

//This file explains that the use of React.memo() can be incorrect when we are dealing with impure components.

//In this case, the child component displays a time in the JSX which has to display the latest time of events which are
//going on the Parent component (Like the name is getting updated from Shubha to Anindya or the count value is getting
//increased). For this the Child component has to re-render whenever any action is performed in the Parent component though
//the props or state of Child component is not changing. So here if we use the React.memo then it will stop the Child
//component from being re-rendered as the Child component's prop or state is not changing. So here, using the React.memo
//is not correct.

import React from "react";

function Child({ name }) {
  const date = new Date();

  console.log("Child Render");

  return (
    <div>
      Child Component - Hello {name}. The latest change happened at{" "}
      {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  );
}

export default React.memo(Child);
