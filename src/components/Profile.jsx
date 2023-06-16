import React from 'react';

const Profile = () => {
  return (
    <>

      <div>
        Welcome {localStorage.getItem("username")} !
      </div>

    

    </>
  );
};

export default Profile;