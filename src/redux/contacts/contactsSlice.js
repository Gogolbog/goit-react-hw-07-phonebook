import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './initial';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [createContactsThunk, deleteContactsThunk, getContactsThunk];

const typeOfThunk = type => arrThunk.map(el => el[type]);

const handelPending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handelFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
};
const handelFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};
const handelFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handelFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handelFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handelFulfilledDel)
      .addMatcher(isAnyOf(...typeOfThunk(PENDING)), handelPending)
      .addMatcher(isAnyOf(...typeOfThunk(REJECTED)), handelRejected)
      .addMatcher(isAnyOf(...typeOfThunk(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
