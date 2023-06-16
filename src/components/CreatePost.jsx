import { useEffect, useState } from "react";
import { makePost } from "./api-adapters";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate =useNavigate();
  const [newPost, setNewPost] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newLocation, setNewLocation] = useState("");

  // This runs when submit is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await makePost(newTitle, newDesc, newPrice, newLocation);
      navigate('/')
      setNewPost(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const submitPost = async () => {
      try {
        const result = await makePost(newTitle, newDesc, newPrice, newLocation);
        setNewPost(result);
      } catch (error) {
        console.log(error);
      }
    };
    submitPost();
  }, []);

  return (
    <>
      <p>New Post</p>
      <div className="newPostForm">
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label htmlFor="title">Title: </label>
          <input
            name="newTitle"
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          />

          {/* Description */}
          <label htmlFor="newPostDesc">Description: </label>
          <input
            name="newPostDesc"
            type="text"
            placeholder="Description"
            value={newDesc}
            onChange={(event) => {
              setNewDesc(event.target.value);
            }}
          />

          {/* Price */}
          <label htmlFor="newPrice">Price: </label>
          <input
            name="newPrice"
            type="text"
            placeholder="$0.00"
            value={newPrice}
            onChange={(event) => {
              setNewPrice(event.target.value);
            }}
          />

          {/* Location */}
          <label htmlFor="newLocation">Location: </label>
          <input
            name="newLocation"
            type="text"
            placeholder="Location"
            value={newLocation}
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;