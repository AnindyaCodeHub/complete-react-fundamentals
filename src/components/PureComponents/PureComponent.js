//This is a pure component.
import React, { PureComponent } from "react";

class PureComponentClass extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComponentClass;
