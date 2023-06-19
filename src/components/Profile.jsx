import React from 'react';

const Profile = () => {
  return (
    <>
      <h2 className="pageName">Profile</h2>
      <div>
        Logged in as:  {localStorage.getItem("username")}
      </div>

    

    </>
  );
};

export default Profile;