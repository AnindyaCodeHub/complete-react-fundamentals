//Chapter - 38, 39, 40

import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

export class ComponentE extends Component {
  static contextType = UserContext; //Public class field syntax. We can write this instead of line 19
  render() {
    return (
      <div>
        Component E context: {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
