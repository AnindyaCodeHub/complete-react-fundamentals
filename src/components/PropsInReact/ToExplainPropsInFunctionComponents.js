//This file explains props in React JS //Chapter - 9
import React from "react";

const SuperHero = (props) => {
  const {name, heroName} = props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default SuperHero;
