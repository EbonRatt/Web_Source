import React from "react";
import Card from "../Card/Card.jsx";
import { listData } from "../../lib/dummy.js";
import "./list.scss";

function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
}

export default List;
