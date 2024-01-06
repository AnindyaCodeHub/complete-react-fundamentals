//Chapter - 48
//This file explains how to use arrays as a state variable and then use the useState hook's setter method to modify, merge and
//update.

import React, { useState } from "react";

function ToExplainusestateHookWithArray() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number to the list</button>
      <h2>The numbers present in the list are as below:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToExplainusestateHookWithArray;
