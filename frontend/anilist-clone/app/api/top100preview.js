//Popular anime this season
//This file contains queries of popular anime this season

const query = `
query popularAnimeThisSeason{
  Page(perPage:10){
      media(sort: POPULARITY_DESC, season: FALL, seasonYear: 2023) {
    id
    title {
      romaji
      english
    }
    coverImage {
      medium
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
    duration
    popularity
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
export async function top100AnimeFetch() {
  return fetch(url, options).then(handleResponse).catch(handleError);
}
