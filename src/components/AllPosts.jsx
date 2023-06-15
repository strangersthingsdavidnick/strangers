import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SendMessage from "./SendMessage";

function PostsList({ setAllPosts, BASE_URL, allPosts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const currentUsername = localStorage.getItem("currentUsername");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const translatedData = await response.json();
        setAllPosts(translatedData.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);

      // The list updates after delete is pressed
      if (response.ok) {
        setAllPosts(allPosts.filter((post) => post._id !== postId));
      }
    } catch (err) {
      console.error(err);
    }
  };

  let filteredItems = allPosts.filter((singlePost) => {
    let lowercasedTitle = singlePost.title ? singlePost.title.toLowerCase() : "";
    let lowercasedQuery = searchQuery.toLowerCase();

    return lowercasedTitle.includes(lowercasedQuery);
  });

  return (
    <div>
      <div>
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

        {token && <Link to="/newpost">Create Post</Link>}
      </div>

      {filteredItems.length ? (
        filteredItems.map((singlePost) => {
          const authorUsername = singlePost.author
            ? singlePost.author.username
            : <p>Loading...</p>;

          const isCurrentUserPost = currentUsername === authorUsername;

          return (
            <div className="single-post-container" key={singlePost._id}>
              <p id="username">Username: {authorUsername}</p>
              <p id="item">Item: {singlePost.title}</p>
              <p id="description">Description: {singlePost.description}</p>
              <p id="price">Price: {singlePost.price}</p>
              <p id="location">Location: {singlePost.location}</p>
              <p id="id">id: {singlePost._id}</p>

              {!isCurrentUserPost && token && (
                <SendMessage BASE_URL={BASE_URL} />
              )}

              {isCurrentUserPost && token && (
                <button onClick={() => deletePost(singlePost._id)}>
                  Delete Post
                </button>
              )}
            </div>
          );
        })
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default PostsList;
