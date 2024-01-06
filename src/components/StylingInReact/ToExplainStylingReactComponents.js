//Lecture - 20
//This file will explain 3 ways of styling a react component.

import React from "react";
import "./MyStyle.css";
import styles from "./MyStyle.module.css";
import ChildComponent from "./ChildComponent";

function ToExplainStylingReactComponents() {
  //   const inlineStyle = {
  //     color: "blue",
  //     fontSize: "72px",
  //   };

  return (
    //(1): Using CSS StyleSheets
    // <div>
    //   <h1 className={`primary font-xl`}>React Component Styling</h1>
    // </div>

    //(2): Using Inline Styling
    // <div>
    //   <h1 style={inlineStyle}>React Component Styling</h1>
    // </div>

    //(3): Using CSS Modules
    //Benifits of using CSS Modules over normal CSS styleSheets is that, the CSS classes of CSS Modules are locally scoped.
    //So, these CSS classes won't be applied to the child components of the element where I am using the CSS class. But
    //in case of normal CSS styleSheets, it will be applied to the child components as well.
    //In the below example we can see, in the line number 32, we are using CSS styleSheet's CSS class i.e 'primary' and it's also
    //getting applied to the ChildComponent. But the CSS class defiled in CSS Module i.e 'success' is not getting applied to the
    //ChildComponent element as it's locally scoped. This is because, we can access the CSS Module classes only by the import
    //variable name that we have defined in this component i.e 'styles' in this case.
    <div>
      <h1 className="primary">React Component Styling</h1>
      <h1 className={styles.success}>React Component Styling</h1>
      <ChildComponent />
    </div>
  );
}

export default ToExplainStylingReactComponents;
