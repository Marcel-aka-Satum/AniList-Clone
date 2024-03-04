"use client";
import { Navbar } from "@/app/components/imports";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const [anime, setAnime] = useState({});

  //I should probably not query in this file, but it's fine for now :)
  const query = `
  query animeDetail{
    Page(perPage:1){
        media(search: "${params.name}" id:${params.id}) {
      description
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
    const fetchData = async () => {
      const result = await animeDetail();
      setAnime(result.data.Page.media[0]);
    };
    fetchData();
  }, []);

  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0a1625]">
      <Navbar transparant={true} />

      <div className="relative h-96 w-full">
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

      <div className="main container mx-auto flex-grow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-500">
        <div className="grid grid-cols-1/6 h-48 relative">
          {/*first grid column with the image */}
          <div>
            <div className="cover-wrap absolute -top-10">
              <div className="cover">
                <Image
                  src={anime && anime.coverImage && anime.coverImage.large}
                  height={200}
                  width={200}
                  alt="cover image"
                />
              </div>
              <div className="grid grid-cols-2 mt-3">
                <button className="btn btn-primary">Add to List</button>
                <button className="btn btn-secondary">Heart</button>
              </div>
            </div>
          </div>

          {/*second grid column with the anime description*/}
          <div>
            <div className="grid grid-rows-2">
              <div className="description mt-3">{anime.description}</div>
              <div className="nav mt-5">nav1 nav2 nav3</div>
            </div>
          </div>
        </div>
      </div>

      {/*2 grid columns under description one for ratings second for staff info etc...*/}
      <div className="second main container">
        <div className="grid grid-cols-1/6 relative mt-64">
          <div>highest rated all time</div>

          <div>Relations Characters Staff</div>
        </div>
      </div>
    </div>
  );
};

export default page;
