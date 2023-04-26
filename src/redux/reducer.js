import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
