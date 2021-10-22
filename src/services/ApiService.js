import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "542d74f2cbfe42ee5911b551c2bf1936";

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    const trendingMovies = data.results;

    return trendingMovies;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    const movieById = data;
    return movieById;
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    const movieCast = data.cast;

    return movieCast;
  } catch (error) {
    console.error(error);
  }
};

export const getReviews = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    const movieReview = data.results;

    return movieReview;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieBySearch = async (searchQuery) => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&language=en-US`
    );

    const MovieBySearch = data.results;

    return MovieBySearch;
  } catch (error) {
    console.error(error);
  }
};
