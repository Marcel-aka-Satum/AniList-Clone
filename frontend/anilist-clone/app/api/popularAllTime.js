//Popular anime next season
//This file contains queries of popular animes of all time

const query = `
query popularAllTime{
  Page(perPage: 6) {
    media(sort: POPULARITY_DESC) {
      id
      title {
        romaji
        english
      }
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
    cache: "no-store", // Add this line
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
export async function popularAllTime() {
  return fetch(url, options).then(handleResponse).catch(handleError);
}
