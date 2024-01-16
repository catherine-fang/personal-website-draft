import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;