import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
   

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
 

    return(
    <section>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" value={email} onChange={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <input type="message" value={message} onChange={handleChange} rows="5" name="message"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
    );
}

export default ContactForm