// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
import css from './Home.module.css';
export default function Home() {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeHeader}>
        Hello! Please, register or log in to use the app
      </h1>
    </div>
  );
}
