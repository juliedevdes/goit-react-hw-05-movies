import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <NavLink exact className={s.link} activeClassName={s.active} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
