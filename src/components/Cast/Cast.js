import MoviesApi from "../../services/moviesAPI";
import { useState, useEffect } from "react";

const moviesApi = new MoviesApi();

function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchCast(movieId).then((r) => {
      setCast(r.cast);
    });
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>{actor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
