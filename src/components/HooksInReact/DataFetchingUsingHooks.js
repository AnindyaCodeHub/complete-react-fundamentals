//Chapter - 55
//This file will explain how we can use useEffect hook to make an API call.

import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingUsingHooks() {
  const [posts, setPosts] = useState([]);

  //We need to pass an empty dependency array in the useEffect function as we want the effect to be applied only once during the
  //component lifecycle, i.e we want the data to be fetched only once.
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingUsingHooks;
