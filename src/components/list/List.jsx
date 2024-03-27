import React, { useRef, useState } from "react";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const List = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoving(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber((prev) => prev - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 8) {
      setSliderNumber((prev) => prev + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoving && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>
          <ListItem index={12}/>
          <ListItem index={13}/>
          <ListItem index={14}/>
          <ListItem index={15}/>
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
