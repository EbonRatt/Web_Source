import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./profilePage.scss";
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext.jsx";

function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser, UpdateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      UpdateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "/noP.png"} alt="Profile Pic" />
            </span>
            <span>
              UserName : <b>{currentUser.username}</b>
            </span>
            <span>
              E-Mail : <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <div>
            <List />
          </div>
          <div className="title">
            <h1>Save List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
