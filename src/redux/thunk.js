import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { createContact, deleteContact, getContacts } from './contactsAPI';

// export const getContactsThunk = createAsyncThunk(
//   'contacts/get',
//   () => getContacts
// );
// export const createContactsThunk = createAsyncThunk(
//   'contacts/create',
//   newContact => createContact(newContact)
// );
// export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
//   deleteContact(id)
// );

axios.defaults.baseURL = 'https://64491776b88a78a8f0fd24b7.mockapi.io';

axios.interceptors.request.use(request => {
  return request;
});

export const getContactsThunk = createAsyncThunk('contacts/get', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const createContactsThunk = createAsyncThunk(
  'contacts/create',
  async newContact => {
    const { data } = await axios.post('contacts', newContact);
    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    console.log('penis');
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
