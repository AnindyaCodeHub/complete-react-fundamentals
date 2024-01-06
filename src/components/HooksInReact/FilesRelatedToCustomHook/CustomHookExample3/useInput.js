//Chapter - 76

//Here we have created a custom hook called "useInput" and used this in "UserForm.js" file.

import { useState } from "react";

function useInput(initialText) {
  const [value, setValue] = useState(initialText);

  const resetValue = () => {
    setValue(initialText);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, resetValue];
}

export default useInput;
