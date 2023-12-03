import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';
import { logOut } from 'redux/auth/auth.operations';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.layoutWrp}>
      <header className={css.pageHeader}>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/"
            end
          >
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="/contacts"
              >
                Contacts
              </NavLink>

              <div className={css.userHeaderWrp}>
                <p className={css.username}>
                  Welcome, <b>{user.name}</b>
                </p>
                <button
                  className={css.logOutBtn}
                  type="button"
                  onClick={() => dispatch(logOut())}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className={css.entryOptionsWrp}>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="/login"
              >
                Log In
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main className={css.mainWrp}>{children}</main>
    </div>
  );
};

export default SharedLayout;
