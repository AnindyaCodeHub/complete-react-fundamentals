//This file explains the difference betwen controlled components and uncontrolled components.

import React, { useRef } from "react";

//Controlled Component (from line 7 to 26)

// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         value={this.state.value}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

//Uncontrolled Component (from line 30 to 46)

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Input value: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
