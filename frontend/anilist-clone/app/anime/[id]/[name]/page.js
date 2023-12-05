"use client";
import { Navbar } from "@/app/components/imports";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const [anime, setAnime] = useState({});

  const query = `
  query animeDetail{
    Page(perPage:1){
        media(search: "${params.name}") {
      id
      title {
        romaji
        english
      }
      bannerImage
      coverImage {
        large
        color
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      type
      format
      status
      episodes
      genres
      averageScore
    }
  }
  }
`;
  // Define the config we'll need for our Api request
  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }
  // Make the HTTP Api request
  async function animeDetail() {
    return fetch(url, options).then(handleResponse).catch(handleError);
  }

  useEffect(() => {
    animeDetail().then((data) => {
      setAnime(data.data.Page.media[0]);
    });
  }, []);

  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0a1625]">
      <Navbar transparant={true} />

      <div className="absolute top-0 h-96 w-full overflow-hidden z-0">
        {anime && anime.coverImage && (
          <Image
            src={anime.bannerImage}
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt="banner image"
          />
        )}
      </div>

      <div className="main container mx-auto flex-grow mt-6 absolute top-96 bg-slate-500 ml-12">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ...">01</div>
          <div class="col-span-2 ...">02</div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>
      </div>
    </div>
  );
};

export default page;
