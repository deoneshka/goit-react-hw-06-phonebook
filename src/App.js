import React, { Component } from 'react';
import Container from "./Components/Container";
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import FilterContacts from './Components/FilterContacts';
import "./App.css"

class App extends Component {
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