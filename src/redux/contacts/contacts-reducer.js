import {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [fetchContactsRequest]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    // {
    //   const isAvailable = state.some(
    //     contactItem =>
    //       contactItem.name.toLowerCase() === payload.name.toLowerCase(),
    //   );
    //   if (isAvailable) {
    //     alert(`${payload.name} is already in contacts.`);
    //     return state;
    //   }
    // }
    return [...state, payload];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});
