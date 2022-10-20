import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ state }) => {
  return (
    <ul className={css.contactList}>
      {state.contacts.length > 0 &&
        state.contacts.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              <span className={css.name}>{contact.name}: </span>
              <span className={css.number}>{contact.number}</span>
            </li>
          );
        })}
    </ul>
  );
};
