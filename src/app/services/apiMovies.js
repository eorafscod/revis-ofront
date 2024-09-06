const { default: axios } = require("axios");

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: 'pt-br'
  },
  headers: {
    Authorization:
      "Bearer ",
  },
});

export default apiMovies; 
