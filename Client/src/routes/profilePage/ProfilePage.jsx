import React from "react";
import "./profilePage.scss";
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";

function ProfilePage() {
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
              <img
                src="https://preview.redd.it/kiana-expy-in-hsr-v0-y6bbv4g8l8fc1.jpg?width=2048&format=pjpg&auto=webp&s=371a03eca7f0fc62721247b541c859ad680c9c9b"
                alt=""
              />
            </span>
            <span>
              UserName : <b>FireFly</b>
            </span>
            <span>
              E-Mail : <b>FireFly@gmail.com</b>
            </span>
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
