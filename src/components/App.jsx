import React, { Component } from 'react';
import { PhoneForm } from './phoneForm/phoneForm';

import { ContactFilter } from './contactFilter/contactFilter';
import { ContactList } from './contactList/contactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onformSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDeleteHandler = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  componentDidMount() {
     const contacts = localStorage.getItem(
      'id'
    );

    if (contacts) {
      try {
        const parseContactList = JSON.parse(contacts);
        this.setState({ contacts: parseContactList });
      } catch {
        this.setState({ contacts: [] });
      }
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('id', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={this.onformSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <ContactFilter onFilter={this.onFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.onDeleteHandler}
          filterContacts={this.onFilterContacts}
        />
      </div>
    );
  }
}
