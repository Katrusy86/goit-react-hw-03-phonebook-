import React, { Component } from 'react'
import { uuid } from 'uuidv4';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter'

const filterContact = (contacts,filter) => {
    return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
}

class App extends Component {
    state = {
        contacts: [],
        filter: '',
      }

// ==================localStorage===============
    componentDidMount(){
        const persistedContact = localStorage.getItem('contacts');

        if(persistedContact) {
            const contacts = JSON.parse(persistedContact);
            this.setState({contacts})
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.contacts !== this.state.contacts){
        localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
        }
    }

// ==================================================

    addContact = (contact) => {
        const contactToAdd = {
            ...contact,
            id: uuid()
        }
        const {name} = contact
        // console.log(contact);
        const findContact = this.state.contacts.find(((contact) => contact.name === name))
        // console.log(findContact)
        if(!findContact) {        
        this.setState(prevState => ({
            contacts:[...prevState.contacts, contactToAdd]
        }))} else alert(`${name} is already in contacts!`)
    };


    deleteContact = id => {
        this.setState(prevState =>({
            contacts:prevState.contacts.filter(contact => contact.id !== id)
        }))
    }

    filterContact = (e) => {
        this.setState({
            filter: e.target.value
        })
    }

   render() {
       const {contacts,filter}=this.state
       const filteredContacts = filterContact(contacts,filter);
    //    console.log(filteredContacts);
        return (
            <>
            <div>
                <h1>Phonebook</h1>
                <ContactForm onAddContact={this.addContact}/>
                
                <h2>Contacts</h2>
                <Filter value={filter} onFilterContact = {this.filterContact} />
                <ContactList items={filteredContacts} onDeleteContact = {this.deleteContact}/>
            </div>
            </>
        )
   }   
}

export default App