//Chapter - 86

//This file explains that the use of React.memo() can be incorrect when we are passing the children prop.

import React from "react";

function Child({ children, name }) {
  // Here the children prop that we are receiving, if this is a simple text node then React.memo()
  // Works as expected and this Child component does not re-render. But if the children prop is an element node then the React.memo()
  // does not work. In this case, the Child component will re-render. So in this scenario, using the React.memo() is pointless as it
  // does not stop the re-rendering and on top of that it will increase the rendering time by few milliseconds. So, there
  //is no point of wrapping the Child component with React.memo if the Child component itself has children elements.

  console.log("Child Render");

  return (
    <div>
      Child Component - {children} {name}
    </div>
  );
}

export default React.memo(Child);
