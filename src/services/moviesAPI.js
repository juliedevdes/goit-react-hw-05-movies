//import axios from "axios";

const API_KEY = "4cd8eda69724fa63af45af35bb5db6f9";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_URL = `${BASE_URL}/trending/movie/day`;
// const SEARCH_URL = `${BASE_URL}/search/movie`;
// const ID_URL = `${BASE_URL}/movie/`;

export default class MoviesApi {
  constructor() {
    this.searchQuery = "";
    //this.pageNum = 1;
  }
  fetchPopular() {
    return fetch(`${POPULAR_URL}?api_key=${API_KEY}&page=1`)
      .then((r) => r.json())
      .then((movies) => {
        //this.pageNum += 1;
        return movies;
      })
      .catch(console.log);
  }

  // resetPage() {
  //   this.pageNum = 1;
  // }

  get query() {
    return this.this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
