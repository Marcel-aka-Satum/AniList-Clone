"use client";
import React, { useState } from "react";
import {
  Footer,
  Navbar,
  ImageCard,
  WatchedCard,
} from "../../../components/imports";
import Link from "next/link";

export default function page() {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null);

  if (!user) {
    return <div className="text-red-500">Not logged in.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a1625]">
      <Navbar />
      <div className="banner mt-32 relative" style={{ height: "250px" }}>
        <img
          src={"/banner2.jpg"}
          style={{ width: "100%", height: "100%" }}
          alt="Banner"
        />
        <img
          src={"/avatar.jpg"}
          className="absolute"
          style={{ left: "16.667%", bottom: "20px", height: 120, width: 120 }}
          alt="Profile"
        />
        <div className="absolute" style={{ left: "20%", bottom: "20px" }}>
          <h2 className="text-white font-bold">{user}</h2>
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
                  Anime
                  <div className="grid grid-cols-5 gap-4">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                  </div>
                </div>
                <div>
                  Characters
                  <div className="grid grid-cols-5 gap-4">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
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
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
                  <WatchedCard />
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
