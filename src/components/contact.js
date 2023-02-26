import React from 'react';
import  './css/contact.css';

export default function Contact() {
    return (
        <section className="sec-container">
            <div className="contact-container">
                <h1>Get in touch!</h1>
                <h3>Sign up for a class or get in touch</h3>
                <form className='cf'>
                    <div className='half left cf'>
                        <input type='text' placeholder='Name' name='user_name' required />
                        <input type='email' placeholder='Email Address' name='user_email' required />
                        <input type='text' placeholder='Course Code' name='course_code' />
                        <input type="number" placeholder='Phone Number'name='phone_number' />
                    </div>
                    <div className='half right cf'>
                        <textarea name='message' type='text' placeholder='Message'required ></textarea>
                    </div>
                    <input type='submit' value='Submit' id='input-submit' />
                </form>
            </div>
        </section>    
    )
}