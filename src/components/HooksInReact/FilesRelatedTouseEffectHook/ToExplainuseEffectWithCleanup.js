//Chapter - 53
//This file explains how we can write the cleanup code using useEffect hook. This cleanup code should run only when the component
//unmounts. In class components this can be done using componentWillUnmount() lifecycle hook method. So we can say, using useEffct
//hook in functional component, we are doing the same work which can be done using class component's componentWillUnmount()
//lifecycle method. For the code implementation, please see the code for "RunuseEffectOnlyOnce" component. In this file we are
//mounting and unmounting the "RunuseEffectOnlyOnce" component based on a toggle button.

import React, { useState } from "react";
import RunuseEffectOnlyOnce from "./RunuseEffectOnlyOnce";

function ToExplainuseEffectWithCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <RunuseEffectOnlyOnce />}
    </div>
  );
}

export default ToExplainuseEffectWithCleanup;
