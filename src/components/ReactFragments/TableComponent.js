//Chapter - 25
//There is one more better use case of React Fragments. For that we will create a this table component and a column component.
//Then we will return a table from the JSX of the table component. In this case, if we don't use <React.Fragment> tag
//in the column component, then we will observe a console warning message like below:
//"react-dom.development.js:86 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>."
//To get rid of the above warning message, we can use <React.Fragment> tag in ColumnComponent to enclose multiple tags with in
//the return method.

import React from "react";
import ColumnComponent from "./ColumnComponent";

function TableComponent() {
  return (
    <table>
      <tbody>
        <tr>
          <ColumnComponent />
        </tr>
      </tbody>
    </table>
  );
}

export default TableComponent;
