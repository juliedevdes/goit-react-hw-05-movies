import { Route, useParams, useRouteMatch, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import MoviesApi from "../../../services/moviesAPI";
import s from "../../Navigation/Navigation.module.css";

const Cast = lazy(() => import("../../Cast/Cast" /*webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import("../../Reviews/Reviews" /*webpackChunkName: "reviews"*/)
);

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

      <Suspense fallback={<p>Downloading...</p>}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
