import React from "react";
import "./watch.scss";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import ReactPlayer from "react-player";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosNewOutlined />
        Home
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=TXBQwoWL7L8"
        controls="true"
        height="99vh"
        width="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Watch;
