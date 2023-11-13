"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { trendingAnime } from "../api/trending";
import { AnimeCard } from "./imports";

const SearchAnime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await trendingAnime();
      setAnime(data.data.Page.media);
    };
    fetchAnime();
  }, []);

  return (
    <div className="searchanime-wrapper py-20">
      <div className="search-filters flex">
        <div className="search-filters__title mr-7">
          <h1 className="p-2">Search</h1>
          <div className="search-wrap inline-flex items-center bg-[#122b4a] ">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for an anime"
              className="bg-[#122b4a] p-1 h-full w-full"
            />
          </div>
        </div>
        <div className="search-filters__genres mr-7">
          <h1 className="p-2">Genres</h1>
          <div className="search-wrap inline-flex items-center bg-[#122b4a] ">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for an anime"
              className="bg-[#122b4a] p-1 h-full w-full"
            />
          </div>
        </div>
        <div className="search-filters__season mr-7">
          <h1 className="p-2">Year</h1>
          <div className="search-wrap inline-flex items-center bg-[#122b4a] ">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for an anime"
              className="bg-[#122b4a] p-1 h-full w-full"
            />
          </div>
        </div>
        <div className="search-filters__year mr-7">
          <h1 className="p-2">Season</h1>
          <div className="search-wrap inline-flex items-center bg-[#122b4a] ">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for an anime"
              className="bg-[#122b4a] p-1 h-full w-full"
            />
          </div>
        </div>
        <div className="search-filters__sort">
          <h1 className="p-2">Format</h1>
          <div className="search-wrap inline-flex items-center bg-[#122b4a] ">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for an anime"
              className="bg-[#122b4a] p-1 h-full w-full"
            />
          </div>
        </div>
      </div>
      {/* <AnimeCard anime={anime.coverImage} tilte={anime.title} /> */}
    </div>
  );
};

export default SearchAnime;
