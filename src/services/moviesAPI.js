//import axios from "axios";

import { Component } from "react";

const API_KEY = "39ac1dadde9328ac6948024fd12d0769";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_URL = `${BASE_URL}/trending/movie/day`;
// const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;

export default class MoviesApi extends Component {
  state = {
    searchQuery: "",
    //this.pageNum = 1;
  };

  fetchPopular() {
    return fetch(`${POPULAR_URL}?api_key=${API_KEY}&page=1`)
      .then((r) => r.json())
      .then((movies) => {
        return movies;
      })
      .catch(console.log);
  }

  fetchByID(movieId) {
    return fetch(`${ID_URL}${movieId}?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((movies) => {
        return movies;
      })
      .catch(console.log);
  }

  fetchReviews(ID) {
    return fetch(`${ID_URL}${ID}/reviews?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((movies) => {
        return movies;
      })
      .catch(console.log);
  }

  fetchCast(ID) {
    return fetch(`${ID_URL}${ID}/credits?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((movies) => {
        return movies;
      })
      .catch(console.log);
  }

  // resetPage() {
  //   this.pageNum = 1;
  // }

  get query() {
    return this.state.searchQuery;
  }

  set query(newQuery) {
    this.setState({ searchQuery: newQuery });
  }
}
