import { NavLink } from "react-router-dom";

import hugeIcon from "../../assets/hugeicons_ticket-01.svg";
import ticzIcon from "../../assets/ticz.svg";
import Button from "./Button";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className="head">
      <header className={classes.header}>
        <div className={classes.logo}>
          <div className={classes.logo_icon_container}>
            <img src={hugeIcon} alt="logo icon" className={classes.logo_icon} />
          </div>
          <img src={ticzIcon} alt="logo image" className={classes.logo_image} />
        </div>
        <div className={classes.hide}>
          <ul className={classes.links}>
            <li className={classes.link}>
              <NavLink to="/" end>
                {({ isActive }) => (
                  <a className={isActive ? classes.active_header : undefined}>
                    Events
                  </a>
                )}
              </NavLink>
            </li>
            <li className={classes.link}>
              <NavLink to="tickets" end>
                {({ isActive }) => (
                  <a className={isActive ? classes.active_header : undefined}>
                    My Tickets
                  </a>
                )}
              </NavLink>
            </li>
            <li className={classes.link}>
              <NavLink to="about" end>
                {({ isActive }) => (
                  <a className={isActive ? classes.active_header : undefined}>
                    About Project
                  </a>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <Button />
      </header>
    </div>
  );
}
