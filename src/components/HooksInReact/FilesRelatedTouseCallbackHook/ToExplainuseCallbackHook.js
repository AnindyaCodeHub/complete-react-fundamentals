//Chapter - 69
//This file explains how to use the useCallback hook

// import React, { useCallback, useState } from "react";
// import Title from "./Title";
// import Count from "./Count";
// import Button from "./Button";

// function ToExplainuseCallbackHook() {
//   const [age, setAge] = useState(25);
//   const [salary, setSalary] = useState(50000);

//   const incrementAge = useCallback(() => {
//     setAge(age + 1);
//   }, [age]);

//   const incrementSalary = useCallback(() => {
//     setSalary(salary + 1000);
//   }, [salary]);

//   return (
//     <div>
//       <Title />
//       <Count text="Age" count={age} />
//       <Button handleClick={incrementAge}> Increment Age </Button>
//       <Count text="Salary" count={salary} />
//       <Button handleClick={incrementSalary}> Increment Salary </Button>
//     </div>
//   );
// }

// export default ToExplainuseCallbackHook;

//what will happen if we do not provide a dependency array (neither empty nor with specific dependencies) in useCallback hook?

//If you do not provide a dependency array (neither empty nor with specific dependencies) in useCallback, then it will be 
//initialized during every render so new function references will be created on every render. This behavior is similar to not
//using useCallback at all.

//Here's an example:

// import React, { useCallback, useState } from "react";
// import Count from "./Count";
// import Button from "./Button";

// function ExampleComponent() {
//   const [age, setAge] = useState(25);

//   const incrementAge = useCallback(() => {
//     setAge(age + 1);
//   }); // No dependency array provided

//   return (
//     <div>
//       <Count text="Age" count={age} />
//       <Button handleClick={incrementAge}> Increment Age </Button>
//     </div>
//   );
// }

// export default ExampleComponent;

//In the above example, incrementAge will be created on every render. So this behaviour is similar to not using useCallback at all.

//what will happen if we provide an empty dependency array i.e [] in useCallback hook?

import React, { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";

function ExampleComponent() {
  const [age, setAge] = useState(25);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, []); // Empty dependency array provided

  return (
    <div>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}> Increment Age </Button>
    </div>
  );
}

export default ExampleComponent;

//In this example, incrementAge will be created once when the component mounts, and it will always reference the initial values
//of variables from its enclosing scope. If you click the "Increment Age" button, it will increment the age, but subsequent calls
//to setAge will always use the initial value of age captured by the callback.

//In summary, not providing a dependency array or providing an empty dependency array in useCallback results in the callback
//being created only once and not depending on any specific values from the component's state or props. This can be appropriate
//for certain scenarios where you want to ensure that the callback is consistent across renders. However, it's essential to be
//aware of potential issues related to closures capturing stale values, especially if your callback depends on variables that
//may change.
