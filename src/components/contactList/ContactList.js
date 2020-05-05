import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../contact/Contact'
import styles from './contactlist.module.css'


const ContactList = ({items,onDeleteContact}) => (
    <ul className={styles.phoneBookList}>
        {items.map(item =>(
            <li className={styles.contact} key={item.id}>
                <Contact {...item} onDeleteContact = {()=>onDeleteContact(item.id)}/>
            </li>
        ))}
        
    </ul>
);


ContactList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired}).isRequired).isRequired,
    onDeleteContact:PropTypes.func.isRequired
}

export default ContactList;