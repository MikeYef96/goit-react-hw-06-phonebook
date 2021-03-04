import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm';
import { ContactList } from './contactList/ContactList';
import css from './Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) this.setState({ contacts: contactsParsed });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    let isUniqueName = true;
    this.state.contacts.forEach(contact => {
      if (contact.name.includes(contactToAdd.name)) {
        isUniqueName = false;
        return alert(`${contactToAdd.name} is already exists`);
      } else {
        isUniqueName = true;
      }
    });

    isUniqueName &&
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contactToAdd],
        };
      });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = evt => this.setState({ filter: evt.target.value });

  filterForContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <React.Fragment>
        <div className={css.container}>
          <ContactForm onAddContact={this.addContact} />
          <ContactList
            length={contacts.length}
            contacts={this.filterForContacts()}
            value={filter}
            onDeleteContact={this.deleteContact}
            onChangeFilter={this.changeFilter}
          />
        </div>
      </React.Fragment>
    );
  }
}
