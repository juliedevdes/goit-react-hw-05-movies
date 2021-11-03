import { Route, useParams, useRouteMatch, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

import MoviesApi from "../../../services/moviesAPI";

import Cast from "../../Cast/Cast";
import Reviews from "../../Reviews/Reviews";

import s from "../../Navigation/Navigation.module.css";

const moviesApi = new MoviesApi();

function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchByID(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <h1>Details</h1>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            height="500"
          />
          <p>{movie.overview}</p>
        </div>
      )}
      <NavLink className={s.link} activeClassName={s.active} to={`${url}/cast`}>
        Cast
      </NavLink>
      <NavLink
        className={s.link}
        activeClassName={s.active}
        to={`${url}/reviews`}
      >
        Reviews
      </NavLink>

      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieDetailsPage;
