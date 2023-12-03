import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      email: evt.currentTarget.elements.email.value,
      password: evt.currentTarget.elements.password.value,
    };

    dispatch(logIn(formData));
    evt.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="user@domain.com"
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          placeholder="At least 7 characters"
          required
        />
      </label>
      <button type="submit" className={css.logInBtn}>
        Log In
      </button>
    </form>
  );
};
