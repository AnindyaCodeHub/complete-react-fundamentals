//This file explains how to use props in class components //Chapter - 9
import React from "react";

class SuperHero extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default SuperHero;
