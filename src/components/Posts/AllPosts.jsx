import { Link } from "react-router-dom";

function PostsList (props) {
    console.log(props.allPosts)
    return(
        <>


        <div>
        <h2>All Posts</h2>

        {props.allPosts.length ? (
          props.allPosts.map((singlePost) => {
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