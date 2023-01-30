import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const everythingUrl = "https://newsapi.org/v2/everything";
const topHeadlinesUrl = "https://newsapi.org/v2/top-headlines";
const sourcesUrl = "https://newsapi.org/v2/top-headlines/sources";

export const getArticlesByPopularity = async (
  { language, q, pageSize, page },
  { rejectWithValue }
) => {
  try {
    const response = await axios({
      method: "get",
      url: everythingUrl,
      headers: { "X-Api-Key": API_KEY },
      params: {
        sortBy: "popularity",
        language: language,
        q: q,
        pageSize: pageSize,
        page: page,
      },
    });

    if (!response.status === 200) {
      throw new Error("Server Error.");
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getArticlesByPublishedDate = async (
  { language, q, pageSize, page },
  { rejectWithValue }
) => {
  try {
    const response = await axios({
      method: "get",
      url: everythingUrl,
      headers: { "X-Api-Key": API_KEY },
      params: {
        sortBy: "publishedAt",
        language: language,
        q: q,
        pageSize: pageSize,
        page: page,
      },
    });

    if (!response.status === 200) {
      throw new Error("Server Error.");
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getArticlesByRelevancy = async (
  { language, q, pageSize, page },
  { rejectWithValue }
) => {
  try {
    const response = await axios({
      method: "get",
      url: everythingUrl,
      headers: { "X-Api-Key": API_KEY },
      params: {
        sortBy: "relevancy",
        language: language,
        q: q,
        pageSize: pageSize,
        page: page,
      },
    });

    if (!response.status === 200) {
      throw new Error("Server Error.");
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getNewsSources = async (
  { country, language, category },
  { rejectWithValue }
) => {
  try {
    const response = await axios({
      method: "get",
      url: sourcesUrl,
      headers: { "X-Api-Key": API_KEY },
      params: {
        country: country,
        language: language,
        category: category,
      },
    });

    if (!response.status === 200) {
      throw new Error("Server Error.");
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getTopHeadlines = async (
  { category, country, pageSize, page },
  { rejectWithValue }
) => {
  try {
    const response = await axios({
      method: "GET",
      url: topHeadlinesUrl,
      headers: { "X-Api-Key": API_KEY },
      params: {
        category: category,
        country: country,
        pageSize: pageSize,
        page: page,
      },
    });

    if (!response.status === 200) {
      throw new Error("Server Error.");
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};
