//This is a regular component.
import React, { Component } from "react";

class RegularComponentClass extends Component {
  render() {
    console.log("Regular Component Render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegularComponentClass;
