import { Link } from "react-router-dom";

import s from "./ListItem.module.css";

function ListItem({ movie }) {
  return (
    <li className={s.item} key={movie.id}>
      {movie.poster_path && (
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          height="200"
        />
      )}

      <div className={s.info}>
        <Link className={s.title} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
        <p className={s.rating}>average rating: {movie.vote_average}</p>
        <p>release date: {movie.release_date}</p>
      </div>
    </li>
  );
}

export default ListItem;
