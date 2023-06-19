import React, { useState, useEffect } from "react";
import { fetchAllPosts, sendDeleteRequest } from "./api-adapters";
import SendMessage from "./SendMessage";
import { Link } from "react-router-dom";


function PostsList() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');

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
  
      <h2 className="pageName">All Posts</h2>

      {/* SearchBar & Create Post */}
      <div className="searchAndCreate">

      <form>
        <label style={{ fontWeight: 'bold' }} htmlFor="search-query">Search by Item: </label>
        <input id="searchBox"
          name="search-query"
          type="text"
          placeholder="Item Name"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </form>

      {token && 
        (<Link id="createPostButton" to="/new-post">Create Post</Link>
      )}

      </div>

      {/* Checks array length. Maps over each item in FilteredItems */}
      <div className="allPosts">

      {filteredItems.length ? (
        filteredItems.map((singlePost) => {
          const authorUsername = singlePost.author
            ? singlePost.author.username
            : <p>Loading...</p>;

          const isCurrentUserPost = username === authorUsername;

          return (

            <div id="single-post-container" key={singlePost._id}>
              <p id="username">Username: {authorUsername}</p>
              <p id="item" style={{ fontWeight: 'bold' }}>Item: {singlePost.title}</p>
              <p id="description">Description: {singlePost.description}</p>
              <p id="price">Price: {singlePost.price}</p>
              <p id="location">Location: {singlePost.location}</p>
              <p id="id">id: {singlePost._id}</p>

              {/* Current User != to the Post Author, then show component */}
              {!isCurrentUserPost && username && <SendMessage id={singlePost._id} />}

              {/* This checks if the above variable is truthy */}
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

      </div>
    </>
  );
}

export default PostsList;