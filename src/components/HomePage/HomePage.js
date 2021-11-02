import MoviesApi from "../../services/moviesAPI";
import { useState, useEffect } from "react";
const moviesApi = new MoviesApi();

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchPopular().then((movies) => {
      console.log(movies.results);
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <h1> Popular</h1>
      <ul>
        <li>names</li>
        {movies.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
