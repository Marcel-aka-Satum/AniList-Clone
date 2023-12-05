"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AnimeCard = ({ imgUrl, title, id }) => {
  return (
    <Link
      href={`/anime/[id]/[title]`}
      as={`/anime/${id}/${title.english ? title.english : title.romaji}`}
    >
      <div className="anime-card px-4 mr-5 w-[220px] h-[220px]">
        <Image
          src={imgUrl}
          alt="Anime"
          width={250}
          height={250}
          objectFit="cover"
        />
        <div className="title pt-1">
          <h1 className="font-bold">
            {title.length > 1 ? title.english : title.romaji}{" "}
            {/* If the title is longer than 1 character, display the english title, otherwise display the romaji title*/}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
