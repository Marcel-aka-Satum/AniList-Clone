import Image from "next/image";

const AnimeCardLine = ({
  imgurl,
  title,
  genres,
  imgColor,
  season,
  finished,
  format,
  duration,
  idx,
  popularity2,
  avgScore,
  startDate,
}) => {
  return (
    <div className="anime-card-line flex bg-[#172235] shadow rounded-lg overflow-hidden mb-7 h-20">
      <p className="rank-number text-lg">#{idx + 1}</p>

      <div className="image w-1/6 relative ml-3">
        <Image
          src={imgurl}
          alt={title.english}
          className="w-full h-full"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="details p-2 flex flex-row justify-between flex-grow">
        <div>
          <a
            href="/"
            className="title text-lg font-semibold text-black mb-2 block"
          >
            {title.english}
          </a>

          <div className="genres flex flex-wrap mb-4">
            {genres.map((genre) => (
              <button
                className="mr-2 mb-1 py-1 px-2 rounded-full text-sm"
                style={{
                  backgroundColor: imgColor,
                  color: "black",
                }}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="stats flex items-center m">
          <div className="popularity mr-12">
            {avgScore}%
            <div className="popularity-score text-xs">{popularity2} users</div>
          </div>

          <div className="format mr-12">
            {format}
            <div className="duration">{duration} min</div>
          </div>

          <div className="season text-gray-500">
            {startDate.year} {season}
            <div className="finished text-green-500 font-bold mr-4">
              {finished ? "Finished" : "Ongoing"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCardLine;
