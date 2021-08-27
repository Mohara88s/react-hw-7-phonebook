import { createSelector } from '@reduxjs/toolkit';

const getError = state => state.contacts.error;
const getLoading = state => state.contacts.loading;
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

const contactsSelectors = {
  getError,
  getLoading,
  getContacts,
  getFilter,
  getFiltredContacts,
};
export default contactsSelectors;
