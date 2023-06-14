import { React } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreatePost({ BASE_URL, allPosts, setAllPosts }) {
  const navigate = useNavigate();
  const makePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          post: {
            title: `${document.getElementById("newTitle").value}`,
            description: `${document.getElementById("newDesc").value}`,
            price: `${document.getElementById("newPrice").value}`,
            location: `${document.getElementById("newLocation").value}`,
          },
        }),
      });
      const result = await response.json();
      console.log(result);

      setAllPosts([...allPosts, result]);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="new-post-container">
        <p>
          Title:
          <input id="newTitle" type="text" placeholder="Title" />
        </p>

        <p>
          Description:
          <input id="newDesc" type="text" placeholder="Description" />
        </p>

        <p>
          Price:
          <input id="newPrice" type="text" placeholder="$0.00" />
        </p>

        <p>
          Location
          <input id="newLocation" type="text" placeholder="Location" />
        </p>

        <button onClick={goBack}>Go Back</button>
        <button onClick={makePost} id="newPostSubmit">
          submit
        </button>
      </div>
    </>
  );
}

export default CreatePost;
