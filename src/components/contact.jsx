import React, { useState } from 'react';
import axios from 'axios';
import '../css/contact.css';

function Contact(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    

    const[receivingEmail, setReceivingEmail] = useState('dm.prajapati8585@gmail.com');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    // const handleSubject = (e) => {
    //     setSubjct(e.target.vlaue);
    // }

    const sendEmail = async() => {
        try{
            const response = await axios.post('http://localhost:8000/send-email', {name,email,message});
            

            if(response.status === 200){
                alert('Email sent sucscessfully');
                setEmail('');
                setMessage('');
                setName('')
            }
        }
        catch(error){
            console.error('Error in sending email'+ error);
            alert('there is a problem in sending email');
        }
    }


    return(
        <>
            <div className="container">
                <div className="row">
                    <h1 className='text-center mt-5'>Contact Me</h1>
                </div>

                <div className="row mt-2">
                    <h6 className='text-center'>If you have any question you can send me an email using this form.</h6>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form"> 
                            <h3>Send Me a Message</h3>
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type='text' 
                                id='name' 
                                placeholder='Enter your name' 
                                className='form-control'
                                value={name}
                                onChange={handleName}
                                required
                            />

                            <label htmlFor="email" className="form-label mt-4">Your Email</label>
                            <input type='email' 
                                id='email' 
                                placeholder='Enter your email' 
                                className='form-control'
                                value={email}
                                onChange={handleEmail}
                            />

                            {/* <label htmlFor="subject" className="form-label mt-4">Subject of the email</label>
                            <input type='text' 
                                id='subject' 
                                placeholder='Subject of the email' 
                                className='form-control'
                                value={subject}
                                onChange={handleSubject}
                            /> */}

                            <label htmlFor="message" className="form-label mt-4">Enter Message</label>
                            <textarea type='text' 
                                id='message' 
                                placeholder='Enter your Message' 
                                className='form-control'
                                value={message}
                                rows = "5"
                                onChange={handleMessage}
                            />

                            <div className="btn btn-primary mt-5" onClick={sendEmail}> Send Email</div>

                        </div>
                    </div>
                    <div className="col-sm-6 rightside_contact">
                        <h3>You are sending an email to </h3>
                        <p className='mb-0'>Deep Prajapati</p>
                        <p className='mb-0'>dm.prajapati8585@gmail.com</p>
                        <p>Contact Number: +1 (437) 335-2299</p>
                    </div>
                    
                </div>

            </div>
        </>
    )

}

export default Contact