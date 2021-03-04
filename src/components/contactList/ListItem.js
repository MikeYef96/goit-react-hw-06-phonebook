import React from 'react';
import { ButtonFn } from '../../lib/ButtonFn';
import css from '../contactList/ContactList.module.css';

export function ListItem({ name, number, onDeleteContact }) {
  return (
    <>
      <div className={css.listItemContainer}>
        <p>{name}</p>
        <span>{number}</span>
        <ButtonFn name="delete" type="button" onClick={onDeleteContact} />
      </div>
    </>
  );
}
