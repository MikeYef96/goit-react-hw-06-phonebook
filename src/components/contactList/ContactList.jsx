import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import { Filter } from '../filter/Filter';
import { ButtonFn } from '../../lib/ButtonFn';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <div className={css.listItemContainer}>
              <p>
                {name}: <span>{number}</span>
              </p>

              <ButtonFn
                name="delete"
                type="button"
                onClick={() => onDeleteContact(id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
