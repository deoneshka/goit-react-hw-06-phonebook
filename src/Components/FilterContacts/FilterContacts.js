import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './FilterContacts.module.css'

const FilterContacts = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
    value: state.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions.changeFilter(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);