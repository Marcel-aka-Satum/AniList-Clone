import React from "react";

const HomeAbout = () => {
  return (
    <div className="Home-about-wrapper flex items-center flex-wrap flex-col">
      <h1 className="font-bold text-4xl">The next-generation anime platform</h1>
      <br></br>
      <h2 className="text-lg text-[#acd5f2]">
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
      <div className="home-inf-card w-7/10 h-[400px] mx-auto">
        <ul className="home-inf-card-list flex flex-wrap">
          <div className="feature-card w-1/2">feature1</div>
          <div className="feature-card w-1/2">feature2</div>
          <div className="feature-card w-1/2">feature3</div>
          <div className="feature-card w-1/2">feature4</div>
        </ul>
      </div>
    </div>
  );
};

export default HomeAbout;
