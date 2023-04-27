import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContacts } from './contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  () => getContacts
);
export const createContactsThunk = createAsyncThunk(
  'contacts/create',
  newContact => createContact(newContact)
);
export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
