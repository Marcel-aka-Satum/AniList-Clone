import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeCard = ({ imgUrl, title }) => {
  return (
    <Link href="/anime/[id]" as={`/anime/${title}`}>
      <div className="anime-card">
        <Image src={imgUrl} alt="Anime" height={200} width={200} />
        <h1 className="font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default AnimeCard;
