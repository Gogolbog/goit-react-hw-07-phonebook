import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
