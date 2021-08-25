import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operaions';

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
        onClick={() => dispatch(deleteContact(id))}
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
};
export default Contact;
