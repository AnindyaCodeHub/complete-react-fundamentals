//Chapter - 29

import React, { Component } from "react";
import ChildClass from "./ChildClass";

class ParentClass extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <ChildClass ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ParentClass;
