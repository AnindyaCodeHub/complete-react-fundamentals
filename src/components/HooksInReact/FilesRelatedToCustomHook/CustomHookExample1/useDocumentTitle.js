//Chapter - 74

//Here we have created a custom hook "useDocumentTitle" and used this hook in "DocTitleOne.js" and "DocTitleTwo.js" files.

import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
