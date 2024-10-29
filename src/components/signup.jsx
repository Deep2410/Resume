import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css'
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')
    const [statusCode, setStatusCode] = useState(0);

    const signUp = async () => {
        if(password === confirmPassword){
            try{
                setMessage('');
                setStatusCode(0);
                const response = await axios.post('https://resume-backend-9i7r.onrender.com/signup', {name,email,password});
                console.log(`server response: ${response.data.message}`);
                setMessage(response.data.message);
                setStatusCode(response.status);
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
            catch(error){
                console.error(`error in sending data: ${error}`);
                setMessage(error.response.data.error);
            }
        }
        else{
            alert('Your password is not matching');
        }
    };

    return (
        <div className="bg-light d-flex justify-content-center align-items-center signup_form_container">
            <div className="card p-3 shadow-sm form_container">
                <h2 className="text-center mb-4 login_heading">Sign Up</h2>
                <form autoComplete='off'>
                    <div className="mb-3">
                        <div className="message_container">
                            {message.length ? <p className={`text-center ${statusCode === 201? 'green': 'red'}`}>{message}</p> : ''}
                        </div>
                        
                        <br />
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="button" onClick={signUp} className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="mt-3 text-center">
                        <Link to="/projects/auth" className="text-decoration-none">Already have an account? Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;
