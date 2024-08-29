import axios from "axios";
import { Results } from "../Types/types";

const API_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "6lr2C1U4MhDQp4qID6P5C9hwNgPy75_4DCrC4cDGlEk";

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<Results[]> => {
  try {
    const response = await axios.get<{ results: Results[] }>(API_URL, {
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
