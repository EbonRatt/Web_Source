import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="https://images8.alphacoders.com/134/1346618.jpeg" alt="" />
          <span>Ruan Mei</span>
          <p>Lorem ipsum, dolor sit amet consectetur...</p>
        </div>
        <div className="message">
          <img
            src="https://images.theconversation.com/files/193819/original/file-20171108-14177-a1lv3m.png?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
            alt=""
          />
          <span>Adolf Hitler</span>
          <p>Lorem ipsum, dolor sit amet consectetur...</p>
        </div>
        <div className="message">
          <img
            src="https://64.media.tumblr.com/6d689c578db2c48d69d610e698673c18/e3dd5c6c8e4c58c7-ca/s540x810/a0728da245cfff73cc010b3cd0653f931112c63b.png"
            alt=""
          />
          <span>MC Male</span>
          <p>Lorem ipsum, dolor sit amet consectetur...</p>
        </div>
        <div className="message">
          <img
            src="https://cdn.donmai.us/sample/8a/22/__trailblazer_stelle_and_herta_honkai_and_1_more_drawn_by_sofra__sample-8a2248f2076693fc4e548d771d0f1060.jpg"
            alt=""
          />
          <span>MC Female</span>
          <p>Lorem ipsum, dolor sit amet consectetur...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://i.pinimg.com/474x/ed/4b/ae/ed4bae24b5d195525400feb011f246ee.jpg"
                alt=""
              />
              Big Smoke
            </div>
            <span
              className="close"
              onClick={() => {
                setChat(null);
              }}
            >
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
