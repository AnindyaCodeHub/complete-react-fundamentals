//Chapter - 28
//This file explains how to use a Ref in class component.

import React, { Component } from "react";

class ToExplainRefs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    //Line 13 to 17 are for callBack Refs
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus(); //callBack Ref approach
    }

    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.cbRef.value); //callBack Ref approach

    // alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef} /> */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default ToExplainRefs;
