import axios from "axios";
const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

//categories

export const fetchCategories = async () => {
  try {
    return await api.get("/api/categories");
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error after logging it
  }
};

export const fetchArticles = async (queryString: string) => {
  console.log("asdasasd", `/api/articles?${queryString}`);

  return api.get(`/api/articles?${queryString}`);
};
