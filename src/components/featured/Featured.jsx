import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://www.bhmpics.com/downloads/1920x1080-wallpaper-anime-/18.cyber-anime-girl-4k-9g-1920x1080.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://w0.peakpx.com/wallpaper/286/479/HD-wallpaper-suzume-no-tojimari-suzume-no-tojimari-2023-movies-netflix-animated-movies-anime-movies.jpg"
          alt=""
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat
          perferendis dicta doloremque? Doloremque, ea, nostrum atque dolorem
          illum perferendis dolorum odio magni maxime asperiores esse laborum,
          illo officia iste!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
