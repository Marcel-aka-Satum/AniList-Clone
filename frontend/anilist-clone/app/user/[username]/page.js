"use client";
import React, { useState, useEffect } from "react";
import {
  Footer,
  Navbar,
  ImageCard,
  WatchedCard,
  AnimeCard,
} from "../../../components/imports";
import Link from "next/link";

export default function page() {
  const [user, setUser] = useState(null);
  const [watchedAnimes, setWatchedAnimes] = useState([]);
  const [favoriteAnimes, setFavoriteAnimes] = useState([]);
  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    setUser(storedUser);
    //fetch favorite animes
    fetch(`http://localhost:8000/api/favorite_anime/${storedUser.id}`)
      .then((response) => response.json())
      .then((data) => setFavoriteAnimes(data))
      .catch((error) => console.error("Error:", error));
    //fetch watched animes
    fetch(`http://localhost:8000/api/watched_anime/${storedUser.id}`)
      .then((response) => response.json())
      .then((data) => setWatchedAnimes(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!user) {
    return <div className="text-red-500">Not logged in.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a1625]">
      <Navbar />
      <div className="banner mt-32 relative" style={{ height: "250px" }}>
        <img
          src={
            user.banner
              ? `http://localhost:8000${user.banner}`
              : "/defaultBanner.jpg"
          }
          style={{ width: "100%", height: "100%" }}
          alt="Banner"
        />
        <img
          src={
            user.avatar
              ? `http://localhost:8000${user.avatar}`
              : "/defaultAvatar.jpg"
          }
          className="absolute"
          style={{ left: "16.667%", bottom: "20px", height: 120, width: 120 }}
          alt="Profile"
        />
        <div className="absolute" style={{ left: "24%", bottom: "20px" }}>
          <h2 className="text-black font-bold">{user.username}</h2>
        </div>
      </div>

      <div className="flex justify-center space-x-8 p-4">
        <Link href="/overview">Overview</Link>
        <Link href="/anime-list">Anime List</Link>
        <Link href="/manga-list">Manga List</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/social">Social</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/submissions">Submissions</Link>
      </div>

      <div className="content container max-w-1/2 mx-auto mb-20 ">
        <div className="pb-20">
          <div className="flex space-x-4 p-4">
            <div className="flex flex-col space-y-4 w-1/2">
              <div className="flex flex-col space-y-4">
                <div>
                  Favorite Anime
                  <div className="grid grid-cols-5 gap-4">
                    {favoriteAnimes.map((anime) => (
                      <Imag
                        eCard
                        key={anime.id}
                        imgsrc={`http://localhost:8000${anime.image}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  Favorite Characters
                  <div className="grid grid-cols-5 gap-4 text-red-500">
                    Soon coming out...
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-1/2">
              <div>
                <div className="grid grid-cols-3 gap-3">
                  <div>Total Anime</div>
                  <div>Days Watched</div>
                  <div>Mean Score</div>
                </div>
              </div>
              <div>
                Activity
                <textarea
                  className="w-full h-20 p-3 mb-2 border rounded-md"
                  placeholder="Write a status..."
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button className="px-4 py-2 text-white bg-red-500 rounded-md">
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                    Publish
                  </button>
                </div>
              </div>
              <div>
                Recently Watched Animes
                <div className="grid grid-cols-2 gap-3">
                  {watchedAnimes.map((anime) => (
                    <WatchedCard
                      key={anime.id}
                      imgsrc={`http://localhost:8000${anime.image}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
