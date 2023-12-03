import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.length !== 0 ? (
        contacts.map(contact => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))
      ) : (
        <li style={{ width: 450, textAlign: 'center' }}>
          "You haven't added any contact yet..."
        </li>
      )}
    </ul>
  );
};
