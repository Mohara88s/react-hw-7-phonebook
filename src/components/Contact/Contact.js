import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name} {number}
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(contactsActions.deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default Contact;
