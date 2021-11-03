import { useState, useEffect } from "react";

import s from "./HomePage.module.css";

import ListItem from "../../ListItem/ListItem";
import MoviesApi from "../../../services/moviesAPI";
const moviesApi = new MoviesApi();

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchPopular().then((movies) => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <h2 className={s.title}>Trending today:</h2>
      <ul className={s.list}>
        {movies && movies.map((m) => <ListItem key={m.id} movie={m} />)}
      </ul>
    </div>
  );
}

export default HomePage;
