import Image from "next/image";
import React from "react";

const AnimeCardLine = ({
  imgurl,
  title,
  genres,
  popularity,
  type,
  season,
  finished,
}) => {
  return (
    <div className="anime-card-line border border-red-500 flex text-white relative">
      <div className="image-card-line">
        <Image
          src={imgurl}
          alt={title.english}
          width={100}
          height={100}
          className="h-fit w-fit my-4 mx-4"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="title-card-line border border-yellow-400">
        {title.english}
      </div>
      <div className="genres-card-line border border-pink-400 absolute">
        genre 1 genre 2
      </div>

      <div className="stats-card-line">
        <div className="percentage">90%</div>
        <div className="type">Movie</div>
        <div className="season">Winter</div>
      </div>
    </div>
  );
};

export default AnimeCardLine;
