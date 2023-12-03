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
    <div className={css.container}>
      <header className={css.pageHeader}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/" end>
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink className={css.navLink} to="/contacts">
                Contacts
              </NavLink>

              <div className={css.wrapper}>
                <p className={css.username}>Welcome, {user.name}</p>
                <button type="button" onClick={() => dispatch(logOut())}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div>
              <NavLink className={css.navLink} to="/register">
                Register
              </NavLink>
              <NavLink className={css.navLink} to="/login">
                Log In
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default SharedLayout;
