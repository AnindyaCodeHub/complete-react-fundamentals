//Chapter -23
//This file explains the "Component Mounting, updating Lifecycle Methods". To explain this, there will be two components.
//One is the Parent Component and other one is the Child Component.
import React, { Component } from "react";

class LifeCycleChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jana",
    };
    console.log("ChildComponent constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ChildComponent getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ChildComponent componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("ChildComponent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ChildComponent getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ChildComponent componentDidUpdate");
  }

  render() {
    console.log("ChildComponent render");
    return (
      <div>
        <h1>LifeCycle of Child Component</h1>
      </div>
    );
  }
}

export default LifeCycleChildComponent;
