import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";

import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/views/HomePage/HomePage.js";

const MoviesPage = lazy(() =>
  import(
    "./components/views/MoviesPage/MoviesPage.js" /*webpackChunkName: "movie-page"*/
  )
);

const MovieDetailsPage = lazy(() =>
  import(
    "./components/views/MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName: "movie-details"*/
  )
);

function App() {
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<p>Downloading...</p>}>
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
      </Suspense>
    </div>
  );
}

export default App;
