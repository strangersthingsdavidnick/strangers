import React, { useState, useEffect } from "react";
import { fetchAllPosts, sendDeleteRequest } from "./api-adapters";
import SendMessage from "./SendMessage";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state variable
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await fetchAllPosts();
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      await sendDeleteRequest(postId);
      const updatedPosts = await fetchAllPosts();
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  let filteredItems = posts.filter((singlePost) => {
    let lowercasedTitle = singlePost.title ? singlePost.title.toLowerCase() : "";
    let lowercasedQuery = searchQuery.toLowerCase();

    return lowercasedTitle.includes(lowercasedQuery);
  });

  return (
    <>
      <h2>All Posts</h2>

      <form>
        <label htmlFor="search-query">Search by Item: </label>
        <input
          name="search-query"
          type="text"
          placeholder="Item Name"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </form>

      {filteredItems.length ? (
        filteredItems.map((singlePost) => {
          const authorUsername = singlePost.author
            ? singlePost.author.username
            : <p>Loading...</p>;

          const isCurrentUserPost = username === authorUsername;

          return (
            <div className="single-post-container" key={singlePost._id}>
              <p id="username">Username: {authorUsername}</p>
              <p id="item">Item: {singlePost.title}</p>
              <p id="description">Description: {singlePost.description}</p>
              <p id="price">Price: {singlePost.price}</p>
              <p id="location">Location: {singlePost.location}</p>
              <p id="id">id: {singlePost._id}</p>

              <SendMessage id={singlePost._id} />

              {isCurrentUserPost && (
                <button onClick={() => deletePost(singlePost._id)}>
                  Delete Post
                </button>
              )}
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default PostsList;