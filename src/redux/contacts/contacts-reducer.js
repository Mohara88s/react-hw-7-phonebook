import actions from './/contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    {
      const isAvailable = state.some(
        contactItem =>
          contactItem.name.toLowerCase() === payload.name.toLowerCase(),
      );
      if (isAvailable) {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }
    }
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
