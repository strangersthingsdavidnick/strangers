import { Link } from "react-router-dom";
import { useEffect } from "react";
import auth from "./auth";

function PostsList ({setAllPosts, BASE_URL, allPosts}) {
   
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

    return(
        <>


        <div>
        <h2>All Posts</h2>

        {allPosts.length ? (
          allPosts.map((singlePost) => {
            return (
              <div className="single-post-container" key={singlePost._id}>
                <p id="username">Username: {singlePost.author.username}</p>
                <p id="item">Item: {singlePost.title}</p>
                <p id="description">Description: {singlePost.description}</p>
                <p id="price">Price: {singlePost.price}</p>
                <p id="location">Location: {singlePost.location}</p>
              </div>
            );
          })
        ) : (
          <p>Loading ...</p>
        )}

      </div>

        
        </>

    )
}

export default PostsList;