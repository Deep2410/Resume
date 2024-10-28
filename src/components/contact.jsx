import React, { useState } from 'react';
import axios from 'axios';
import '../css/contact.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [emailInProgress, setEmailInProgress] = useState(false);
    const [showGreetings, setShowGreetings] = useState(false);

    const [receivingEmail] = useState('dm.prajapati8585@gmail.com');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendEmail = async () => {
        if (email === '' || message === '' || name === '') {
            alert('Please fill all the details of the Form');
        } else {
            try {
                setEmailInProgress(true);
                const response = await axios.post('https://resume-backend-9i7r.onrender.com/send-email', { name, email, message });

                if (response.status === 200) {
                    setEmail('');
                    setMessage('');
                    setName('');
                    setShowGreetings(true);
                    setTimeout(() => {
                        setShowGreetings(false);
                    }, 5000);
                }
            } catch (error) {
                console.error('Error in sending email' + error);
                alert('There is a problem in sending email');
            }

            setEmailInProgress(false);
        }
    }

    return (
        <>
            {showGreetings ? (
                <div className='container card greeting_container'>
                    <h1 className='text-center'>Thank you for contacting me!</h1>
                </div>
            ) : (
                <div className="container card contact-container shadow-lg">
                    <div className="row">
                        <h1 className='text-center'>Contact Me</h1>
                    </div>

                    <div className="row mt-2">
                        <h6 className='text-center'>
                            If you have any questions, feel free to send me an email using this form.
                        </h6>
                    </div>

                    <div className="row mt-3 d-flex align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="form p-4 rounded shadow-sm bg-light">
                                <h3 className='mb-4'>Send Me a Message</h3>

                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type='text'
                                    id='name'
                                    placeholder='Enter your name'
                                    className='form-control mb-3'
                                    value={name}
                                    onChange={handleName}
                                    required
                                />

                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type='email'
                                    id='email'
                                    placeholder='Enter your email'
                                    className='form-control mb-3'
                                    value={email}
                                    onChange={handleEmail}
                                    required
                                />

                                <label htmlFor="message" className="form-label">Enter Message</label>
                                <textarea type='text'
                                    id='message'
                                    placeholder='Enter your message'
                                    className='form-control mb-4'
                                    value={message}
                                    rows="5"
                                    onChange={handleMessage}
                                    required
                                />

                                {emailInProgress ? (
                                    <div className='mt-4 d-flex align-items-center'>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                        <p className='ml-3 mb-0'>Sending Email...</p>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary mt-3 w-100" onClick={sendEmail}>Send Email</button>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-6 rightside_contact p-4" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
                            <h3 className='mb-3'>You are sending an email to:</h3>
                            <p className='mb-0'><strong>Deep Prajapati</strong></p>
                            <p className='mb-0'>dm.prajapati8585@gmail.com</p>
                            <p>Contact Number: +1 (437) 335-2299</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;
