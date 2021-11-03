import { useState } from "react";
//import {Link} from 'react-router-dom';

function MoviesPage() {
  const [inputValue, setinputValue] = useState("");
  const [query, setQuery] = useState("");

  const inputChangeHandler = function (e) {
    e.preventDefault();
    setinputValue(e.currentTarget.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Search through movies</label>
        <input value={inputValue} onChange={inputChangeHandler}></input>
        <button type="submit">Search</button>
      </form>

      {query && (
        <ul>
          <li>список по поиску, каждый елемент тоже ссылка</li>
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;
