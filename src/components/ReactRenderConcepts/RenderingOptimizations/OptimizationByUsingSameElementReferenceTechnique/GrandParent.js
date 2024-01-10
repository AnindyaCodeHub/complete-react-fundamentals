//Chapter - 83

//This file explains "If a component is rendering because of a props change then the Child component would also have to be
//re-rendered"

//Here we will pass a prop to the Parent component which will change in this component i.e the GrandParent component. Now as
//the props which is passed to the Parent component has changed, it will re-render and along with it the Child component will
//also re-render though we passed the Child component as a prop to the Parent Component not as a nested Component in JSX.

//In this scenario, when GrandParent changes it's state, it causes a re-render of the GrandParent component. This in turn will
//cause the OptParent component to re-render. React now knows that OptParent component is not re-rendering because of it's own
//state change, but rather because of the GrandParent component re-rendering. That means, the props of the OptParent component
//could have changed. So, React will proceed with the render phase for the Child component but ofcourse ignores the render phase
//output and does not commit it to the DOM.

import React, { useState } from "react";
import OptParent from "./OptParent";
import Child from "./Child";

function GrandParent() {
  const [newCount, setNewCount] = useState(0);

  return (
    <div>
      <button onClick={() => setNewCount((prevCount) => prevCount + 1)}>
        Grand Parent Count - {newCount}
      </button>
      <OptParent newCount={newCount}>
        <Child />
      </OptParent>
    </div>
  );
}

export default GrandParent;
