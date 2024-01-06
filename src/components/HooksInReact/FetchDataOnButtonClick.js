//Chapter - 57
//This file will explain how we can use useEffect hook to make an API call on a button click.

import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchDataOnButtonClick() {
  const [post, setPost] = useState([]);

  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response.data);
        setPost(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const clickHandler = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>Fetch post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default FetchDataOnButtonClick;
