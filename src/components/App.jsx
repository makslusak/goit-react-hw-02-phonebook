import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm/ContactForm.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleRemoveContact = evt => {
    this.setState(
      prevSt =>
        (this.state.contacts = prevSt.contacts.filter(
          contact => evt.target.id !== contact.id
        ))
    );
  };
  handleInputChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };
  handleAddContact = (name, number) => {
    this.setState(prevSt => {
      if (prevSt.contacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return;
      } else {
        return {
          contacts: [...prevSt.contacts, { name, number, id: nanoid() }],
        };
      }
    });
  };
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm state={this.state} onAddContact={this.handleAddContact} />
        <Filter state={this.state} onInputChange={this.handleInputChange} />
        <h2>Contacts</h2>
        <ContactList onRemove={this.handleRemoveContact} state={this.state} />
      </div>
    );
  }
}
