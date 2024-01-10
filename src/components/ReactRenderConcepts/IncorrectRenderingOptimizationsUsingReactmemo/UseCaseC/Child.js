//Chapter - 88

//Here we can write a custom comparison logic (areEqual) and pass it as the second argument to React.memo in the Child
//component.

import React from "react";

// const areEqual = (prevProps, nextProps) => {
//   return (
//     prevProps.name === nextProps.name &&
//     prevProps.person.fname === nextProps.person.fname &&
//     prevProps.person.lname === nextProps.person.lname
//   );
// };

function Child({ name, person }) {
  console.log("Child Render");

  return (
    <div>
      Child Component - Hello {name}. The name object is {person.fname}{" "}
      {person.lname}
    </div>
  );
}

// export default React.memo(Child, areEqual);
export default React.memo(Child);
