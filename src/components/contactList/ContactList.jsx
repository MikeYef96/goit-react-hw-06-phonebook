import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import { Filter } from '../filter/Filter';
import { ButtonFn } from '../../lib/ButtonFn';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = evt =>
    dispatch(deleteContact(evt.target.closest('[data-id]').dataset.id));

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id} data-id={id}>
            <div className={css.listItemContainer}>
              <p>
                {name}: <span>{number}</span>
              </p>

              <ButtonFn name="delete" type="button" onClick={onDeleteContact} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
};
