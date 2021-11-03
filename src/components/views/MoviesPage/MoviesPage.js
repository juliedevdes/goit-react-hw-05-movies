import { useState } from "react";

import MoviesApi from "../../../services/moviesAPI";

import ListItem from "../../ListItem/ListItem";
import s from "./MoviesPage.module.css";

const moviesApi = new MoviesApi();

function MoviesPage() {
  const [inputValue, setinputValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

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
        <input
          className={s.input}
          type="text"
          placeholder="search through movies"
          value={inputValue}
          onChange={inputChangeHandler}
        ></input>
        <button className={s.button} type="submit">
          submit
        </button>
      </form>
      {searchResults && (
        <ul>
          {searchResults.map((m) => (
            <ListItem key={m.id} movie={m} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;
