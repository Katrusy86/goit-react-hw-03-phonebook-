import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './contactForm.module.css'



class ContactForm extends Component{
    state = {
        name:'',
        number:''  
    };


    handleChange = e =>{
        const {name,value}=e.target;
        this.setState({
            [name]:value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        (this.state.name !== '' && this.state.number !== '' )?(       
        this.props.onAddContact({...this.state})
        ): alert ('Fields must be filled out')
        this.setState({
            name:'',
            number:''
        })
    };
    
    

    render() {
           const {name, number}=this.state
            return (
                <>
                <form className={styles.addContactForm} onSubmit = {this.handleSubmit}>
                    <label className={styles.label}> 
                        Name
                        <input className={styles.input__field} type="text" value = {name} name="name" onChange={this.handleChange} placeholder="Enter your name "/>
                    </label>
                    <label className={styles.label}> 
                        Number
                        <input className={styles.input__field} type="tel" value = {number} name="number" onChange={this.handleChange} placeholder="Enter your phone"/>
                    </label> 
                    <button className={styles.button} type="submit">Add contact</button>
                    </form>
                </>
            )
            } 
}

ContactForm.propTypes = {
    name:PropTypes.string,
    number:PropTypes.number
}


export default ContactForm