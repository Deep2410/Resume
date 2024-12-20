import React, {useState, useEffect} from 'react';
import '../css/authentication.css'
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Authentication() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inProgress, setInProgress] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [tokenMessage, setTokenMessage] = useState('');
    const [tockenAvailable, setTockenAvailable] = useState(false);
    const [userID, setUserId] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            setTokenMessage('Token not found! please log in.');
            return;
        }
        // http://localhost:8000/contact
        // https://resume-backend-9i7r.onrender.com/contact

        axios.get('https://resume-backend-9i7r.onrender.com/contact', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const user_id = response.data.userId;
            if(response.status === 200){
                // navigate('/projects/auth/home',{state: {user_id} });
                setUserId(user_id)
                setTockenAvailable(true);
            }
            console.log(response.data.userId);
            console.log(response.data.message);
        }).catch(error => {
            console.error('Error in useEffect hook: ' + error);
            setTokenMessage('Error: '+error.response.data.message);
        });
    },[]);

    const login = async () => {
        setInProgress(true);
        try{
            // https://resume-backend-9i7r.onrender.com/login
            // http://localhost:8000/login
            const response = await axios.post("https://resume-backend-9i7r.onrender.com/login", {email, password});

            if(response.status === 200){
                console.log(response.data.message);
                const token = response.data.token;
                const user_id = response.data.user_id;
                console.log(user_id);
                localStorage.setItem('token',token);
                console.log(token)
                navigate('/projects/auth/home', {state: {user_id}});
            }
        }
        catch(error){
            setMessage(error.response.data.message);
        }
        setInProgress(false);
    }

    const navigateToHome = () => {
        if(tockenAvailable){
            console.log(userID);
            navigate('/projects/auth/home',{state: {user_id: userID} });
        }
    }
    
    return(
        <>  
            <div className="bg-light d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm form_container">
                <h2 className="text-center mb-4 login_heading">Login</h2>
                <form autoComplete='off'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => {setEmail(e.target.value)}}
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
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        {
                        inProgress ? 
                        <div className="loading-container">
                            <div class="spinner-border" role="status">
                            </div>
                            <p>Signing in...</p>
                        </div>:
                            <button type="button" onClick={login} className="btn btn-primary">Login</button>
                        }
                        <p className='text-center mt-4'>{message}</p>
                    </div>
                    <div className="mt-3 text-center">
                        <Link to="/projects/auth/signup" className="text-decoration-none">New User? Register here</Link>
                        {tockenAvailable ? 
                            <div>
                                <p>You are already Loged In!! Click on button below to log in</p>
                                <button className='btn btn-primary' onClick={navigateToHome} type='button'>Existing User</button>
                            </div> :
                         ''}
                    </div>
                </form>
            </div>

            
        </div>    
        
        </>
    )
}
export default Authentication;