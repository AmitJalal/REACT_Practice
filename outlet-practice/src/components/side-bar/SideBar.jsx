import React from "react";
import "./sidebar.css";
const SideBar = ({ topAnimes }) => {
  return (
    <div className="side-bar">
      <h3 style={{ margin: "1.25em 0", textAlign:"center" }}>Top Rated</h3>
      <ul className="top-anime-list">
        {topAnimes.map((topAnime) => {
          return <li className="top-anime-list-li">{topAnime.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
