import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm/ContactForm.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleInputChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };
  handleAddContact = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    this.setState(prevSt =>
      contacts.push({
        name,
        number,
        id: nanoid(),
      })
    );
    this.setState({ filter: '', name: '', number: '' });
    // contacts.push({
    //   name,
    //   id: nanoid(),
    // });

    console.log(this.state.contacts);
  };
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm
          state={this.state}
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <ContactList state={this.state} />
      </div>
    );
  }
}
