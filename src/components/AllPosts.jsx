import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import auth from "./auth";
import CreatePost from "./CreatePost";

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

          <div>
        <h2>All Posts</h2>

        <Link to="/newpost" element={CreatePost}>Create Post</Link>       

        </div>

        {allPosts.length ? (
          allPosts.map((singlePost) => {
            console.log(singlePost.author.username)
            return (
              <div className="single-post-container" key={singlePost._id}>
                <p id="username">Username: {singlePost.author.username}</p>
                <p id="item">Item: {singlePost.title}</p>
                <p id="description">Description: {singlePost.description}</p>
                <p id="price">Price: {singlePost.price}</p>
                <p id="location">Location: {singlePost.location}</p>
              
                
                  <button>Delete Post</button>
                
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