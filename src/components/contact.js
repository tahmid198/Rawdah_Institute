import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  './css/contact.css';

export default function Contact() {

   
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm('Rawdah_Contact1', 'Rawdah_Contact_Form1', form.current, 'BvLCNuBNFSSHXUGfu')
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)


        .then((result) => {
            console.log(result.text);
            console.log("Message Sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section className="sec-container">
            <div className="contact-container">
                <h1>Get in touch!</h1>
                <h3>Sign up for a class or get in touch</h3>
                <form className='cf'ref={form} onSubmit={sendEmail}>
                    <div className='half left cf'>
                        <input type='text' placeholder='Name' name='from_name' required />
                        <input type='email' placeholder='Email address' name='from_email' required />
                        <input type='text' placeholder='Course code' name='course_code' />
                        </div>
                        <div className='half right cf'>
                        <textarea name='message' type='text' placeholder='Message'></textarea>
                    </div>
                    <input type='submit' value='Submit' id='input-submit' />
                </form>
            </div>
        </section>    
    )
}