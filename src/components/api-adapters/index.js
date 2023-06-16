const BASE_URL = "https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT";

// Fetch All Posts function
export const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const translatedData = await response.json();
    return translatedData.data.posts;
  } catch (error) {
    console.log(error);
  }
};

// Register User Function
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// User Login
export const loginRequest = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete Post
export const sendDeleteRequest = async (postId) => {
  try {
    const TOKEN_STRING_HERE = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Create Post
export const makePost = async (title, description, price, location) => {
  try {
    const TOKEN_STRING_HERE = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location
        }
      })
    });
  } catch (error) {
    console.log(error);
  }
};

// This sends Messages
export const sendMessage = async (messageContent, postId) => {
  const TOKEN_STRING_HERE = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        message: {
          content: messageContent
        }
      })
    });

    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// Fetch All Post Messages function
export const fetchAllPostsMessages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};
