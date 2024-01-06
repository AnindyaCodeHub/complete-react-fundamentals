//Chapter - 66, 67
//This file explains how we can use useReducer and useEffect hooks to fetch data from API.

//For comparing how useState and useReducer hooks are used to manage state in a component, we will implement the solution first
//using usestate and useEffect hooks then we will implement the same solution using useReducer and useEffect hooks.

//Solution using useState and useEffect Hoooks:
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function FetchDataUsinguseStateAnduseEffectHooks() {
//   const [loading, setLoading] = useState(true);
//   const [post, setPost] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         setLoading(false);
//         setPost(response?.data);
//         setErrorMessage("");
//       })
//       .catch((error) => {
//         setLoading(false);
//         setPost({});
//         setErrorMessage("Error occurred while fetching the data!!!");
//       });
//   }, []);

//   return (
//     <div>
//       {loading ? "loading" : post.title}
//       {errorMessage ? errorMessage : null}
//     </div>
//   );
// }

// export default FetchDataUsinguseStateAnduseEffectHooks;

//Solution using useReducer and useEffect Hoooks:

import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  post: {},
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        errorMessage: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        errorMessage: "Error occurred while fetching the data!!!",
      };
    default:
      return state;
  }
};

function FetchDataUsinguseReducerAnduseEffectHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.errorMessage ? state.errorMessage : null}
    </div>
  );
}

export default FetchDataUsinguseReducerAnduseEffectHooks;
