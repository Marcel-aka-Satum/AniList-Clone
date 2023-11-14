"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { trendingAnime } from "../api/trending";
import { AnimeCard } from "./imports";
import { popularAnime } from "../api/popular";
import { upcomingAnime } from "../api/upcoming";
import { popularAllTime } from "../api/popularAllTime";
import { top100AnimeFetch } from "../api/top100preview";
import Link from "next/link";
import { AnimeCardLine } from "./imports";

const SearchAnime = () => {
  const [trendingAnimeList, setTrendingAnimeList] = useState([]);
  const [popularThisSeason, setPopularThisSeason] = useState([]);
  const [upcomingNextSeason, setUpcomingNextSeason] = useState([]);
  const [allTimePopular, setAllTimePopular] = useState([]);
  const [top100Anime, setTop100Anime] = useState([]);

  const fetchAnime = async () => {
    const data = await trendingAnime();
    setTrendingAnimeList(data.data.Page.media);
  };

  const fetchPopular = async () => {
    const data = await popularAnime();
    setPopularThisSeason(data.data.Page.media);
  };

  const fetchUpcomingSeason = async () => {
    const data = await upcomingAnime();
    setUpcomingNextSeason(data.data.Page.media);
  };

  const fetchPopularAllTime = async () => {
    const data = await popularAllTime();
    setAllTimePopular(data.data.Page.media);
  };

  const fetchTop100Preview = async () => {
    const data = await top100AnimeFetch();
    setTop100Anime(data.data.Page.media);
  };

  useEffect(() => {
    fetchAnime();
    fetchPopular();
    fetchUpcomingSeason();
    fetchPopularAllTime();
    fetchTop100Preview();
  }, []);

  return (
    <div className="searchanime-wrapper py-20 overflow-auto">
      <div className="search-filters flex ">
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

      <div className="trending-now flex flex-col py-7 mb-12">
        <h1 className="text-2xl font-bold mb-3">TRENDING NOW</h1>
        <div className="anime-images flex">
          {trendingAnimeList && trendingAnimeList.length > 0 && (
            <>
              {trendingAnimeList.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  title={anime.title}
                  imgUrl={anime.coverImage.large}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="popular-this-season flex flex-col py-7 mb-12">
        <h1 className="text-2xl font-bold mb-3">POPULAR THIS SEASON</h1>
        <div className="anime-images flex">
          {popularThisSeason && popularThisSeason.length > 0 && (
            <>
              {popularThisSeason.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  title={anime.title}
                  imgUrl={anime.coverImage.large}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="upcoming-next-season flex flex-col py-7 mb-12">
        <h1 className="text-2xl font-bold mb-3">UPCOMING NEXT SEASON</h1>
        <div className="anime-images flex">
          {upcomingNextSeason && upcomingNextSeason.length > 0 && (
            <>
              {upcomingNextSeason.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  title={anime.title}
                  imgUrl={anime.coverImage.large}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="trending-now flex flex-col py-7 mb-12">
        <h1 className="text-2xl font-bold mb-3">ALL TIME POPULAR</h1>
        <div className="anime-images flex">
          {allTimePopular && allTimePopular.length > 0 && (
            <>
              {allTimePopular.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  title={anime.title}
                  imgUrl={anime.coverImage.large}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="top-100-anime pt-8">
        <div className="heading-top-100 flex">
          <h1 className="text-2xl font-bold flex-end justify-end">
            TOP 100 ANIME
          </h1>
          <Link href="/">
            <span>View all</span>
          </Link>
        </div>

        <div className="top-100-preview">
          {top100Anime && top100Anime.length > 0 && (
            <>
              {top100Anime.map((anime) => (
                <AnimeCardLine
                  key={anime.id}
                  title={anime.title}
                  imgurl={anime.coverImage.medium}
                  genres={anime.genres}
                  popularity={anime.averageScore}
                  type={anime.format}
                  season={anime.season}
                  finished={anime.status}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAnime;
