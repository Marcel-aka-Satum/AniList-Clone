"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AnimeCard = ({ imgUrl, title }) => {
  return (
    <Link href="/anime/[id]" as={`/anime/${title}`}>
      <div className="anime-card px-4 w-[250px] h-[250px]">
        <Image
          src={imgUrl}
          alt="Anime"
          width={250}
          height={250}
          objectFit="cover"
        />
        <div className="title pt-1">
          <h1 className="font-bold">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
