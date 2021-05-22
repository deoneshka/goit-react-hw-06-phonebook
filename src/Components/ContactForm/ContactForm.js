import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const { items } = this.props.contacts;
        this.setState({ name: '', number: '' });
        
        if (items.find(item => item.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        };

        this.props.onSubmit(name, number);
    }

    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value });
    };

    render () {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.field}>
                    Name
                </label>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange={this.handleChangeName}
                />
                <label className={styles.field}>
                    Number
                </label>
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={this.state.number}
                    onChange={this.handleChangeNumber}
                />
                <button className={styles.button} type="submit">
                    Add contact
                </button>
            </form>
        )
    };
};

const mapStateToProps = ({contacts}) => ({
    contacts,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsActions.addContact(name, number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);