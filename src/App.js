import { Route, Switch } from "react-router";

import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/HomePage/HomePage.js";
import MoviesPage from "./components/MoviesPage/MoviesPage.js";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <h1>404 nothing found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
