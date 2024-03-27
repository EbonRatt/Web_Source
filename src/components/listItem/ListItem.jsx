import {
  Add,
  PlayCircle,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const triller = "https://www.youtube.com/embed/wDv_oMJXZow";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.animemesse.de/img/uploads/program/4af094cc63d84ad81ee3ed4646707b5f_Hello-World.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <iframe src={triller}></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayCircle />
              <Add />
              <ThumbUpOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              dolorem omnis enim sit cum rerum vitae molestiae sapiente animi
              illo eos eaque laboriosam modi ab dolor praesentium beatae quae
              laudantium.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
