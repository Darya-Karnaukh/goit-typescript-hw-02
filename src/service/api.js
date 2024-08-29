import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "6lr2C1U4MhDQp4qID6P5C9hwNgPy75_4DCrC4cDGlEk";

export const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};
