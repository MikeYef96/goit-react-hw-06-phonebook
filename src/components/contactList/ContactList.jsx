import React from 'react';
import { Filter } from '../filter/Filter';
import { ListItem } from './ListItem';
import css from './ContactList.module.css';

export const ContactList = ({
  contacts,
  onDeleteContact,
  length,
  value,
  onChangeFilter,
}) => (
  <>
    <h2>Contacts</h2>
    {length > 0 && <Filter value={value} onChangeFilter={onChangeFilter} />}
    <ul>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  </>
);
