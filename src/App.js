import React, { Component } from 'react';
import Container from "./Components/Container";
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import FilterContacts from './Components/FilterContacts';
import "./App.css"

class App extends Component {

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;

        if (nextContacts !== prevContacts) {
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    };

    // addContact = (name, number) => {
    //     const { contacts } = this.state;
        
    //     if (contacts.find(contact => contact.name === name)) {
    //         alert(`${name} is already in contacts.`);
    //         return;
    //     }
        
    //     const contact = {
    //         id: shortid.generate(),
    //         name,
    //         number,
    //     };

    //     this.setState(({ contacts }) => ({
    //         contacts: [contact, ...contacts],
    //     }));
    // };

    render() {
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <FilterContacts />
                <ContactList />
            </Container>
        )
    };
};

export default App;