//Chapter - 81

//This file explains how state immutability effects the component re-rendering in react. The rendering behavior is similar for
//useState and useReducer.

import React, { useState } from "react";

const initialState = ["Bruce", "Diana"];

function ArrayAsState() {
  const [persons, setPersons] = useState(initialState);

  const changePerson = () => {
    //The below 2 lines of code (18 and 19) won't work, i.e by the below 2 lines of code you can't push the new person's name
    //and update the list of names on UI. This is because of the Object.is() algorithm that react uses to compare the difference
    //between the react elements of current render to the previous render.

    // persons.push("Clark");
    // setPersons(persons);

    //As a solution to this, you need to create a copy of the existing state, modify as necessary and then pass the new state to
    //the setter function or while returning from a reducer function.

    const newPersons = [...persons];
    newPersons.push("Clark");
    setPersons(newPersons);
  };

  console.log('Component rendering when using "Object" as state');

  return (
    <div>
      <button onClick={changePerson}>Click To Update</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
}

export default ArrayAsState;
