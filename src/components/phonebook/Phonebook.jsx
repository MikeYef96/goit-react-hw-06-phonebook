import React from 'react';
import { connect } from 'react-redux';

import { addContact, deleteContact } from '../../redux/actions';
import { ContactForm } from '../contactForm/ContactForm';
import { ContactList } from '../contactList/ContactList';
import css from './Phonebook.module.css';

function Phonebook() {
  return (
    <React.Fragment>
      <div className={css.container}>
        <ContactForm onAddContact={addContact} />
        <ContactList onDeleteContact={deleteContact} />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(Phonebook);
