import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth.selectors';
import css from './Home.module.css';

export default function Home() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return (
    <div className={css.homeContainer}>
      {shouldRedirect ? (
        <div className={css.greetingsWrp}>
          <h1 className={css.homeHeader}>Hello!</h1>
          <p className={css.greetingText}>
            Please register or log in to use the app.
          </p>
        </div>
      ) : (
        <div className={css.greetingsWrp}>
          <h1 className={css.homeHeader}>Welcome!</h1>
          <p className={css.greetingText}>
            Please proceed to the Contacts page. Have a nice day!
          </p>
        </div>
      )}
    </div>
  );
}
