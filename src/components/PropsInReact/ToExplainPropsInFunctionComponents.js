//This file explains props in React JS //Chapter - 9
import React from "react";

const SuperHero = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default SuperHero;
