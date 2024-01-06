//Chapter - 70

//This file explains how to use useMemo hook in react.

import React, { useMemo, useState } from "react";

function ToExplainuseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>{" "}
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default ToExplainuseMemoHook;

//what will happen if we provide empty dependency array i.e [] for useMemo hook?

//When you provide an empty dependency array ([]) for the useMemo hook, it means that the memoized value will be computed only
//once when the component is initially rendered. Subsequent re-renders will reuse the memoized value without recomputing it,
//regardless of whether any dependencies change.

//Here's an example:

// import React, { useMemo, useState } from "react";

// function ExampleComponent() {
//   const [value, setValue] = useState(10);

//   // Memoized result will be computed once and reused in subsequent renders
//   const memoizedResult = useMemo(() => {
//     console.log("Memoized computation");
//     return value * 2;
//   }, []); // Empty dependency array

//   return (
//     <div>
//       <p>Memoized Result: {memoizedResult}</p>
//       <button onClick={() => setValue(value + 1)}>Increment Value</button>
//     </div>
//   );
// }

// export default ExampleComponent;

//In the above example:

//The memoizedResult will be computed once when the component mounts because of the empty dependency array.
//The console.log("Memoized computation") statement will be executed only during the initial render.
//Subsequent renders caused by state or prop changes will reuse the memoized value without recomputing it.
//Using an empty dependency array is appropriate when you want to memoize a value that doesn't depend on any variables from the
//component's state or props. It ensures that the memoized value remains constant across renders, which can be useful for
//preventing unnecessary computations.

//Keep in mind that if your memoized value depends on specific variables, it's crucial to include them in the dependency array
//to ensure that the memoized value is recomputed when those dependencies change. Omitting dependencies from the array could lead
//to unexpected behavior and stale values.

//what will happen if we do not provide a dependency array in useMemo hook?

//If you do not provide a dependency array in the useMemo hook, it means that the memoized value will be computed during every
//render. This behavior is similar to not using useMemo at all.

//Here's an example:

// import React, { useMemo, useState } from "react";

// function ExampleComponent() {
//   const [value, setValue] = useState(10);

//   // Memoized result will be computed during every render
//   const memoizedResult = useMemo(() => {
//     console.log("Memoized computation");
//     return value * 2;
//   });

//   return (
//     <div>
//       <p>Memoized Result: {memoizedResult}</p>
//       <button onClick={() => setValue(value + 1)}>Increment Value</button>
//     </div>
//   );
// }

// export default ExampleComponent;

//In the above example:

//The memoizedResult will be computed during every render, including the initial render and subsequent renders caused by state
//or prop changes.
//The console.log("Memoized computation") statement will be executed during every render.
//Using useMemo without a dependency array can be appropriate when the memoized value does not depend on any variables from the
//component's state or props, and you want it to be recomputed on every render.

//However, keep in mind that if your memoized value depends on specific variables, it's generally a good practice to include them
//in the dependency array to ensure that the memoized value is recomputed only when those dependencies change. This helps
//optimize performance by avoiding unnecessary computations during renders when dependencies remain unchanged.
