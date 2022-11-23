import React, { useEffect, useState } from "react";
import "./main.css";
import SideBar from "../../components/side-bar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  const [animes, setAnimes] = useState(" ");
  const [topAnimes, setTopAnimes] = useState([]);

  const getAnime = async () => {
    const animes = await fetch("https://api.jikan.moe/v4/anime");
    const anime = await animes.json();
    console.log(anime.data);
    setAnimes(anime.data);
  };

  const getTopAnime = async () => {
    const animes = await fetch("https://api.jikan.moe/v4/anime");
    const anime = await animes.json();

    setTopAnimes(anime.data.splice(9, 8));
  };

  useEffect(() => {
    getAnime();
    getTopAnime();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <SideBar topAnimes={topAnimes} />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
