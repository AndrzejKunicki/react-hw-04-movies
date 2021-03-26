import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={styles.baseLink}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.baseLink}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
