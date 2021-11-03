import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import MoviesApi from "../../../services/moviesAPI";
const moviesApi = new MoviesApi();

function HomePage() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    moviesApi.fetchPopular().then((movies) => {
      //console.log(movies.results);
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending today:</h2>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`${url}movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
