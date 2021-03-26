import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const apiKey = '90996ae54f24edbe7886996fac12fc31';

const fetchTrendingMovies = () => {
  return axios.get(`3/trending/all/day?api_key=${apiKey}`);
};

const fetchSearchMovies = (search = '') => {
  return axios.get(
    `3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`,
  );
};

const fetchDetailsMovie = (movieId = '') => {
  return axios.get(`3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
};

const fetchCastMovie = (movieId = '') => {
  return axios.get(
    `3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  );
};

const fetchReviesMovie = (movieId = '') => {
  return axios.get(
    `3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
};

export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchDetailsMovie,
  fetchCastMovie,
  fetchReviesMovie,
};
