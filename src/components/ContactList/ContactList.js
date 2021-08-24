import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
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
  console.log(contacts);
  const filter = useSelector(state => state.contacts.filter);
  return (
    <ul className={styles.ContactList}>
      {contacts &&
        contacts
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
ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default ContactList;
