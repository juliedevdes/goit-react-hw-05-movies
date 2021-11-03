import { Route, Switch } from "react-router";

import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/views/HomePage/HomePage.js";
import MoviesPage from "./components/views/MoviesPage/MoviesPage.js";
import MovieDetailsPage from "./components/views/MovieDetailsPage/MovieDetailsPage.js";

function App() {
  //функция установить стейт и в стейте держать ИД текущего фильма???

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <h1>404 nothing found</h1>
        </Route>
      </Switch>
    </div>
  );
}

//добавить еще для отдельного фильма

export default App;
