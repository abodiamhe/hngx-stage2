import { NavLink } from "react-router-dom";

import classes from "./Button.module.css";

export default function Button() {
  return (
    <NavLink to="tickets">
      <button className={classes.button}>
        My tickets <span>&rarr;</span>
      </button>
    </NavLink>
  );
}
