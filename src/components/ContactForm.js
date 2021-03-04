import React, { Component } from 'react';
import { ButtonFn } from '../lib/ButtonFn';
import { InputFn } from '../lib/InputFn';
import css from './ContactForm.module.css';

const initState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...initState,
  };

  handleChange = ({ target: { name, value } }) => {
    if (name === value) return alert(`${name} already exists`);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      ...initState,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <InputFn
            className={css.inputName}
            name="name"
            onChange={this.handleChange}
            titleNameInput="Name"
            type="text"
            placeholder="Enter name"
            value={name}
            required
          />
          <InputFn
            name="number"
            onChange={this.handleChange}
            titleNameInput="Number"
            type="tel"
            placeholder="Enter number"
            value={number}
            required
          />
          <br />
          <ButtonFn name="Add contact" type="submit" />
        </form>
      </>
    );
  }
}
