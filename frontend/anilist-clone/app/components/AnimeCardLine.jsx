import Image from "next/image";
import React from "react";

// function to get contrast color for text based on background color
function getContrastColor(bgColor) {
  const rgb = bgColor.match(/\d+/g); // extract r, g, b values
  const brightness =
    (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
  return brightness > 128 ? "black" : "white"; // return black if brightness is high, else white
}

const AnimeCardLine = ({
  imgurl,
  title,
  genres,
  popularity,
  type,
  season,
  finished,
  imgColor,
}) => {
  return (
    <div className="anime-card-line border border-red-500 flex mb-6 h-32  ">
      <div className="wrapper my-4 mx-4 grid grid-cols-8 grid-rows-4 border border-green-500 bg-[#172235] w-full">
        <div className="image col-start-2 row-start-2 col-end-3 row-end-4 relative">
          <Image
            src={imgurl}
            alt={title}
            className="w-full h-full"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="title col-start-3 row-start-2 col-end-6 row-end-3 mb-2 ">
          <a
            href="/"
            className="w-full h-full pb-3 bg-transparent font-semibold"
          >
            {title.english}
          </a>
        </div>

        <div className="genres col-start-3 row-start-3 col-end-7 row-end-5 flex flex-wrap">
          {genres.map((genre) => (
            <button
              className={`mr-2 mb-1 py-1 px-2 rounded-full`}
              style={{
                backgroundColor: imgColor,
                color: "black",
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="stats col-start-6 row-start-3 col-end-9 row-end-5 flex ml-7">
          <div className="percentage mr-4">90%</div>
          <div className="type mr-4">Movie</div>
          <div className="season">Winter 2021</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCardLine;
