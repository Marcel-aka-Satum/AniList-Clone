"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AnimeCard = ({ imgUrl, title, id, userPage }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  const add_fav = async (animeObj) => {
    try {
      console.log(animeObj);
      const formData = new FormData();
      formData.append(
        "name",
        animeObj.title.english ? animeObj.title.english : animeObj.title.romaji
      );
      if (animeObj.image) {
        formData.append("image", animeObj.image);
      }
      const response = await fetch(
        `http://localhost:8000/api/favorite_anime/${user.id}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        console.log("Added to favorites");
      } else {
        console.error("Failed to add to favorites");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const add_watched = async (animeObj) => {
    try {
      const formData = new FormData();
      formData.append(
        "name",
        animeObj.title.english ? animeObj.title.english : animeObj.title.romaji
      );
      if (animeObj.image) {
        formData.append("image", animeObj.image);
      }
      const response = await fetch(
        `http://localhost:8000/api/watched_anime/${user.id}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        console.log("Added to watched");
      } else {
        console.error("Failed to add to watched");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="anime-card px-4 mr-5 w-[220px] h-[220px] flex flex-col items-center mb-20 mt-5">
      <Link
        href={`/anime/[id]/[title]`}
        as={`/anime/${id}/${title.english ? title.english : title.romaji}`}
      >
        <div>
          <img
            src={imgUrl}
            alt="Anime"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
            }}
          />
          <div className="title pt-1">
            <h1 className="font-bold">
              {title.length > 1 ? title.english : title.romaji}{" "}
              {/* If the title is longer than 1 character, display the english title, otherwise display the romaji title*/}
            </h1>
          </div>
        </div>
      </Link>
      {user && !userPage ? (
        <div className="buttons-container mt-2">
          <button
            onClick={() => add_fav({ title: title, image: imgUrl })}
            className="bottom-2 right-2 rounded-full p-1"
          >
            <FontAwesomeIcon className="text-red-500" icon={faHeart} />
          </button>
          <button
            className="bottom-2 right-2 rounded-full p-1 ml-2"
            onClick={() => add_watched({ title: title, image: imgUrl })}
          >
            Add to Watched
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default AnimeCard;
