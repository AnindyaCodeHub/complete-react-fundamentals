//Chapter - 36, 37

import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default ClickCounter;
