//Chapter - 26
//This file will work as a parent component, where two childern components will be there. Out of which one will be pure component
//and the other one will be regular component.

//Please note, to explain memo (what pure component do in class components, memo does the same thing in functional components)
//we are using this ToExplainPureComponents as a parent component and ToExplainMemo will work as a child component.

import React, { Component } from "react";
import PureComponentClass from "./PureComponent";
import RegularComponentClass from "./RegularComponentClass";
import ToExplainMemo from "../ReactMemo/ToExplainMemo";

class ToExplainPureComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jana",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jana",
      });
    }, 2000);
  }

  render() {
    console.log(
      "***************************Parent Component Render***************************"
    );
    return (
      <div>
        Parent Component
        {/* <RegularComponentClass name={this.state.name} />
        <PureComponentClass name={this.state.name} /> */}

        <ToExplainMemo name={this.state.name} />
      </div>
    );
  }
}

export default ToExplainPureComponents;
