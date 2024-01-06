//Chapter - 38, 39, 40

//Below code lines from 5 to 20 are written using class components.

// import React, { Component } from "react";
// import { UserConsumer } from "./userContext";

// class ComponentF extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {(userName) => {
//           return <div>Hello {userName}</div>;
//         }}
//       </UserConsumer>
//     );
//   }
// }

// export default ComponentF;

//Below code lines from 24 to 37 are written using functional components.

import React from "react";
import { UserConsumer } from "./userContext";

function ComponentF() {
  return (
    <UserConsumer>
      {(userName) => {
        return <div>Hello {userName}</div>;
      }}
    </UserConsumer>
  );
}

export default ComponentF;
