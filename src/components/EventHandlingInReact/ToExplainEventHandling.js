//Event handling in functional componenets //Chapter - 13
import React from "react";

function EventHandling() {
  function eventHandler() {
    console.log("Button Clicked in functional component.");
  }

  return (
    <div>
      <button onClick={eventHandler}>Click Me</button>
    </div>
  );
}

export default EventHandling;

//..............................................................

//Event handling in class components

// import React, { Component } from "react";

// class EventHandling extends Component {
//   eventHandler() {
//     console.log("Button Clicked in class component.");
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.eventHandler}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default EventHandling;
