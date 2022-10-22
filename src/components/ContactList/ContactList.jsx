import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ onRemove, state }) => {
  return (
    <ul className={css.contactList}>
      {state.contacts.length > 0 &&
        state.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(state.filter.toLowerCase())
          )
          .map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <span className={css.name}>{contact.name}: </span>
                <span className={css.number}>{contact.number}</span>
                <button
                  onClick={onRemove}
                  id={contact.id}
                  className={css.button}
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
    </ul>
  );
};
ContactList.propTypes = {
  state: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
};
