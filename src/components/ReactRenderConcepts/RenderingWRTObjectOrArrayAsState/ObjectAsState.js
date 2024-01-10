//Chapter - 81

//This file explains how state immutability effects the component re-rendering in react. The rendering behavior is similar for
//useState and useReducer.

import React, { useState } from "react";

const initialState = {
  fname: "Bruce",
  lname: "Wayne",
};

function ObjectAsState() {
  const [person, setPerson] = useState(initialState);

  const changePerson = () => {
    //The below 3 lines of code (from 21 to 23) won't work, i.e by the below 3 lines of code you can't change the person's name
    //and update the new name on UI. This is because of the Object.is() algorithm that react uses to compare the difference
    //between the react elements of current render to the previous render.

    // person.fname = "Clark";
    // person.lname = "Kent";
    // setPerson(person);

    //As a solution to this, you need to create a copy of the existing state, modify as necessary and then pass the new state to
    //the setter function or while returning from a reducer function.

    const newPerson = { ...person };
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";

    setPerson(newPerson);
  };

  console.log('Component rendering when using "Object" as state');

  return (
    <div>
      <button onClick={changePerson}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
}

export default ObjectAsState;
