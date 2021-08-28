import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operaions';
import { useEffect } from 'react';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const error = useSelector(contactsSelectors.getError);
  const loading = useSelector(contactsSelectors.getLoading);
  const filtredContacts = useSelector(contactsSelectors.getFiltredContacts);
  return (
    <>
      {loading && <h2 className={styles.loading}>thinking...</h2>}
      {error && <h2 className={styles.error}>{error}</h2>}
      <ul className={styles.ContactList}>
        {filtredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
