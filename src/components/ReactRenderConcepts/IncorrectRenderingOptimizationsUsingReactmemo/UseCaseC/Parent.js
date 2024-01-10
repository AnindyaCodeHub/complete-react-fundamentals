//Chapter - 88

//This file explains that the use of React.memo() to wrap a Child component can be incorrect when we are passing an
//object or a function as a prop to the Child component, as for object or function, always a new object or function
//refrence get's created whenever the Parent component re-renders and then that gets passed to the Child component.
//So, for child component always it's a new object or function which is getting passed though the object value or
//function implementation is the same.

//We have 2 solutions to the above problem.
//Solution 1: you can use the useMemo hook in the Parent component to memoize the person object and ensure that it
//only changes when necessary. By using useMemo, the person object will only be recreated when the dependencies in the
//dependency array change. In this case, since the dependency array is empty ([]), it will only be created once when the
//component mounts.
//If we are passing a function as a prop to the Child component then we can use useCallback with the function so that
//the function will only be recreated when the dependencies in the dependency array change. In this case, since the
//dependency array is empty ([]), it will only be created once when the component mounts.

//Solution 2: We can write a custom comparison logic and pass it as the second argument to React.memo in the Child
//component.
import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shubha");

  const person = useMemo(() => {
    return {
      fname: "Bruce",
      lname: "Wayne",
    };
  }, []);

  // const person = {
  //   fname: "Bruce",
  //   lname: "Wayne",
  // };

  // const handleClick = () => {
  // }

  const handleClick = useCallback(() => {}, []);

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Anindya")}>Name - {name}</button>
      <Child name={name} person={person} handleClick={handleClick} />
      {/* <Child name={name} person={person} handleClick={handleClick}/> */}
    </div>
  );
}

export default Parent;
