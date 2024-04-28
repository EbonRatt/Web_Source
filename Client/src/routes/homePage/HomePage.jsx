import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            ស្វែងរកអចលនទ្រព្យ និងទទួលបានកន្លែងក្នុងសុបិន្តរបស់អ្នក
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sed
            ipsum, nostrum odio, minima vitae delectus eius cupiditate quos
            maiores quibusdam consequatur voluptas fugit at enim praesentium qui
            tenetur omnis?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
