//Chapter - 42
//This file explains how to make a get request in React using axios library.

import React, { Component } from "react";
import axios from "axios";

class PostsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response?.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Error occurred while fetching the data!!!",
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        <h1>Posts List</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default PostsList;
