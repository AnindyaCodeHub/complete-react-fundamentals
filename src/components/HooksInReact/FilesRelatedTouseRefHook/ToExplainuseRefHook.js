//Chapter - 71

//This file explains how to use the useRef hook to access the DOM nodes directly within the functional components.
//Here the requirement is to have the input textbox focused (i.e the cursor should be there in the input textbox) on the page load.

import React, { useEffect, useRef } from "react";

function ToExplainuseRefHook() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default ToExplainuseRefHook;
