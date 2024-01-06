//Chapter -23
//This file explains the "Component Mounting, updating Lifecycle Methods". To explain this, there will be two components.
//One is the Parent Component and other one is the Child Component.
import React, { Component } from "react";
import LifeCycleChildComponent from "./LifeCycleChildComponent";

class LifeCycleParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jana",
    };
    console.log("ParentComponent constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ParentComponent getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ParentComponent componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("ParentComponent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ParentComponent getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ParentComponent componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Shubha",
    });
  };

  render() {
    console.log("ParentComponent render");
    return (
      <div>
        <h1>LifeCycle of Parent Component</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleChildComponent />
      </div>
    );
  }
}

export default LifeCycleParentComponent;
