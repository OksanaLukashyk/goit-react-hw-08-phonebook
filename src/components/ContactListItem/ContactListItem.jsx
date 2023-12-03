import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import css from './ContactListItem.module.css';

// export const ContactListItem = ({ name, phone, id }) => {
export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem} key={id}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>{name}:</p>
        {/* <p className={css.contactPhone}>{phone}</p> */}
        <p className={css.contactPhone}>{number}</p>
      </div>
      <button
        className={css.deleteContactBtn}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
