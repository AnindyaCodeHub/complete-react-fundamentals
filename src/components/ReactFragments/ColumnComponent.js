import React from "react";

function ColumnComponent() {
  // const items = []; //Let's assume we have an array of objects in the "items" identifier. Now, while iterating over this array,
  //we can use <React.Fragment> tag, to enclose other tags like <h1> and <p> in this case. Here as we can see, we can pass the key
  //attribute into the <React.Fragment> tag. This is the only attribute that we can pass into the <React.Fragment> tag.
  //As a short cut of <React.Fragment> tag, we can pass an empty opening and closing tag like <> </> to enclose other elements in
  //JSX. But one limitation is there. We can not pass the "key" attribute with an empty opening tag i.e <>.
  return (
    <React.Fragment>
      {/* {items.map((item) => {
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>;
      })} */}
      <td>Name</td>
      <td>Jana</td>
    </React.Fragment>
  );
}

export default ColumnComponent;
