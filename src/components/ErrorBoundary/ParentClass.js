import React, { Component } from "react";
import ChildClass from "./ChildClass";
import ErrorBoundary from "./ErrorBoundary";

class ParentClass extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ChildClass heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ChildClass heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ChildClass heroName="Jocker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ParentClass;
