import React, { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    min: 0,
    max: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="MaxPrice"
          min={0}
          max={100000000}
          placeholder="Max Price"
        />
        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
