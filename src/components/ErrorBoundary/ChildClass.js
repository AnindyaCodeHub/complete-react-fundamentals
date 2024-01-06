import React from "react";

function ChildClass({ heroName }) {
  if (heroName === "Jocker") {
    throw new Error("Not a hero!!!");
  }
  return <div>{heroName}</div>;
}

export default ChildClass;
