import React, { createContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactSwitch from 'react-switch';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';
import { logOut } from 'redux/auth/auth.operations';
import css from './SharedLayout.module.css';

export const ThemeContext = createContext(null);

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme ? initialTheme : 'light';
  });

  const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
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
                    <div className={css.switch}>
                      <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        handleDiameter={35}
                        onColor="#ffc400"
                        offColor="#4e4e4e"
                        offHandleColor="#fff"
                        onHandleColor="#000"
                        height={30}
                        width={60}
                        borderRadius={50}
                        activeBoxShadow="0px 0px 1px 2px #fffc35"
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        uncheckedHandleIcon={
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '100%',
                            }}
                          >
                            🌞
                          </div>
                        }
                        checkedHandleIcon={
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '100%',
                              border: '1px solid #fffc35',
                              borderRadius: 50,
                            }}
                          >
                            🌙
                          </div>
                        }
                      />
                    </div>
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
      </div>
    </ThemeContext.Provider>
  );
};

export default SharedLayout;
