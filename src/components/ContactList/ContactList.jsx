import { ContactListWrapper } from './ContactListStyled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/thunk';
import React, { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(deleteContactsThunk(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ContactListWrapper>
  );
};
