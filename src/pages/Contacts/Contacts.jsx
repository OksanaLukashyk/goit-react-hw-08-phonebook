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

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {error &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
