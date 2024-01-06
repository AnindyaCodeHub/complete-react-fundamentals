//Chapter - 47
//This file explains how to use object as a state variable and then use the useState hook's setter method to modify and update
//the state variable.
//NOTE: In line number 19 and 24, we have used the spread operator to manually merge the updated property and the existing
//property of the state object i.e "name" in the below example. In case of Class Components, the setState() method automatically
//does this. So when using setState() method in Class Components, we can only modify the required property and the setState()
//method will automatically merge the updated property and the existing property. But in case of useState hook in Functional
//Components, we need to manually handle the merge, so we need to use the spread operator here.

import React, { useState } from "react";

function ToExplainuseStateHookWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is: {name.firstName}</h2>
      <h2>Your last name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default ToExplainuseStateHookWithObject;
