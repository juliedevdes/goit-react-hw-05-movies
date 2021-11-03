import MoviesApi from "../../services/moviesAPI";
import { useState, useEffect } from "react";

import s from "./Cast.module.css";

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
            <li className={s.item} key={actor.cast_id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  height="100"
                />
              )}
              <div className={s.info}>
                <h4 className={s.name}>{actor.name}</h4>
                <p>character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
