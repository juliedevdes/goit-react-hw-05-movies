import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import MoviesApi from "../../../services/moviesAPI";

import s from "./MoviesPage.module.css";

const moviesApi = new MoviesApi();

function MoviesPage() {
  const [inputValue, setinputValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const { url } = useRouteMatch();

  const inputChangeHandler = function (e) {
    e.preventDefault();
    setinputValue(e.currentTarget.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    moviesApi.searchRequest(inputValue).then((r) => {
      setSearchResults(r.results);
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Search through movies</label>
        <input value={inputValue} onChange={inputChangeHandler}></input>
        <button className={s.button} type="submit">
          search
        </button>
      </form>

      {searchResults && (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;
