import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initial';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       return [...state, action.payload];
//     },
//     deleteContact(state, action) {
//       const id = action.payload;
//       return state.filter(contact => contact.id !== id);
//     },
//   },
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
