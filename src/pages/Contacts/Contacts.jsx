import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Loader } from '../../components/Loader/Loader';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.glass}>
      {isLoading && !error && <Loader />}
      <div className={css.phonebookWrp}>
        <div className={css.blockWrp}>
          <h1 className={css.blockTitle}>Add new contact:</h1>
          <ContactForm />
          <Filter />
        </div>

        <div className={css.blockWrp}>
          <h2 className={css.blockTitle}>Contacts</h2>
          {error &&
            Notify.failure(
              `Oops, some error occured... Please try reloading the page`,
              { timeout: 6000 }
            )}
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
