import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { PageWrapper } from './AppStyled';

export default function App() {
  return (
    <PageWrapper>
      <h1>Phone Book</h1>

      <ContactForm />
      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </PageWrapper>
  );
}
