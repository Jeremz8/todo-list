import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TODO List Manager</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/main" activeClassName={classes.active}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/todolist" activeClassName={classes.active}>
              TodoList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
