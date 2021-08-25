import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operaions';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  return (
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
  );
};

export default ContactList;
