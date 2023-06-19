import { fetchAllPostsMessages } from "./api-adapters";
import { useEffect, useState } from "react";

const Inbox = (aaa) => {
  const postId = aaa.id;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await fetchAllPostsMessages();
        setPosts(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const username = localStorage.getItem("username");

  // Filter out messages not sent by the user
    // .flatMap returns a single new array, for easier filtering   
  const filteredMessages = posts.flatMap((post) =>
    post.messages.filter((message) => message.fromUser.username !== username)
  );

  return (
    <>
      <h2 className="pageName">Inbox</h2>

      {filteredMessages.length === 0 ? (
        <p>Inbox is empty</p>
      ) : (
        filteredMessages.map((message) => (
          <div key={message._id}>
            <p>From: {message.fromUser.username}</p>
            <p>Message: {message.content}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Inbox;
