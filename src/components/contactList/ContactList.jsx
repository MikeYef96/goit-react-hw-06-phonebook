import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
// import PropTypes from 'prop-types';
import { Filter } from '../filter/Filter';
import { ButtonFn } from '../../lib/ButtonFn';
// import { ListItem } from './ListItem';
import css from './ContactList.module.css';

export function ContactList({
  onDeleteContact,
  length,
  value,
  onChangeFilter,
}) {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  onDeleteContact = id => dispatch(deleteContact(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <>
      <h2>Contacts</h2>
      {length > 0 && <Filter value={value} onChangeFilter={onChangeFilter} />}
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <div className={css.listItemContainer}>
              <p>
                {name}: <span>{number}</span>
              </p>

              <ButtonFn
                name="delete"
                type="button"
                onClick={evt => onDeleteContact(id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func,
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
// };
