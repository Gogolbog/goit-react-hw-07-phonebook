import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Button, Form, Input, Label } from './ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { createContactsThunk } from 'redux/thunk';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const findSimilarContact = () => {
    return contacts.find(contact => contact.name === name);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };
    findSimilarContact()
      ? alert(`${name} is already in contacts.`)
      : dispatch(createContactsThunk(newContact));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
}
