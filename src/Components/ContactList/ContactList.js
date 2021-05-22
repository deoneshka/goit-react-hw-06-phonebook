import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) =>
                    <li className={styles.item} key={id}>{name}: {number}
                        <button className={styles.button} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    )
};

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({name}) =>
        name.toLowerCase().includes(normalizedFilter));
}

const mapStateToProps = ({ contacts: { items, filter }}) => ({
    contacts: getVisibleContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);