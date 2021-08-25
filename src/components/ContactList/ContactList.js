import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operaions';
import { useEffect } from 'react';

const ContactList = () => {
  const error = useSelector(state => state.contacts.error);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  return (
    <>
      {loading && <h2 className={styles.loading}>thinking...</h2>}
      {error && <h2 className={styles.error}>{error}</h2>}
      <ul className={styles.ContactList}>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
