import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { state } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          placeholder="Jack Daniels"
          onChange={this.handleInputChange}
          className={css.input}
          type="text"
          value={state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          onChange={this.handleInputChange}
          placeholder="230-23-23"
          className={css.input}
          type="tel"
          value={state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  state: PropTypes.object,
  onAddContact: PropTypes.func,
};
